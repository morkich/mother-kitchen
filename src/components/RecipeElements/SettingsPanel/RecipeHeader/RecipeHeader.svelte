<script>
	import Breadcrumbs from '../../../elements/Breadcrumbs.svelte';
	import TitleRecipe from '../../../elements/Titles/TitleRecipe.svelte';
	import SettingsPanel from '../SettingsPanel.svelte';

	export let title = false;
	export let recipeId = false;
	export let breadcrumbsArray = false;
</script>

<header class="recipeHeader">
	<div class="titleWrap">
		<TitleRecipe {title} />
		<Breadcrumbs pathArray={breadcrumbsArray} />
	</div>
	<SettingsPanel {recipeId} />
</header>

<style>
	.recipeHeader {
		display: flex;
		justify-content: space-between;
	}

	.titleWrap {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 5px;
	}
</style>
