import { FunctionalComponent, h } from 'preact';
import Calculator from '../../components/calculator';

const Home: FunctionalComponent = () => {
    return (
        <div>
            <h1 class="text-4xl">Calculator</h1>
            <div className="w-full h-screen md:w-1/2">
                <Calculator />
            </div>
        </div>
    );
};

export default Home;
