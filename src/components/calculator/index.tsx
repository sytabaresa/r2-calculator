import { FunctionalComponent, h } from 'preact';
import { useMachine } from 'preact-robot';
import machine from './machine';

const KeyButton = (props: {
    displayName: string;
    preset?: string;
    onClick?: (e: any) => void;
    className?: string;
    keyName?: string
}) => {

    const { className = '', displayName, preset = 'default', keyName } = props

    const styles: { [key: string]: string } = {
        default: "bg-white text-gray-800 active:bg-white/80",
        primary: "bg-principal text-white active:bg-principal/80",
        back: "bg-gray-800 text-white active:bg-gra-500/80",
    }

    const style = styles[preset || 'default']

    return (
        <button
            {...props}
            className={`w-full h-full text-2xl lg:text-3xl ${style} ${className}`}
            name={keyName ?? displayName}
        >
            {displayName}
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
        const op = e.target.name
        console.log("OP pressed:", op)
        send({ type: "OP", value: op })
    }

    const onUnOp = (e: any) => {
        const op = e.target.name
        console.log("UnOP pressed:", op)
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
            <div className="keypad flex-grow grid grid-cols-4 bg-black" style={{ gridGap: '1px' }}>
                <KeyButton displayName="AC" onClick={onAC} />
                <KeyButton displayName="C" onClick={onC} />
                <KeyButton displayName="÷" keyName="/" preset="primary" onClick={onOp} />
                <KeyButton displayName="×" keyName="*" preset="primary" onClick={onOp} />
                <KeyButton displayName="7" onClick={onNum} />
                <KeyButton displayName="8" onClick={onNum} />
                <KeyButton displayName="9" onClick={onNum} />
                <KeyButton displayName="+" preset="primary" onClick={onOp} />
                <KeyButton displayName="4" onClick={onNum} />
                <KeyButton displayName="5" onClick={onNum} />
                <KeyButton displayName="6" onClick={onNum} />
                <KeyButton displayName="−" keyName="-" preset="primary" onClick={onOp} />
                <KeyButton displayName="1" onClick={onNum} />
                <KeyButton displayName="2" onClick={onNum} />
                <KeyButton displayName="3" onClick={onNum} />
                <KeyButton displayName="=" className="row-span-2" preset="primary" onClick={onEq} />
                <KeyButton displayName="0" className="" onClick={onNum} />
                <KeyButton displayName="." onClick={onNum} />
                <KeyButton displayName="x²" keyName="^2" className="" preset="primary" onClick={onUnOp} />

            </div>
        </div>
    )
}

export default Calculator