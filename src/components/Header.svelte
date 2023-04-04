<script>
	import Logo from './elements/Logo.svelte';
	import MainSearch from './elements/MainSearch.svelte';
	import UserLogin from './elements/User/UserLogin.svelte';
	import MainMenu from './Menus/MainMenu.svelte';

	export let data = false;
</script>

<header class="mainHeader">
	<Logo title={data.logoData.logoTitle} />
	<MainSearch placeholder={'Найти рецепт...'} />
	<UserLogin data={data.userData} />
	<MainMenu menuOptions={data.mainMenuOptions} />
</header>

<style>
	.mainHeader {
		position: relative;
		display: flex;
		align-items: center;
		gap: 40px;
		box-sizing: border-box;
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		min-height: 40px;
		padding: 10px 30px;
	}
</style>
