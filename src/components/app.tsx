import { FunctionalComponent, h } from 'preact';

import Home from '../routes/home';
// import NotFoundPage from '../routes/notfound';

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
            <Home />
        </div>
    );
};

export default App;
