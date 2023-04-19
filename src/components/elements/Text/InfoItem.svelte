<script>
	import TitleH4 from '../Titles/TitleH4.svelte';

	export let title = '';
	export let stringList = '';
</script>

<div class="infoItem">
	<TitleH4 {title} />
	<span class="info">{stringList}</span>
</div>

<style>
	.infoItem {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 7px;
	}
	.info {
		font-family: var(--font-main);
		color: var(--color-dark-blue);
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
	}
</style>
