<script>
    import AlapalkinOsio from "../teht21/alapalkin-osio.svelte";
    import InfoSivut from "../teht18/info-sivut.svelte"
    import AlapalkinSarake from "../teht22/alapalkin-sarake.svelte";
</script>

<AlapalkinSarake>
    <div class="osio">
        <div>
            <AlapalkinOsio otsikko="info">
                <div class="alapalkin-osio__sisältö">
                    <InfoSivut />
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