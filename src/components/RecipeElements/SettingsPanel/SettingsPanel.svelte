<script>
	import { recipeLikesStore, recipeViewsStore } from '../../../stores/recipeStore';
	import { userStore } from '../../../stores/userStore';
	import FavoriteButton from './FavoriteButton.svelte';
	import LikeButton from './LikeButton.svelte';
	import PrintButton from './PrintButton.svelte';
	import Views from './Views.svelte';

	export let recipeId = false;

	let views = $recipeViewsStore,
		likes = $recipeLikesStore,
		isLike = false,
		isFavorite = false,
		userId = 0;

	$: userId = $userStore._id;
	$: likes = $recipeLikesStore;

	$: if ($userStore.likedRecipes) isLike = isRecipeId($userStore.likedRecipes);
	$: if ($userStore.favoriteRecipes) isFavorite = isRecipeId($userStore.favoriteRecipes);

	const isRecipeId = (arrayData) => {
		const needItemsArray = arrayData.filter((item) => item == recipeId);
		return !!needItemsArray.length;
	};
</script>

<div class="wrap">
	<PrintButton />
	<FavoriteButton {recipeId} {userId} {isFavorite} />
	<LikeButton {recipeId} {userId} {likes} {isLike} />
	<Views {recipeId} {views} />
</div>

<style>
	.wrap {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 7px;
		height: 15px;
	}
</style>
