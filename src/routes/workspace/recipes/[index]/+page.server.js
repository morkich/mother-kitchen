import { error } from '@sveltejs/kit';
export const load = async (params) => {
	// throw error(503, 'НЕТ ПРАВ');

	const pageData = {
		meta: {
			title: 'Редактирование рецепта',
			description: ''
		},
		mainMenuOptions: 2,
		userData: 3
	};
	return { pageData };
};
