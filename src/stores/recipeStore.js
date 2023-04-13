import { writable } from 'svelte/store';
import { recipeAPI } from '../api/api';
export const recipeLikesStore = writable(0);
export const recipeViewsStore = writable(0);
export const isLoadingRecipeStore = writable(true);

export const initRecipeStoresThunk = (initData) => {
	recipeLikesStore.set(initData.likes);
	recipeViewsStore.set(initData.views);
	isLoadingRecipeStore.set(false);
};

export const likedRecipeThunk = (isLike, recipeId) => {
	console.log(isLike, recipeId);
};

export const makeFavoritesRecipeThunk = (isFavorite, recipeId) => {
	console.log(isFavorite, recipeId);
};

export const addViewToRecipeThunk = async (recipeId) => {
	const response = await recipeAPI.addView(recipeId);
	initRecipeStoresThunk(response);
};
