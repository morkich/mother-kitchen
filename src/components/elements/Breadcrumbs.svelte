<script>
	export let pathArray = [];
</script>

<div class="breadcrumbsWrap">
	{#each pathArray as pathItem, index}
		{#if pathItem.url}
			<a class="pathItem" href={pathItem.url}>{pathItem.title}</a>/
		{:else}
			<span class="endPath">{pathItem.title}</span>
		{/if}
	{/each}
</div>

<style>
	.breadcrumbsWrap {
		display: flex;
		gap: 3px;
		font-family: var(--font-main);
		color: var(--color-dark-blue);
		font-style: normal;
		font-weight: 700;
		font-size: 11px;
		line-height: 10px;
		letter-spacing: 0.3px;
	}
	.pathItem {
		color: var(--color-blue);
		transition: 0.2s;
	}
	.pathItem:hover {
		text-decoration: none;
		color: var(--color-dark-blue);
	}
</style>
