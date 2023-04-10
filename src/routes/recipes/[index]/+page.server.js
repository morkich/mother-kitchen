import { ingredientAPI, recipeAPI, toolAPI, userAPI } from '../../../api/api.js';

export const load = async (data) => {
	const recipeData = await recipeAPI.getRecipe(data.params.index);
	const authorData = await userAPI.getUser(recipeData.author);

	const toolsIds = getDataIdsBySteps(recipeData.steps, 'tools');
	const ingredientsIds = getDataIdsBySteps(recipeData.steps, 'ingredients');
	const toolsData = await toolAPI.getTools(toolsIds);
	const ingredientsData = await ingredientAPI.getIngredients(ingredientsIds);

	const pageData = {
		meta: {
			title: `Рецепт ${recipeData.recipeName} - пошаговое приготовление - легко приготовить дома.`,
			description: recipeData.beforeText
		},
		mainMenuOptions: 2,
		userData: 3
	};

	//достали все данные, можно рисовать страницу.
	return { pageData, recipeData, authorData, toolsData, ingredientsData };
};

const getDataIdsBySteps = (steps, dataName) => {
	let items = [];
	steps
		.map((step) => step[dataName])
		.forEach((item) => {
			items = [...items, ...item];
		});
	return [...new Set(items)];
};
