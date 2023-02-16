<script>
	export let userData = {
		userAvatar: '/images/users/coverAvatar.svg',
		userName: 'Войти'
	};
</script>

<div class="wrap userLogin">
	<div class="avatar">
		<img src={userData.userAvatar} alt={userData.userName} />
	</div>
	<button class="login">{userData.userName}</button>
</div>

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
</style>
