import { FunctionalComponent, h } from 'preact';
import { useMachine } from 'preact-robot';
import machine from './machine';

const KeyButton = (props: {
    keyName: string;
    preset?: string;
    onClick?: (e: any) => void;
    className?: string;
    sym?: string
}) => {

    const { className = '', keyName, preset = 'default' } = props

    const styles: { [key: string]: string } = {
        default: "bg-white text-gray-800",
        primary: "bg-principal text-white",
        back: "bg-gray-800 text-white",
    }

    const style = styles[preset || 'default']

    return (
        <button
            {...props}
            className={`w-full h-full text-2xl lg:text-3xl ${style} ${className}`}
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
        const op = e.target.name.replace('x', '*') //.replace('^','**')
        console.log("op pressed:", op)
        send({ type: "OP", value: op })
    }

    const onUnOp = (e: any) => {
        const op = e.target.name.replace('^2', '**2')
        console.log("unary op pressed:", op)
        send({ type: "UnOP", value: op })
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

    // console.log(current)

    return (
        <div className="w-full h-full flex flex-col lg:border-2 border-gray-900">
            <div className="w-full h-44 md:h-56 lg:h-64 p-2 bg-gray-900 text-white text-right text-7xl md:text-8xl break-words">
                {current.context.buf != '' &&
                    current.context.buf != '.' ?
                    parseFloat(current.context.buf).toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 5
                    }) : '0'}
            </div>
            <div className="keypad flex-grow grid grid-cols-4" style={{ gridGap: '1px' }}>
                <KeyButton keyName="AC" onClick={onAC} />
                <KeyButton keyName="C" onClick={onC} />
                <KeyButton keyName="÷" sym="/" preset="primary" onClick={onOp} />
                <KeyButton keyName="×" sym="*" preset="primary" onClick={onOp} />
                <KeyButton keyName="7" onClick={onNum} />
                <KeyButton keyName="8" onClick={onNum} />
                <KeyButton keyName="9" onClick={onNum} />
                <KeyButton keyName="+" preset="primary" onClick={onOp} />
                <KeyButton keyName="4" onClick={onNum} />
                <KeyButton keyName="5" onClick={onNum} />
                <KeyButton keyName="6" onClick={onNum} />
                <KeyButton keyName="−" sym="-" preset="primary" onClick={onOp} />
                <KeyButton keyName="1" onClick={onNum} />
                <KeyButton keyName="2" onClick={onNum} />
                <KeyButton keyName="3" onClick={onNum} />
                <KeyButton keyName="=" className="row-span-2" preset="primary" onClick={onEq} />
                <KeyButton keyName="0" className="" onClick={onNum} />
                <KeyButton keyName="." onClick={onNum} />
                <KeyButton keyName="x²" sym="^2" className="" preset="primary" onClick={onUnOp} />

            </div>
        </div>
    )
}

export default Calculator