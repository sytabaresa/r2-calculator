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

const validOps: { [key: string]: (a: number, b: number) => number } = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
}

const validUnOps: { [key: string]: (a: number) => number } = {
    '**2': (a) => a ** 2
}

const validOpsValid = (ctx: MachineContext, ev: MachineEvent): boolean =>
    Object.keys(validOps).includes(ev.value)

const validUnOpsValid = (ctx: MachineContext, ev: MachineEvent): boolean =>
    Object.keys(validUnOps).includes(ev.value)

const acuBuf = (ctx: MachineContext, ev: MachineEvent): MachineContext => {
    return { ...ctx, buf: (ctx.buf + ev.value).slice(0, 10) }
}

const unFunc = (ctx: MachineContext, ev: MachineEvent): MachineContext => {
    const v = validUnOps[ev.value](parseFloat(ctx.buf))
    return { ...ctx, buf: v + '', ans: v }
}

const ACfunc = (): MachineContext => {
    return { buf: '', ans: 0, op: '' }
}

const Cfunc = (ctx: MachineContext): MachineContext => {
    return { ...ctx, buf: '' }
}

// FSM
const machine = createMachine('normal', {
    normal: state(
        transition("NUM", "normal", reduce(acuBuf)),
        transition("OP", "accu",
            guard(validOpsValid),
            reduce((ctx, ev): MachineContext => {
                return { ...ctx, buf: '', op: ev.value, ans: parseFloat(ctx.buf == '' ? '0' : ctx.buf) }
            })),
        transition("UnOP", "result", guard(validUnOpsValid), reduce(unFunc)),
        transition("AC", "normal", reduce(ACfunc)),
        transition("C", "normal", reduce(Cfunc)),
    ),
    accu: state(
        transition("NUM", "accu", reduce(acuBuf)),
        transition("OP", "accu",
            guard(validOpsValid),
            reduce((ctx: MachineContext, ev: MachineEvent): MachineContext => {
                return { ...ctx, buf: '', op: ev.value, ans: validOps[ev.value](ctx.ans, parseFloat(ctx.buf == '' ? '0' : ctx.buf)) }
            })),
        transition("EVAL", "result", reduce((ctx: MachineContext, ev: MachineEvent): MachineContext => {
            const v = validOps[ctx.op](ctx.ans, parseFloat(ctx.buf == '' ? '0' : ctx.buf))
            return { ...ctx, buf: v + "", ans: v, op: '' }
        })),
        transition("AC", "normal", reduce(ACfunc)),
        transition("C", "accu", reduce(Cfunc)),
    ),
    result: state(
        transition("NUM", "normal", reduce(acuBuf)),
        transition("OP", "accu",
            guard(validOpsValid),
            reduce((ctx: MachineContext, ev: MachineEvent): MachineContext => {
                return { ...ctx, buf: '', op: ev.value }
            })),
        transition("AC", "normal", reduce(ACfunc)),
        transition("C", "result", reduce(Cfunc)),
        transition("UnOP", "result", guard(validUnOpsValid), reduce(unFunc)),
    )

}, el => el);

export default machine;