<script>
	import Logo from "./elements/Logo.svelte";

    export let logoTitle = 'false';

</script>
<footer class="mainFooter">
    <Logo title={logoTitle} />
    <div class="content">
        <div class="corrupt">Все права защищены и всякая такая херота</div>
    </div>
</footer>

<style>
	.mainFooter {
		font-family: var(--font-main);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        min-height: 150px;
        display: flex;
        padding: 10px 30px;
	}
    .content {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        width: 100%;
        box-sizing: border-box;
    }
    .corrupt {
        font-family: var(--font-main);
        font-size: 10px;
        line-height: 16px;
        color: #5B96BD;
    }
</style>
