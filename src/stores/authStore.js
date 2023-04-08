import { writable } from 'svelte/store';
import { authApi } from '../api/api';
import { userStore } from './userStore';
export const authStore = writable({
	login: '',
	password: '',
	token: ''
});
export const isLoadAuthStore = writable(true);

export const saveLoginDataThunk = (value, name, authData) => {
	authData[name] = value;
	authStore.set(authData);
};

export const setLoginDataThunk = async (authData) => {
	const response = await authApi.userLogin(authData.login, authData.password);
	if (response) {
		authStore.set({ ...authData, isAuth: true });
		userStore.set(response.user);
		document.cookie = `token=${response.token}; path=/`;
	}
};

export const authUserThunk = async () => {
	const token = document.cookie.match('(^|;)\\s*token\\s*=\\s*([^;]+)')?.pop() || '';
	const response = await authApi.userAuth(token);

	if (response) {
		userStore.set(response.user);
		authStore.set({ isAuth: true });
		document.cookie = `token=${response.token}; path=/`;
	}
	isLoadAuthStore.set(false);
};

export const exitUserThunk = () => {
	let cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		const cookie = cookies[i];
		const eqPos = cookie.indexOf('=');
		const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
		document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;';
		document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		authStore.set({ isAuth: false });
		userStore.set({ avatar: false });
	}
};
