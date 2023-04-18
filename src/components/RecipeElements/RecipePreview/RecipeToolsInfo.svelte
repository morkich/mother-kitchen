<script>
	import { capitalizeString } from '../../../functions/words';
	import TitleH3 from '../../elements/Titles/TitleH3.svelte';

	export let toolsData = [];
</script>

<div class="recipeTools">
	<div class="infoTitleWrap">
		<TitleH3 title={'Вам понадобится:'} />
	</div>
	<ul class="toolsList">
		{#each toolsData as toolItem, index}
			<li class="toolItem">{capitalizeString(toolItem.name)}</li>
		{/each}
	</ul>
</div>

<style>
	.recipeTools {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 10px;
	}

	.toolsList {
		display: grid;
		margin: 0;
		padding: 0;
		list-style-type: none;
		grid-template-columns: 1fr;
		grid-gap: 10px;
	}

	.toolItem {
		font-family: var(--font-main);
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		color: var(--color-dark-blue);
	}
</style>
