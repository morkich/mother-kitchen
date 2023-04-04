<script>
	export let title = 'Кнопка';
</script>

<button class="classicButton">
	{title}
</button>

<style>
	.classicButton {
		cursor: pointer;
		min-height: 25px;
		border-radius: 5px;
		background-color: #85c1e9;
		border: none;
		color: #fff;
		font-size: 14px;
		font-family: var(--font-main);
		transition: 0.2s;
	}

	.classicButton:hover {
		filter: brightness(0.8);
	}
</style>
