import dataLayerPush from '../dataLayerPush/index.js';
import meta from '../meta/index.js';

const valid = () => navigator.share && navigator.onLine;

export function insertShareLink(container) {
	if (!valid()) { return; }

	const link = document.createElement('a');
	link.setAttribute('href', '#!');
	link.addEventListener('click', sharePage);
	link.appendChild(document.createTextNode('Share'));
	container.insertBefore(link, container.firstElementChild);
}

export function addShareButton(container) {
	if (!valid()) { return; }

	const link = document.createElement('button');
	link.className = 'share';
	link.addEventListener('click', sharePage);
	container.appendChild(link);
}

function sharePage(event) {
	if (event) { event.preventDefault(); }

	dataLayerPush({ event: 'click', target: 'share' });
	navigator.share({
		title: document.title,
		text: meta('description'),
		url: document.location.href
	}).catch(error => {
		error.flow = 'Use browser share API';
		throw error;
	});
}
