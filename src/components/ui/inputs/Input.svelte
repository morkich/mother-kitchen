<script>
	import Label from './Label.svelte';

	export let label = '';
	export let id = 0;
	export let type = 'text';
	export let name = 'getName';
	export let value = '';
	export let placeholder = '';
	export let popup = '';
	export let errorMessage = false;
</script>

<div class="inputWrap">
	<Label {label} forInput={id} />
	<input
		class="input"
		{id}
		{type}
		{name}
		{value}
		{placeholder}
		title={popup}
		on:input
		on:click
		on:change
		on:focus
		on:blur
	/>
	{#if errorMessage}
		<span class="error">
			{errorMessage}
		</span>
	{/if}
</div>

<style>
	.inputWrap {
		display: flex;
		flex-direction: column;
	}
	.input {
		font-size: 13px;
		font-family: var(--font-main);
		color: #555;
		height: 30px;
		border-radius: 5px;
		border: none;
		box-shadow: 0px 1px 2px inset rgba(0, 0, 0, 0.25);
		display: flex;
		align-items: center;
		padding: 0 10px;
		outline: none;
	}
</style>
