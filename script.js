'use strict';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const htmlList = document.querySelector('.wrapper');

async function getPhotos() {
	try {
		const { data } = await axios.get(`${BASE_URL}photos`, {
			params: {
				_limit: 20,
			},
		});
		console.log(data);
		data.forEach(photo => {
			showPhoto(photo);
		});
	} catch {
		htmlList.insertAdjacentHTML(
			'afterbegin',
			`<img src="https://cdn.dribbble.com/userupload/8726277/file/still-90096ae0b20436af7d475737af5b86e5.gif?resize=400x0" alt="Error 404">`
		);
	} finally {
		const loader = document.querySelector('.loader');
		loader.style.display = 'none';
	}
}
const showPhoto = ({ id, title, url }) => {
	htmlList.insertAdjacentHTML(
		'beforeend',
		/*html*/ `
		<li><img src="${url}" id="${id}" title="${title}" alt="${title}">
		<br>
		<a href="${url}" target="_blanck">Тут посилання на картинку</a>
		<span>${title}</span>
		</li>`
	);
};
getPhotos();
