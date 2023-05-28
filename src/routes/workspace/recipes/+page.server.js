import { error } from '@sveltejs/kit';
import { authApi } from '../../../api/api.js';

export const load = async (params) => {
	const token = params.cookies.get('token');
	if (!token) {
		throw error(503, 'НЕТ ПРАВ');
	}
	const isAuth = await authApi.userAuth(token);
	if (!isAuth) {
		throw error(503, 'НЕТ ПРАВ');
	}

	const pageData = {
		meta: {
			title: 'Личный кабинет',
			description: ''
		},
		mainMenuOptions: 2,
		userData: 3
	};
	return { pageData };
};
