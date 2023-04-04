const getDataByServer = async (endPoint) => {
	const url = `http://localhost:3000/${endPoint}`;
	const response = await fetch(url, { method: 'GET' });
	const responseData = response.ok ? await response.json() : false;
	return responseData;
};

const postDataByServer = async (endPoint, data) => {
	const url = `http://localhost:3000/${endPoint}`;
	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	const responseData = response.ok ? await response.json() : false;
	return responseData;
};

export const categoryAPI = {
	getCategories(fieldsArray = []) {
		const getQuery = fieldsArray.length ? `?fields=${fieldsArray.join(',')}` : '';
		const endPoint = `categories${getQuery}`;
		return getDataByServer(endPoint);
	}
};

export const authApi = {
	userLogin(login, password) {
		return postDataByServer('auth/login', { username: login, password });
	}
};
