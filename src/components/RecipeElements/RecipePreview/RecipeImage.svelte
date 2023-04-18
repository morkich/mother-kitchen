<script>
	export let src = 'заглушка'; //TODO:
	export let alt = 'alt для картинки';
</script>

<div class="recipeImageWrap">
	<img {src} {alt} class="recipeImageImage" />
</div>

<style>
	.recipeImageWrap {
		filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));
		border-radius: 10px;
		overflow: hidden;
	}
	.recipeImageImage {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
