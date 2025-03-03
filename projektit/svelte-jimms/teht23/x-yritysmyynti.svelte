<script>
    import AlapalkinOsio from "../teht21/alapalkin-osio.svelte"
    import Aukioloajat from "../teht12/aukioloajat.svelte"
    import Yhteystiedot from "../teht15/yhteystiedot.svelte"
    import AlapalkinSarake from "../teht22/alapalkin-sarake.svelte";
</script>

<AlapalkinSarake>
    <div class="osio">
        <div>
            <AlapalkinOsio otsikko="yritysmyynti">
                <div class="alapalkin-osio__sisältö">
                    <Aukioloajat />
                    <Yhteystiedot teksti="1"/>
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