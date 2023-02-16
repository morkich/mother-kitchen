<script>
	export let menuOptions = [];

	let isMenuOpen = false;

	const menuToggleHandle = () => {
		isMenuOpen = !isMenuOpen;
	};

	const clickOutsideHandler = (event) => {
		const difference = event.target.classList.contains('menuBurgerButton');
		if (!difference) {
			isMenuOpen = false;
		}
	};
</script>

<svelte:window on:click={clickOutsideHandler} />
<button class:isMenuOpen class="menuBurgerButton" on:click={menuToggleHandle}>
	<span class="lineOne" />
	<span class="lineTwo" />
	<span class="lineThree" />
</button>

<nav class="mainMenu wrap" class:isMenuOpen>
	<ul class="menuList">
		{#each menuOptions as options, index}
			<li class="menuItem">
				<a href={options.url} class="menuLink" on:click={menuToggleHandle}>{options.title}</a>
			</li>
		{/each}
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
		justify-content: center;
		gap: 4px;
		width: 30px;
		height: 25px;
		padding: 0;
		margin: 0;
		border: none;
		background-color: transparent;
		transition: 0.2s;
	}

	.menuBurgerButton:hover span {
		background-color: var(--color-dark-blue);
	}

	.lineOne,
	.lineTwo,
	.lineThree {
		pointer-events: none;
	}

	.menuBurgerButton.isMenuOpen .lineTwo {
		display: none;
	}

	.menuBurgerButton.isMenuOpen .lineOne {
		transform: translateY(4px) rotate(-45deg);
	}

	.menuBurgerButton.isMenuOpen .lineThree {
		transform: translateY(-4px) rotate(45deg);
	}

	.menuBurgerButton span {
		width: 100%;
		height: 4px;
		background-color: var(--color-dark-grey);
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
		grid-gap: 15px;
		list-style-type: none;
		font-size: 25px;
		padding: 0;
	}

	.menuLink {
		text-decoration: none;
		color: var(--color-dark-blue);
		font-weight: 600;
		transition: 0.2s;
		padding: 5px 10px;
		border-radius: 10px;
	}

	.menuLink:hover {
		background-color: var(--color-light-pink);
	}
</style>
