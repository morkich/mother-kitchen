<script>
	import Header from '../components/Header.svelte';
</script>

<Header />

<main class="contentContainer">
	<slot />
</main>

<footer class="mainFooter">Футер тут</footer>

<style>
	@font-face {
		font-family: 'AubreyPro';
		font-style: normal;
		font-weight: 500;
		src: local(''), url('/fonts/AubreyPro.woff2') format('woff2');
	}

	:root {
		--color-light-blue: #aed6f1;
		--color-blue: #85c1e9;
		--color-dark-blue: #2e4053;
		--color-light-pink: #fadbd8;
		--color-dark-grey: #5d6d7e;
		--color-bcg-grey: #e8e8e8;
		--font-main: 'Roboto', sans-serif;
		--font-second: 'AubreyPro', sans-serif;
	}

	:global(html) {
		background-color: #333;
		font-family: var(--font-main);
		padding: 0;
		margin: 0;
	}

	:global(body) {
		overflow: hidden;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 30px;
		align-content: start;
		box-sizing: border-box;
		position: relative;
		border-radius: 10px;
		background-color: #fff;
		margin: 0;
		min-height: 100vh;
	}

	.contentContainer {
		max-width: 1400px;
		margin: auto;
	}
</style>
