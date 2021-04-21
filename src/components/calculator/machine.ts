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

const acuBuf = (ctx: MachineContext, ev: MachineEvent): MachineContext => {
    return { ...ctx, buf: (ctx.buf + ev.value).slice(0, 10) }
}

const unFunc = (ctx: MachineContext, ev: MachineEvent): MachineContext => {
    const v = validUnOps[ev.value](parseFloat(ctx.buf))
    return { ...ctx, buf: v + '', ans: v }
}

const AC = (): MachineContext => {
    return { buf: '', ans: 0, op: '' }
}

const C = (ctx: MachineContext): MachineContext => {
    return { ...ctx, buf: '' }
}

// FSM
const machine = createMachine('normal', {
    normal: state(
        transition("NUM", "normal", reduce(acuBuf)),
        transition("OP", "accu",
            reduce((ctx: MachineContext, ev: MachineEvent): MachineContext => {
                return { ...ctx, buf: '', op: ev.value, ans: parseFloat(ctx.buf == '' ? '0' : ctx.buf) }
            })),
        transition("UnOP", "result", reduce(unFunc)),
        transition("AC", "normal", reduce(AC)),
        transition("C", "normal", reduce(C)),
    ),
    accu: state(
        transition("NUM", "accu", reduce(acuBuf)),
        transition("OP", "accu", reduce((ctx: MachineContext, ev: MachineEvent): MachineContext => {
            return { ...ctx, buf: '', op: ev.value, ans: validOps[ev.value](ctx.ans, parseFloat(ctx.buf == '' ? '0' : ctx.buf)) }
        })),
        transition("EVAL", "result", reduce((ctx: MachineContext, ev: MachineEvent): MachineContext => {
            const v = validOps[ctx.op](ctx.ans, parseFloat(ctx.buf == '' ? '0' : ctx.buf))
            return { ...ctx, buf: v + "", ans: v, op: '' }
        })),
        transition("AC", "normal", reduce(AC)),
        transition("C", "accu", reduce(C)),
    ),
    result: state(
        transition("NUM", "normal", reduce(acuBuf)),
        transition("OP", "accu", reduce((ctx: MachineContext, ev: MachineEvent): MachineContext => {
            return { ...ctx, buf: '', op: ev.value }
        })),
        transition("AC", "normal", reduce(AC)),
        transition("C", "result", reduce(C)),
        transition("UnOP", "result", reduce(unFunc)),
    )

}, el => el);

export default machine;