<script>
	import MdFavoriteBorder from 'svelte-icons/md/MdFavoriteBorder.svelte';
	import MdFavorite from 'svelte-icons/md/MdFavorite.svelte';
	import { likedRecipeThunk } from '../../../stores/recipeStore';

	export let isLike = false;
	export let recipeId = 0;
	export let likes = 0;

	const clickLikeHandle = (event) => {
		likedRecipeThunk(isLike, recipeId);
	};
</script>

<div class="likesWrap">
	<button class="iconWrap" on:click={clickLikeHandle}>
		{#if isLike}
			<MdFavorite />
		{:else}
			<MdFavoriteBorder />
		{/if}
	</button>
	<div class="viewsCount">{likes}</div>
</div>

<style>
	.likesWrap {
		display: flex;
		gap: 3px;
		align-items: flex-start;
		color: var(--color-tomato);
		transition: 0.2s;
	}
	.iconWrap {
		cursor: pointer;
		border: none;
		padding: 0;
		margin: 0;
		color: inherit;
		background-color: transparent;
		width: 20px;
	}
	.likesWrap:hover {
		filter: brightness(0.8);
	}
</style>
