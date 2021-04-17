import { createMachine, state, transition, reduce } from 'robot3';


interface MachineContext {
    buf: string;
    ans: number;
    op: string;
}

interface MachineEvent {
    type: string;
    value: string;
}

const acuBuf = (ctx: MachineContext, ev: MachineEvent): MachineContext => {
    return { ...ctx, buf: (ctx.buf + ev.value).slice(0, 10) }
}

const AC = (): MachineContext => {
    return { buf: '', ans: 0, op: '' }
}

const C = (ctx: MachineContext): MachineContext => {
    return { ...ctx, buf: '' }
}


const machine = createMachine('normal', {
    normal: state(
        transition("NUM", "normal", reduce(acuBuf)),
        transition("OP", "accu", reduce((ctx: MachineContext, ev: MachineEvent): MachineContext => {
            return { ...ctx, buf: '', op: ev.value, ans: parseFloat(ctx.buf == '' ? '0' : ctx.buf) }
        })),
        transition("AC", "normal", reduce(AC)),
        transition("C", "normal", reduce(C)),
    ),
    accu: state(
        transition("NUM", "accu", reduce(acuBuf)),
        transition("OP", "accu", reduce((ctx: MachineContext, ev: MachineEvent): MachineContext => {
            return { ...ctx, buf: '', op: ev.value, ans: eval(ctx.ans + ctx.op + parseFloat(ctx.buf)) }
        })),
        transition("EVAL", "result", reduce((ctx: MachineContext, ev: MachineEvent): MachineContext => {
            const v = eval(ctx.ans + ctx.op + parseFloat(ctx.buf))
            return { ...ctx, buf: v, ans: v, op: '' }
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
    )

}, el => el);

export default machine;