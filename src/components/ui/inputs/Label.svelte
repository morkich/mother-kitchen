<script>
	export let label = '';
	export let forInput = '';
</script>

<label for={forInput} class="label">
	{@html label}
</label>
