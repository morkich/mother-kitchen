export const load = async (params) => {
	const pageData = {
		meta: {
			title: 'Название рецепта',
			description: 'Описание рецепта'
		},
		mainMenuOptions: 2,
		userData: 3
	};
	return { pageData };
};
