import { categoryAPI, ingredientAPI, recipeAPI, toolAPI, userAPI } from '../../../api/api.js';

export const load = async (data) => {
	const recipeData = await recipeAPI.getRecipe(data.params.index);
	const authorData = await userAPI.getUser(recipeData.author);
	const categoriesData = await categoryAPI.getCategories(recipeData.categories);

	const toolsIds = getToolsIdsBySteps(recipeData.steps, 'stepTools');
	const toolsData = await toolAPI.getTools(toolsIds);

	const ingredientsIds = getIngredientsIdsBySteps(recipeData.steps);
	const ingredientsData = await ingredientAPI.getIngredients(ingredientsIds);

	appendAndSortByMass(recipeData.steps, ingredientsData);
	appendDataForRecipe(recipeData, ingredientsData);

	const pageData = {
		meta: {
			title: `Рецепт ${recipeData.recipeName} - пошаговое приготовление - легко приготовить дома.`,
			description: recipeData.beforeText
		},
		mainMenuOptions: 2,
		userData: 3
	};

	return {
		pageData,
		recipeData,
		authorData,
		toolsData,
		ingredientsData,
		categoriesData
	};
};

const appendDataForRecipe = (recipeData, ingredientsData) => {
	appendCookingTime(recipeData);
	appendKcal(recipeData, ingredientsData);
};

const appendKcal = (recipeData, ingredientsData) => {
	const kcalSum = ingredientsData
		.map((item) => (item.kcal / 100) * item.mass)
		.reduce((accumulator, currentValue) => accumulator + currentValue);
	recipeData.kcal = Math.floor(kcalSum);
};

const appendCookingTime = (recipeData) => {
	recipeData.cookingTime = recipeData.steps
		.map((stepItem) => stepItem.stepCookingTime)
		.reduce((accumulator, currentValue) => accumulator + currentValue);
};

const appendAndSortByMass = (steps, ingredientsData) => {
	let ingredientsDataArray = getIngredientDataForSteps(steps);
	const uniqueIngredients = ingredientsDataArray.reduce((accumulator, current) => {
		if (!accumulator[current.ingredientId]) {
			accumulator[current.ingredientId] = current.mass;
		} else {
			accumulator[current.ingredientId] += current.mass;
		}
		return accumulator;
	}, {});
	ingredientsData.forEach((ingredientItem) => {
		ingredientItem.mass = uniqueIngredients[ingredientItem._id];
	});
	ingredientsData.sort((a, b) => b.mass - a.mass);
};

const getIngredientsIdsBySteps = (steps) => {
	let ingredientsDataArray = getIngredientDataForSteps(steps);
	return ingredientsDataArray.map((item) => item.ingredientId);
};

const getToolsIdsBySteps = (steps, dataName) => {
	let items = [];
	steps
		.map((step) => step[dataName])
		.forEach((item) => {
			items = [...items, ...item];
		});
	return [...new Set(items)];
};

const getIngredientDataForSteps = (steps) => {
	let ingredientsDataArray = [];
	steps.forEach((step) => {
		ingredientsDataArray = [...ingredientsDataArray, ...step.stepIngredients];
	});
	return ingredientsDataArray;
};
