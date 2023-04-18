<script>
	import MdBookmarkBorder from 'svelte-icons/md/MdBookmarkBorder.svelte';
	import MdBookmark from 'svelte-icons/md/MdBookmark.svelte';
	import { makeFavoritesRecipeThunk } from '../../../../stores/recipeStore';

	export let isFavorite = false;
	export let recipeId = 0;
	export let userId = 0;

	const clickFavoriteHandle = () => {
		makeFavoritesRecipeThunk(isFavorite, recipeId, userId);
	};
</script>

<button class="favoriteWrap" on:click={clickFavoriteHandle}>
	{#if isFavorite}
		<MdBookmark />
	{:else}
		<MdBookmarkBorder />
	{/if}
</button>

<style>
	.favoriteWrap {
		cursor: pointer;
		width: 20px;
		color: var(--color-yellow);
		cursor: pointer;
		border: none;
		padding: 0;
		margin: 0;
		background-color: transparent;
		transition: 0.2s;
	}
	.favoriteWrap:hover {
		filter: brightness(0.8);
	}
</style>
