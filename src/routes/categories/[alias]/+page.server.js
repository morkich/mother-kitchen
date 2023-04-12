import { categoryAPI } from '../../../api/api';

export const load = async (data) => {
	const categoriesData = await categoryAPI.getAllCategories();
	const categoryData = getCategoryData(categoriesData, data.params.alias);

	const pageData = {
		meta: {
			title: 'Название категории',
			description: 'Описание категории'
		},
		mainMenuOptions: 2,
		userData: 3,
		categoriesData,
		categoryData
	};
	return { pageData };
};

const getCategoryData = (categories, needAlias) => {
	return categories.filter((category) => category.alias == needAlias)[0];
};
