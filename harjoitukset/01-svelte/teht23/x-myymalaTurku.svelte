<script>
    import AlapalkinOsio from "../teht21/alapalkin-osio.svelte";
    import Aukioloajat from "../teht12/aukioloajat.svelte"
    import Yhteystiedot from "../teht15/yhteystiedot.svelte"
    import AlapalkinSarake from "../teht22/alapalkin-sarake.svelte";

</script>

<AlapalkinSarake>
    <div class="osio">
        <div>
            <AlapalkinOsio otsikko="myymälä turku">
                <div class="alapalkin-osio__sisältö">
                    <Aukioloajat />
                    <Aukioloajat />
                    <div class="maksuvälineet">Maksuvälineenä käyvät yleisimmät pankki- ja luottokortit sekä mobiilimaksutavat. Ei käteismaksumahdollisuutta.</div>
                    <Yhteystiedot teksti="2"/>
                </div>
            </AlapalkinOsio>
        </div>
    </div>
</AlapalkinSarake>

<style>
    .maksuvälineet{
        display: flex;
        padding: 20px 0;
        color: #C9D1D4;
    }
    
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