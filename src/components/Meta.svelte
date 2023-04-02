<script>
    export let title = 'Заголовок';
    export let description = 'Описание';
</script>
<svelte:head>
   <title>{title}</title>
   <meta name="description" content="{description}">
</svelte:head>