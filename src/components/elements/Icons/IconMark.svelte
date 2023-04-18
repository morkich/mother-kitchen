<script>
	export let icon = false;
	export let color = '#222';
	export let mark = 'mark';
</script>

<div class="wrap" style:color>
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
	.iconWrap {
		width: 20px;
		height: 20px;
	}
</style>
