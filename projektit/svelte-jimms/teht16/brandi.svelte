<script>
    let { nimi, url } = $props()

    console.log('Brandi-komponentti:', { nimi, url });
</script>

<style>
    .brandi{
        display: flex;
        flex-direction: row;
    }
    .brandi::after{
        content: "|";
        padding: 0 8px;
    }
    .brandi:last-child::after{
        content: none;
    }
</style>

<a class="brandi" href={url}>{nimi}</a>



