<script>
	import { userStore } from '../stores/userStore';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	export let data;

	userStore.set(data.headerData.userData);
</script>

<Header data={data.headerData} />

<main class="contentContainer">
	<slot />
</main>

<Footer logoTitle={data.headerData.logoData.logoTitle} />

<style>
	@font-face {
		font-family: 'AubreyPro';
		font-style: normal;
		font-weight: 500;
		src: local(''), url('/fonts/AubreyPro.woff2') format('woff2');
	}

	@font-face {
		font-family: 'Comforter';
		font-style: normal;
		font-weight: 500;
		src: local(''), url('/fonts/ComforterBrush.woff2') format('woff2');
	}

	@font-face {
		font-family: 'rootUi';
		font-style: normal;
		font-weight: 700;
		src: local(''), url('/fonts/pt-root-ui_bold.woff2') format('woff2');
	}

	@font-face {
		font-family: 'rootUi';
		font-style: normal;
		font-weight: 200;
		src: local(''), url('/fonts/pt-root-ui_light.woff2') format('woff2');
	}

	@font-face {
		font-family: 'rootUi';
		font-style: normal;
		font-weight: 500;
		src: local(''), url('/fonts/pt-root-ui_medium.woff2') format('woff2');
	}

	@font-face {
		font-family: 'rootUi';
		font-style: normal;
		font-weight: 400;
		src: local(''), url('/fonts/pt-root-ui_regular.woff2') format('woff2');
	}

	:root {
		--color-light-blue: #aed6f1;
		--color-blue: #85c1e9;
		--color-dark-blue: #2e4053;
		--color-light-pink: #fadbd8;
		--color-dark-grey: #5d6d7e;
		--color-bcg-grey: #e8e8e8;
		--font-main: 'rootUi', sans-serif;
		--font-second: 'AubreyPro', sans-serif;
		--font-logo: 'Comforter', sans-serif;
	}

	:global(html) {
		background-color: #333;
		font-family: var(--font-main);
		font-weight: 500;
		padding: 0;
		margin: 0;
	}

	:global(body) {
		overflow-x: hidden;
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

	:global(#wt-sky-root) {
		display: none;
	}

	.contentContainer {
		max-width: 1300px;
		width: 100%;
		box-sizing: border-box;
		padding: 0 30px;
		min-height: 100vh;
		margin: auto;
	}
</style>
