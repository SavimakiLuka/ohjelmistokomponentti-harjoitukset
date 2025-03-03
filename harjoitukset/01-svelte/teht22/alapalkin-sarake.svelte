<script>
    let { leveys="1", children } = $props()
</script>

<style>
    .sarake{
        display: flex;
        flex-direction: column;
        margin: 0 10px;
    }
    @media(max-width: 992px){
        .sarake{
            flex: 0 1 auto !important;
        }
    }
</style>

<div class="sarake" style="flex: {leveys}">
    {@render children()}
</div>