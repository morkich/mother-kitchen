<script>
	import { fade } from 'svelte/transition';
	import { userStore } from '../../../stores/userStore';
	import LoginForm from './LoginForm.svelte';
	import { authStore, authUserThunk, isLoadAuthStore } from '../../../stores/authStore';
	import { onMount } from 'svelte';
	import PreloaderInfinity from '../../ui/Preloaders/PreloaderInfinity.svelte';
	import { portalAction } from '../../../actions/portal';
	import Modal from '../../System/Modal.svelte';
	import UserMenu from './UserMenu.svelte';

	export let data = {};

	let isOpenLoginForm = false,
		isUserMenuOpen = false,
		userAvatar = false;

	$: authData = $authStore;
	$: userData = $userStore;
	$: isLoading = $isLoadAuthStore;

	$: if (userData) {
		userAvatar = getUserAvatar();
	}
	const getUserAvatar = () => {
		return userData.avatar || data.userAvatar;
	};

	const openLoginFormHandle = () => {
		isOpenLoginForm = !isOpenLoginForm;
	};

	const openUserMenuHandle = () => {
		isUserMenuOpen = !isUserMenuOpen;
	};

	onMount(() => {
		authUserThunk();
	});
</script>

{#if isOpenLoginForm}
	<div use:portalAction={'modal'}>
		<Modal bind:isShow={isOpenLoginForm}>
			<LoginForm bind:isOpenLoginForm />
		</Modal>
	</div>
{/if}

<div class="wrap userLogin">
	{#if isLoading}
		<div class="preloaderWrap">
			<PreloaderInfinity />
		</div>
	{:else if authData.isAuth}
		<div class="avatar">
			<img src={userAvatar} alt={$userStore.username} />
		</div>
		<button class="login" on:click={openUserMenuHandle}>{userData.username}</button>
	{:else}
		<div class="avatar">
			<img src={userData.userAvatar} alt={userData.userName} />
		</div>
		<button class="login" on:click={openLoginFormHandle}>Войти</button>
	{/if}
	{#if isUserMenuOpen}
		<div class="userMenuWrapper" transition:fade={{ duration: 200 }}>
			<UserMenu bind:isUserMenuOpen />
		</div>
	{/if}
</div>

<style>
	.userMenuWrapper {
		position: absolute;
		top: 100%;
	}

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
	.preloaderWrap {
		max-height: 40px;
		max-width: 118.5px;
		min-width: 118.5px;
	}
</style>
