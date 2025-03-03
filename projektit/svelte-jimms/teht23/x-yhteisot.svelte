<script>
    import AlapalkinOsio from "../teht21/alapalkin-osio.svelte";
    import Yhteisot from "../teht14/yhteisot.svelte"
    import AlapalkinSarake from "../teht22/alapalkin-sarake.svelte";

</script>

<AlapalkinSarake>
    <div class="osio">
        <div>
            <AlapalkinOsio otsikko="yhteisöt">
                <div class="alapalkin-osio__sisältö">
                    <Yhteisot />
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