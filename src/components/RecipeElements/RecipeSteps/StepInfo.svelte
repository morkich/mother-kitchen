<script>
	import MdAccessTime from 'svelte-icons/md/MdAccessTime.svelte';
	import IconMark from '../../elements/Icons/IconMark.svelte';

	export let stepNumber = 0;
	export let stepTime = 0;
</script>

<div class="stepInfo">
	<span class="stepNumber">
		{stepNumber}
	</span>

	<IconMark icon={MdAccessTime} color={'#85C1E9'} mark={`~${stepTime} мин.`} isHorizontal={true} />
</div>

<style>
	.stepInfo {
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: 50px;
		grid-gap: 5px;
		align-items: start;
		align-content: start;
	}

	.stepNumber {
		font-family: var(--font-main);
		font-size: 25px;
		display: flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		background: linear-gradient(135deg, #ff6347 0.36%, #b8513f 100.36%);
		color: #fff;
		border-radius: 10px 10px 0 10px;
	}
</style>
