const getDataByServer = async (endPoint) => {
	const url = `http://localhost:3000/${endPoint}`;
	const response = await fetch(url, { method: 'GET' });
	const responseData = response.ok ? await response.json() : false;
	return responseData;
};

const postDataByServer = async (endPoint, data) => {
	const token = document.cookie.match('(^|;)\\s*token\\s*=\\s*([^;]+)')?.pop() || '';
	const url = `http://localhost:3000/${endPoint}`;
	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify({ ...data }),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
	});
	const responseData = response.ok ? await response.json() : false;
	return responseData;
};

export const recipeAPI = {
	getRecipe(recipeId) {
		const endPoint = `recipes/${recipeId}`;
		return getDataByServer(endPoint);
	},
	changeLike(isLike, recipeId, userId) {
		return postDataByServer('recipes/liked', { isLike, recipeId, userId });
	},
	addView(recipeId) {
		const endPoint = `recipes/view/${recipeId}`;
		return getDataByServer(endPoint);
	},
	addFavorite(isFavorite, recipeId, userId) {
		return postDataByServer('recipes/favorite', { isFavorite, recipeId, userId });
	}
};

export const toolAPI = {
	getTools(toolsIds) {
		const getQuery = toolsIds && toolsIds.length ? `?ids=${toolsIds.join(',')}` : '';
		const endPoint = `tools${getQuery}`;
		return getDataByServer(endPoint);
	}
};

export const ingredientAPI = {
	getIngredients(ingredientIds) {
		const getQuery = ingredientIds && ingredientIds.length ? `?ids=${ingredientIds.join(',')}` : '';
		const endPoint = `ingredients${getQuery}`;
		return getDataByServer(endPoint);
	}
};

export const categoryAPI = {
	getAllCategories(fieldsArray = []) {
		const getQuery = fieldsArray && fieldsArray.length ? `?fields=${fieldsArray.join(',')}` : '';
		const endPoint = `categories${getQuery}`;
		return getDataByServer(endPoint);
	},
	getCategories(categoriesIds) {
		const getQuery = categoriesIds && categoriesIds.length ? `?ids=${categoriesIds.join(',')}` : '';
		const endPoint = `categories${getQuery}`;
		return getDataByServer(endPoint);
	}
};

export const userAPI = {
	getUser(userId) {
		const endPoint = `users/${userId}`;
		return getDataByServer(endPoint);
	}
};

export const authApi = {
	userLogin(login, password) {
		return postDataByServer('auth/login', { username: login, password });
	},
	userAuth(token) {
		return postDataByServer('auth/check', { token });
	}
};
