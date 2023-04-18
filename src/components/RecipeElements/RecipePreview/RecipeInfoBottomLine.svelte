<script>
	import IconMark from '../../elements/Icons/IconMark.svelte';
	import MdAccessTime from 'svelte-icons/md/MdAccessTime.svelte';
	import WiFire from 'svelte-icons/wi/WiFire.svelte';
	import { recipePortionCountStore } from '../../../stores/recipeStore';

	export let recipeData = {};

	$: portionsCount = $recipePortionCountStore;
</script>

<div class="bottomLine">
	<IconMark icon={MdAccessTime} color={'#85C1E9'} mark={`~${recipeData.cookingTime} мин.`} />
	<IconMark icon={WiFire} color={'#dba7a2'} mark={`~${recipeData.kcal * +portionsCount} Kcal.`} />
</div>

<style>
	.bottomLine {
		display: flex;
		gap: 20px;
		align-items: center;
	}
</style>
