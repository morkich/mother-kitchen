<script>
	import { changePortionCountThunk, recipePortionCountStore } from '../../../stores/recipeStore';
	import FaPlus from 'svelte-icons/fa/FaPlus.svelte';
	import FaMinus from 'svelte-icons/fa/FaMinus.svelte';

	const changePortionCountHandle = (event) => {
		const buttonEvent = event.target.dataset.event;
		changePortionCountThunk($recipePortionCountStore, buttonEvent);
	};
</script>

<div class="portionCount">
	Количество порций: {$recipePortionCountStore}
	<div class="buttonWrap">
		<button on:click={changePortionCountHandle} data-event="minus" class="portionCountButton">
			<FaMinus />
		</button>
		<button on:click={changePortionCountHandle} data-event="plus" class="portionCountButton">
			<FaPlus />
		</button>
	</div>
</div>

<style>
	.portionCount {
		display: flex;
		gap: 5px;
		align-items: center;
		font-family: var(--font--main);
		font-weight: 700;
		font-size: 16px;
		line-height: 16px;
		display: flex;
		color: var(--color-dark-blue);
	}

	.buttonWrap {
		display: flex;
		gap: 2px;
		align-items: center;
	}

	.portionCountButton {
		cursor: pointer;
		width: 12px;
		height: 12px;
		box-sizing: border-box;
		padding: 2px;
		margin: 0;
		border: none;
		border-radius: 2px;
		background-color: var(--color-dark-grey);
		color: var(--color-light-pink);
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
	}

	:global(.portionCountButton svg) {
		pointer-events: none;
	}
</style>
