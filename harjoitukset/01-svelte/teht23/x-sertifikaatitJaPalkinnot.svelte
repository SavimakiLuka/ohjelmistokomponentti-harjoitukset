<script>
    import AlapalkinOsio from "../teht21/alapalkin-osio.svelte";
    import Palkinnot from "../teht19/palkinnot.svelte"
    import AlapalkinSarake from "../teht22/alapalkin-sarake.svelte";

</script>

<AlapalkinSarake>
    <div class="osio">
        <div>
            <AlapalkinOsio otsikko="sertifikaatit ja palkinnot">
                <div class="alapalkin-osio__sisältö">
                    <Palkinnot />
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