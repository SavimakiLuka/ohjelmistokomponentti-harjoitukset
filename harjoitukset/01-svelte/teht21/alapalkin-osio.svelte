<script>
    import AlapalkinOtsikko from "../teht11/alapalkin-otsikko.svelte";
    
    let { otsikko, otsikkotaso="h2", children } = $props();
</script>

<!-- <div class="alapalkin-osio">
    <div class="alapalkki_ylaosa">
        <div class="alapalkki_ylaosa_horisontaaliset">
            {#each otsikko as valiotsikko}
                {#if valiotsikko.nimi === "asiakaspalvelu"}
                    <div class="osio">
                        <svelte:element this={otsikkotaso}>
                            <AlapalkinOtsikko teksti={valiotsikko.nimi} />
                        </svelte:element>
                        <div class="alapalkin-osio__sisältö">
                            <Aukioloajat />
                            <Yhteystiedot teksti="1"/>
                        </div>
                    </div>
                {/if}
                {#if valiotsikko.nimi === "yritysmyynti"}
                    <div class="osio">
                        <svelte:element this={otsikkotaso}>
                            <AlapalkinOtsikko teksti={valiotsikko.nimi} />
                        </svelte:element>
                        <div class="alapalkin-osio__sisältö">
                            <Aukioloajat />
                            <Yhteystiedot teksti="1"/>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
        {#each otsikko as valiotsikko}
            {#if valiotsikko.nimi === "myymälä turku"}
                <div class="osio">
                    <svelte:element this={otsikkotaso}>
                        <AlapalkinOtsikko teksti={valiotsikko.nimi} />
                    </svelte:element>
                    <div class="alapalkin-osio__sisältö">
                        <Aukioloajat />
                        <Aukioloajat />
                        <div class="maksuvälineet">Maksuvälineenä käyvät yleisimmät pankki- ja luottokortit sekä mobiilimaksutavat. Ei käteismaksumahdollisuutta.</div>
                        <Yhteystiedot teksti="2"/>
                    </div>
                </div>
            {/if}
            {#if valiotsikko.nimi === "yhteisöt"}
                <div class="osio">
                    <svelte:element this={otsikkotaso}>
                        <AlapalkinOtsikko teksti={valiotsikko.nimi} />
                    </svelte:element>
                    <div class="alapalkin-osio__sisältö">
                        <Yhteisot />
                    </div>
                </div>
            {/if}
            {#if valiotsikko.nimi === "tilaa uutiskirje"}
                <div class="osio">
                    <svelte:element this={otsikkotaso}>
                        <AlapalkinOtsikko teksti={valiotsikko.nimi} />
                    </svelte:element>
                    <div class="alapalkin-osio__sisältö">
                        <div class="uutiskirje_teksti">
                            Tilaa Jimm’sin uutiskirje ja saat ensimmäisten
                            joukossa tietoa tarjouksista, tapahtumista ja
                            uusista tuotteista.
                        </div>
                        <button class="tilaa_uutiskirje_nappi">tilaa uutiskirje</button>
                    </div>
                </div>
            {/if}
        {/each}
    </div>

    <div class="alapalkki_alaosa">
        {#each otsikko as valiotsikko}
            {#if valiotsikko.nimi === "info"}
                <div class="osio">
                    <svelte:element this={otsikkotaso}>
                        <AlapalkinOtsikko teksti={valiotsikko.nimi} />
                    </svelte:element>
                    <div class="alapalkin-osio__sisältö">
                        <InfoSivut />
                    </div>
                </div>
            {/if}
            {#if valiotsikko.nimi === "shop-in-shops"}
                <div class="osio">
                    <svelte:element this={otsikkotaso}>
                        <AlapalkinOtsikko teksti={valiotsikko.nimi} />
                    </svelte:element>
                    <div class="alapalkin-osio__sisältö">
                        <ShopInShops />
                    </div>
                </div>
            {/if}
            {#if valiotsikko.nimi === "artikkelit ja blogi"}
                <div class="osio">
                    <svelte:element this={otsikkotaso}>
                        <AlapalkinOtsikko teksti={valiotsikko.nimi} />
                    </svelte:element>
                    <div class="alapalkin-osio__sisältö">
                        <ArtikkelitJaBlogi />
                    </div>
                </div>
            {/if}
            {#if valiotsikko.nimi === "sertifikaatit ja palkinnot"}
                <div class="osio">
                    <svelte:element this={otsikkotaso}>
                        <AlapalkinOtsikko teksti={valiotsikko.nimi} />
                    </svelte:element>
                    <div class="alapalkin-osio__sisältö">
                        <Palkinnot />
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</div> -->

<style>
    .alapalkin-osio {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .alapalkki_ylaosa_horisontaaliset {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    
    @media(max-width: 992px){
        .alapalkki_ylaosa{
            flex-direction: column;
        }
    }
</style>

<div>
    <svelte:element this={otsikkotaso}>
        <AlapalkinOtsikko teksti={otsikko} />
    </svelte:element>
    
    {#if children}
        <div>{@render children()}</div>
    {/if}
</div>
