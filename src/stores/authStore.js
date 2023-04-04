import { writable } from 'svelte/store';
import { authApi } from '../api/api';
import { userStore } from './userStore';
export const authStore = writable({
	login: '',
	password: '',
	token: ''
});

export const saveLoginDataThunk = (value, name, authData) => {
	authData[name] = value;
	authStore.set(authData);
};

export const setLoginDataThunk = async (authData) => {
	const response = await authApi.userLogin(authData.login, authData.password);
	if (response) {
		authStore.set({ ...authData, token: response.token, isAuth: true });
		userStore.set(response.user);
	}
};
