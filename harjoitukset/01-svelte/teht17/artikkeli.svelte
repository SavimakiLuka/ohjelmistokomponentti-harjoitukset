<script>
    let { url, nimi } = $props()


    
</script>

<a class="artikkeli" href={url}>{nimi}</a>

<style>
    .artikkeli{
        display: flex;
        padding-bottom: 8px;
    }
</style>
