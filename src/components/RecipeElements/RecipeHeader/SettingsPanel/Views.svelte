<script>
	import GoEye from 'svelte-icons/go/GoEye.svelte';
	import { onMount } from 'svelte';
	import { addViewToRecipeThunk } from '../../../../stores/recipeStore';

	export let views = 0;
	export let recipeId = 0;

	onMount(() => {
		addViewToRecipeThunk(recipeId);
	});
</script>

<div class="viewsWrap">
	<div class="iconWrap">
		<GoEye />
	</div>
	<div class="ciewsCount">{views}</div>
</div>

<style>
	.viewsWrap {
		display: flex;
		gap: 3px;
		align-items: center;
		color: var(--color-blue);
	}
	.iconWrap {
		width: 22px;
		height: 20px;
	}
</style>
