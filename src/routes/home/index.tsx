import { FunctionalComponent, h } from 'preact';
import { useState } from "preact/hooks"
import Calculator from '../../components/calculator';

const Home: FunctionalComponent = () => {

    const [popup, setpopup] = useState(false)

    return (
        <div className="flex relative">
            <div className="w-full h-screen lg:w-2/3 lg:p-4 lg:max-w-2xl">
                <Calculator />
            </div>
            <div className={`lg:opacity-100 lg:visible p-4 bg-white fixed lg:static z-10 transition duration-1000 ${popup ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <button onClick={() => setpopup(false)} className="absolute top-0 right-0 m-2 text-lg lg:hidden">x</button>
                <h1 className="text-4xl mb-4">Calculadora Básica:</h1>
                <p className="">Calculadora con las funciones básicas como suma, resta, multiplicación y división.
                    puede ver el codigo fuente <a className="underline" href="https://github.com/sytabaresa/r2-calculator">aquí</a>.</p>
                <p className="mt-2">por <b>Sebastian Tabares</b></p>
            </div>
            <button onClick={() => setpopup(true)} className="p-2 m-2 absolute top-o left-0 bg-principal rounded-full lg:hidden"> INFO</button>
        </div>
    );
};

export default Home;
