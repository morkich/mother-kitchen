<script>
	import { slide } from 'svelte/transition';
	import { userStore } from '../../../stores/userStore';
	import LoginForm from './LoginForm.svelte';
	import { authStore, authUserThunk, isLoadAuthStore } from '../../../stores/authStore';
	import { onMount } from 'svelte';
	import PreloaderInfinity from '../../ui/Preloaders/PreloaderInfinity.svelte';

	export let data = {};

	let isOpenLoginForm = false;
	$: authData = $authStore;
	$: userData = $userStore;
	$: isLoading = $isLoadAuthStore;

	$: console.log(isLoading);

	const getUserAvatar = () => {
		return userData.avatar || data.userAvatar;
	};

	const openLoginFormHandle = () => {
		isOpenLoginForm = !isOpenLoginForm;
	};

	onMount(() => {
		authUserThunk();
	});
</script>

<div class="wrap userLogin">
	{#if isLoading}
		<div class="preloaderWrap">
			<PreloaderInfinity />
		</div>
	{:else if authData.isAuth}
		<div class="avatar 2">
			<img src={getUserAvatar()} alt={$userStore.username} />
		</div>
		<button class="login" on:click={openLoginFormHandle}>{userData.username}</button>
	{:else}
		<div class="avatar">
			<img src={userData.userAvatar} alt={userData.userName} />
		</div>
		<button class="login" on:click={openLoginFormHandle}>Войти</button>
	{/if}
</div>
{#if isOpenLoginForm && !authData.isAuth}
	<div class="loginFormWrap" transition:slide={{ duration: 200 }}>
		<LoginForm />
	</div>
{/if}

<style>
	.userLogin {
		z-index: 10;
		display: flex;
		gap: 10px;
	}
	.login {
		cursor: pointer;
		border: none;
		background-color: transparent;
		font-weight: 700;
		font-family: var(--font-main);
		font-size: 20px;
		line-height: 16px;
		color: var(--color-dark-blue);
		transition: 0.2s;
	}

	.login:hover {
		color: var(--color-dark-grey);
	}
	.loginFormWrap {
		position: absolute;
		top: 100%;
		right: 0;
	}
	.preloaderWrap {
		max-height: 40px;
		max-width: 118.5px;
		min-width: 118.5px;
	}
</style>
