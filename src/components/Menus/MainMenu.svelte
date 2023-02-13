<script>
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

<nav class="mainMenu wrap" class:isMenuOpen>
	<ul class="menuList">
		<li class="menuItem">
			<a href="/" class="menuLink" on:click={menuToggleHandle}>Главная</a>
		</li>
		<li class="menuItem">
			<a href="/recipes" class="menuLink" on:click={menuToggleHandle}>Рецепты</a>
		</li>
		<li class="menuItem">
			<a href="/authors" class="menuLink" on:click={menuToggleHandle}>Авторы</a>
		</li>
		<li class="menuItem">
			<a href="/contacts" class="menuLink" on:click={menuToggleHandle}>Контакты</a>
		</li>
	</ul>
</nav>

<style>
	.menuBurgerButton {
		z-index: 10;
		cursor: pointer;
		position: relative;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		justify-content: space-between;
		width: 30px;
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

	.mainMenu {
		position: absolute;
		background-color: var(--color-bcg-grey);
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		right: 0;
		height: 100vh;
		min-width: fit-content;
		padding: 0 10vw;
		border-radius: 10px 0 0 10px;
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
		font-family: var(--font-second);
		transform: translateX(110%);
		transition: 0.5s;
	}

	.mainMenu.isMenuOpen {
		transform: translateX(0%);
	}

	.menuList {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 10px;
		list-style-type: none;
		font-size: 25px;
		padding: 0;
	}

	.menuLink {
		text-decoration: none;
		color: teal;
		font-weight: 600;
		transition: 0.2s;
	}

	.menuLink:hover {
		filter: brightness(0.5);
	}
</style>
