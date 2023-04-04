<script>
	import Button from '../../ui/Buttons/Button.svelte';
	import Input from '../../ui/inputs/Input.svelte';
	import { authStore, saveLoginDataThunk, setLoginDataThunk } from '../../../stores/authStore';
	import { userStore } from '../../../stores/userStore';

	$: authData = $authStore;
	$: console.log($authStore);
	$: console.log($userStore);

	const inputDataHandle = (event) => {
		saveLoginDataThunk(event.target.value, event.target.name, authData);
	};

	const submitFormHandle = () => {
		setLoginDataThunk(authData);
	};
</script>

<form on:submit={submitFormHandle} class="loginForm">
	<Input
		id={'login'}
		name={'login'}
		placeholder={'логин'}
		value={authData.login}
		on:input={inputDataHandle}
	/>
	<Input
		id={'password'}
		name={'password'}
		placeholder={'пароль'}
		value={authData.password}
		type={'password'}
		on:input={inputDataHandle}
	/>
	<Button title={'Войти'} />
</form>

<style>
	.loginForm {
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 5px;
		z-index: 30;
		padding: 15px 15px;
		border-radius: 10px;
		background: linear-gradient(90deg, rgba(232, 232, 232, 1) 70%, rgba(255, 255, 255, 1) 100%);
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	}
</style>
