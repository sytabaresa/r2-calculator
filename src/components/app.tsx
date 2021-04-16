import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Calulator from '../routes/calculator';
import NotFoundPage from '../routes/notfound';

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
            <Router>
                <Route path="/" component={Calulator} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
