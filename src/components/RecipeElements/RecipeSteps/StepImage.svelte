<script>
	export let src = '';
	export let alt = '';
</script>

<div class="stepImageWrap">
	<img class="stepImage" {src} {alt} />
</div>

<style>
	.stepImageWrap {
		max-height: 300px;
		height: 100%;
		width: 100%;
		filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));
		border-radius: 10px;
		overflow: hidden;
	}

	.stepImage {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
