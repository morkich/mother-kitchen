<script>
	import { blur } from 'svelte/transition';

	export let isShow = false;

	const closeModalByOverlay = () => {
		isShow = false;
	};
</script>

{#if isShow}
	<div class="wrapModal" transition:blur={{ duration: 200 }}>
		<button class="buttonOverlay" on:click={closeModalByOverlay} />
		<div class="modalContent">
			<slot />
		</div>
	</div>
{/if}

<style>
	.wrapModal {
		z-index: 20;
		position: absolute;
		position: fixed;
		box-sizing: border-box;
		top: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(5, 0, 5, 0.2);
		backdrop-filter: blur(4px);
	}
	.buttonOverlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: transparent;
		border: none;
	}
</style>
