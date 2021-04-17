import { FunctionalComponent, h } from 'preact';
import { useMachine } from 'preact-robot';
import machine from './machine';

import { HTMLAttributes } from "react";

const KeyButton = (props: {
    keyName: string,
    preset?: string
} & HTMLAttributes<HTMLButtonElement>) => {

    const { className, keyName, preset } = props

    const styles: { [key: string]: string } = {
        default: "bg-white text-gray-800",
        primary: "bg-principal text-white",
        back: "bg-gray-800 text-white",
    }

    const style = styles[preset || 'default']

    return (
        <button
            {...props}
            className={`w-full h-full text-2xl ${style} ${className}`}
            name={keyName}
        >
            {keyName}
        </button>
    )

}

const Calculator: FunctionalComponent = () => {
    const [current, send] = useMachine(machine, { buf: '', ans: 0, op: '' });


    const onNum = (e: any) => {
        console.log("num pressed:", e.target.name)
        send({ type: "NUM", value: e.target.name })
    }

    const onOp = (e: any) => {
        console.log("op pressed:", e.target.name)
        send({ type: "OP", value: e.target.name })
    }

    const onEq = (e: any) => {
        console.log("EVAL")
        send("EVAL")
    }

    const onAC = (e: any) => {
        console.log("AC")
        send("AC")
    }

    const onC = (e: any) => {
        console.log("C")
        send("C")
    }

    console.log(current)


    return (
        <div className="w-full h-full flex flex-col ">
            <div className="w-full h-44 md:h-56 lg:h-64 p-2 bg-gray-900 text-white text-right text-7xl md:text-8xl break-words">
                {current.context.buf != '' ? parseFloat(current.context.buf).toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 5
                }) : '0'}
            </div>
            <div className="keypad flex-grow grid grid-cols-4" style={{ gridGap: '1px' }}>
                <KeyButton keyName="AC" onClick={onAC} />
                <KeyButton keyName="C" onClick={onC} />
                <KeyButton keyName="/" preset="primary" onClick={onOp} />
                <KeyButton keyName="x" preset="primary" onClick={onOp} />
                <KeyButton keyName="7" onClick={onNum} />
                <KeyButton keyName="8" onClick={onNum} />
                <KeyButton keyName="9" onClick={onNum} />
                <KeyButton keyName="+" preset="primary" onClick={onOp} />
                <KeyButton keyName="4" onClick={onNum} />
                <KeyButton keyName="5" onClick={onNum} />
                <KeyButton keyName="6" onClick={onNum} />
                <KeyButton keyName="-" preset="primary" onClick={onOp} />
                <KeyButton keyName="1" onClick={onNum} />
                <KeyButton keyName="2" onClick={onNum} />
                <KeyButton keyName="3" onClick={onNum} />
                <KeyButton keyName="=" className="row-span-2" preset="primary" onClick={onEq} />
                <KeyButton keyName="0" className="col-span-2" onClick={onNum} />
                <KeyButton keyName="." onClick={onNum} />

            </div>
        </div>
    )
}

export default Calculator