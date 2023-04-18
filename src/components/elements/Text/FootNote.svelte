<script>
	export let content = '';
	export let columnsCount = 1;
</script>

<div class="footNoteWrap">
	<p class="paragraph" style:columns={columnsCount}>{content}</p>
</div>

<style>
	.footNoteWrap {
		padding: 10px 20px;
		width: 100%;
		box-sizing: border-box;
		background: #ffffff;
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
	}

	.paragraph {
		width: 100%;
		font-family: var(--font-main);
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
		color: var(--color-dark-blue);
	}
</style>
