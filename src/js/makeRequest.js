import Cookies from "js-cookie";

export default async (route, body) => {
	console.log('makeRequest', route, body);

	const response = await fetch("http://localhost:8000/api" + route, {
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'X-CSRFToken': Cookies.get('csrftoken'),   //document.cookie.split(';').find(el => el.split('=')[0] == 'csrftoken').split('=')[1]
		},
		body: body ? JSON.stringify(body) : null
	})
	.catch(err => console.log(err));

	const data = await response.json()
	.catch(err => console.log(err));

	console.log('makeRequest', data);

	return data;
}
