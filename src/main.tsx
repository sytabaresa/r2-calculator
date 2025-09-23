import { render, h } from 'preact';
import App from './components/app';
import './style/index.css';

render(h(App, {}), document.getElementById('app') as HTMLElement); 