const getDataByServer = async (endPoint) => {
	const url = `http://localhost:3000/${endPoint}`;
	const response = await fetch(url, { method: 'GET' });
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
