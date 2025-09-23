import { createMachine, state, transition, reduce, guard } from 'robot3';

interface MachineContext {
  buf: string;
  ans: number;
  op: string;
}

interface MachineEvent {
  type: string;
  value: string;
}

type Guard = (ctx: MachineContext, ev: MachineEvent) => boolean
type Reducer = (ctx: MachineContext, ev: MachineEvent) => MachineContext

const validOps: { [key: string]: (a: number, b: number) => number } = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
}


const validUnOps: { [key: string]: (a: number) => number } = {
  '**2': (a) => a ** 2
}

const opValid: Guard = (ctx, ev) =>
  Object.keys(validOps).includes(ev.value)

const unopValid: Guard = (ctx, ev) =>
  Object.keys(validUnOps).includes(ev.value)

const addToBuffer: Reducer = (ctx, ev) => {
  return { ...ctx, buf: (ctx.buf + ev.value).slice(0, 10) }
}

const unopFn: Reducer = (ctx, ev) => {
  const v = validUnOps[ev.value](parseFloat(ctx.buf))
  return { ...ctx, buf: `${v}`, ans: v }
}

const allClear: Reducer = () => {
  return { buf: '', ans: 0, op: '' }
}

const clear: Reducer = (ctx) => {
  return { ...ctx, buf: '' }
}

const saveAns: Reducer = (ctx, ev) => {
  return { ...ctx, buf: '', op: ev.value, ans: parseNumber(ctx.buf) }
}

const evalResult: Reducer = (ctx) => {
  const value = evalOpFn(ctx.op, ctx.ans, parseNumber(ctx.buf))
  return { ...ctx, buf: `${value}`, ans: value, op: '' }
}

const evalAccuResult: Reducer = (ctx, ev) => {
  return { ...ctx, buf: '', op: ev.value, ans: evalOpFn(ev.value, ctx.ans, parseNumber(ctx.buf)) }
}
const evalOpFn = (op: string, a: number, b: number) => {
  return validOps[op](a, b)
}

const parseNumber = (str: string) => {
  return parseFloat(str == '' ? '0' : str)
}

const cleanTransitions = (current: string) => [
  transition("AC", "normal", reduce(allClear)),
  transition("C", current, reduce(clear)),
]

// FSM
const machine = createMachine<any, MachineContext>('normal', {
  normal: state(
    transition("NUM", "normal", reduce(addToBuffer)),
    transition("OP", "accumulator", guard(opValid), reduce(saveAns)),
    transition("UnOP", "result", guard(unopValid), reduce(unopFn)),
    ...cleanTransitions("normal")
  ),
  accumulator: state(
    transition("NUM", "accumulator", reduce(addToBuffer)),
    transition("OP", "accumulator", guard(opValid), reduce(evalAccuResult)),
    transition("EVAL", "result", reduce(evalResult)),
    ...cleanTransitions("accumulator")
  ),
  result: state(
    transition("NUM", "normal", reduce(addToBuffer)),
    transition("OP", "accumulator", guard(opValid), reduce(saveAns)),
    transition("UnOP", "result", guard(unopValid), reduce(unopFn)),
    ...cleanTransitions("result")
  )

}, el => el);

export default machine;
