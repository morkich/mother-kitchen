<script>
	import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte';
	export let placeholder = false;
</script>

<div class="searchWrap">
	<input type="text" class="searchInput" {placeholder} />
	<IoIosSearch />
</div>

<style>
	.searchWrap {
		position: relative;
		height: 40px;
		display: flex;
		background: #ffffff;
		box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
		border-radius: 5px;
		width: 100%;
		box-sizing: border-box;
	}

	:global(.searchWrap svg) {
		color: var(--color-blue);
		max-width: 25px;
		margin: 5px;
	}

	.searchInput {
		background-color: transparent;
		outline: none;
		border: none;
		padding: 0 10px;
		display: flex;
		align-items: center;
		justify-content: start;
		font-family: 'rootUi';
		font-weight: 500;
		font-size: 16px;
		color: var(--color-dark-grey);
		width: 100%;
		box-sizing: border-box;
	}

	.searchInput::placeholder {
		color: var(--color-light-blue);
	}
</style>
