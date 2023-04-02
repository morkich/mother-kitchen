<script>
	export let title = 'Категория';
	export let iconPath = '';
	export let link = '';
</script>

<a href={link} class="categoryItem">
	<div class="iconWrap">
		<img src={iconPath} alt={title} />
	</div>
	{title}
</a>

<style>
	.categoryItem {
		display: flex;
		gap: 10px;
		align-items: center;
		font-family: var(--font-second);
		font-size: 25px;
		color: var(--color-dark-blue);
		text-decoration: none;
		transition: 0.2s;
	}

	.categoryItem:hover {
		color: #222;
	}

	.categoryItem:hover .iconWrap {
		transform: translateX(-5px);
	}

	.iconWrap {
		max-width: 40px;
		max-height: 40px;
		transition: 0.2s;
	}

	.iconWrap img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
