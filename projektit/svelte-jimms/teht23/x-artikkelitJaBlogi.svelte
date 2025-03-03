<script>
    import AlapalkinOsio from "../teht21/alapalkin-osio.svelte";
    import ArtikkelitJaBlogi from "../teht17/artikkelit.svelte"
    import AlapalkinSarake from "../teht22/alapalkin-sarake.svelte";

</script>

<AlapalkinSarake>
    <div class="osio">
        <div>
            <AlapalkinOsio otsikko="artikkelit ja blogi">
                <div class="alapalkin-osio__sisältö">
                    <ArtikkelitJaBlogi />
                </div>
            </AlapalkinOsio>
        </div>
    </div>
</AlapalkinSarake>

<style>
    .osio{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .alapalkin-osio__sisältö{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>