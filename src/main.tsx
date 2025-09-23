import { render, h } from 'preact';
import App from './components/app';
import './style/index.css';

render(h(App, {}), document.getElementById('app') as HTMLElement);

if ('serviceWorker' in navigator) {
	const swUrl = new URL('sw.js', import.meta.env.BASE_URL).toString();
	window.addEventListener('load', () => {
		navigator.serviceWorker.register(swUrl).catch(() => {});
	});
} 