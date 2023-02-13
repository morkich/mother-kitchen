<script>
	import { slide } from 'svelte/transition';

	let isMenuOpen = false;

	const menuToggleHandle = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<button class="menuBurgerButton" on:click={menuToggleHandle} class:isMenuOpen>
	<span class="lineOne" />
	<span class="lineTwo" />
	<span class="lineThree" />
</button>

{#if isMenuOpen}
	<nav class="mainMenu wrap" transition:slide>
		<ul class="menuList">
			<li class="menuItem">
				<a href="/recipes" class="menuLink">Рецепты</a>
			</li>
			<li class="menuItem">
				<a href="/authors" class="menuLink">Авторы</a>
			</li>
			<li class="menuItem">
				<a href="/contacts" class="menuLink">Контакты</a>
			</li>
		</ul>
	</nav>
{/if}

<style>
	.menuBurgerButton {
		cursor: pointer;
		position: relative;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		justify-content: space-between;
		width: 40px;
		height: 25px;
		padding: 0;
		margin: 0;
		border: none;
		background-color: transparent;
		transition: 0.2s;
	}

	.menuBurgerButton:hover span {
		background-color: #000;
	}

	.menuBurgerButton.isMenuOpen .lineTwo {
		display: none;
	}

	.menuBurgerButton.isMenuOpen .lineOne {
		transform: translateY(10px) rotate(-45deg);
	}

	.menuBurgerButton.isMenuOpen .lineThree {
		transform: translateY(-10px) rotate(45deg);
	}

	.menuBurgerButton span {
		width: 100%;
		height: 4px;
		background-color: #666;
		border-radius: 5px;
		transition: 0.2s;
	}
</style>
