<script>
	import { exitUserThunk } from '../../../stores/authStore';

	export let isUserMenuOpen;

	const exitHandle = () => {
		exitUserThunk();
		isUserMenuOpen = false;
	};
</script>

<div class="userMenuWrap">
	<ul class="menuList">
		<li class="menuItem">
			<button class="menuButton"> Настройки </button>
		</li>
		<li class="menuItem">
			<button class="menuButton"> Мои рецепты </button>
		</li>
		<li class="menuItem">
			<button class="menuButton"> Избранное </button>
		</li>
		<li class="menuItem">
			<button class="menuButton" on:click={exitHandle}> Выйти </button>
		</li>
	</ul>
</div>

<style>
	.userMenuWrap {
		padding: 10px 0;
		background-color: #fff;
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
		border-radius: 0 0 5px 5px;
	}
	.menuList {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	.menuItem {
		width: 100%;
		min-height: 30px;
	}
	.menuButton {
		cursor: pointer;
		width: 100%;
		height: 100%;
		min-height: 30px;
		background-color: transparent;
		border: none;
		display: flex;
		justify-content: start;
		align-items: center;
		padding: 0 20px;
		font-family: var(--font-main);
		font-weight: 600;
		font-size: 15px;
		transition: 0.2s;
	}
	.menuButton:hover {
		background-color: var(--color-bcg-grey);
	}

	.menuButton:focus {
		box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25) inset;
	}
</style>
