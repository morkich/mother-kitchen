import { writable } from 'svelte/store';
import { recipeAPI } from '../api/api';
import { userStore } from './userStore';
export const recipeLikesStore = writable(0);
export const recipeViewsStore = writable(0);
export const isLoadingRecipeStore = writable(true);

export const initRecipeStoresThunk = (initData) => {
	recipeLikesStore.set(initData.likes);
	recipeViewsStore.set(initData.views);
	isLoadingRecipeStore.set(false);
};

export const likedRecipeThunk = async (isLike, recipeId, userId) => {
	const response = await recipeAPI.changeLike(isLike, recipeId, userId);
	initRecipeStoresThunk(response.recipe);
	userStore.set(response.user);
};

export const makeFavoritesRecipeThunk = async (isFavorite, recipeId, userId) => {
	const response = await recipeAPI.addFavorite(isFavorite, recipeId, userId);
	userStore.set(response.user);
};

export const addViewToRecipeThunk = async (recipeId) => {
	const response = await recipeAPI.addView(recipeId);
	initRecipeStoresThunk(response);
};
