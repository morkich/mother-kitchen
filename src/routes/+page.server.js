import { categoryAPI } from '../api/api';

export const load = async (params) => {
	const categoriesData = await categoryAPI.getAllCategories(['title', 'alias', 'icon']);
	const pageData = {
		meta: {
			title: 'Главная страница',
			description:
				'Наш сайт рецептов – это простое и удобное решение для приготовления вкусно и полезно питание. Выбирайте из широкого ассортимента самых вкусных рецептов, доверьтесь нашей команде профессиональных кулинаров!'
		},
		mainMenuOptions: 2,
		userData: 3,
		categoriesData
	};
	return { pageData };
};
