<script>
	export let icon = false;
	export let color = '#222';
	export let mark = 'mark';
	export let isHorizontal = false;
</script>

<div class="wrap" style:color class:isHorizontal>
	<div class="iconWrap">
		<svelte:component this={icon} />
	</div>
	{mark}
</div>

<style>
	.wrap {
		display: flex;
		font-size: 12px;
		align-items: center;
		gap: 5px;
	}
	.isHorizontal {
		flex-direction: column;
	}
	.iconWrap {
		width: 20px;
		height: 20px;
	}
</style>
