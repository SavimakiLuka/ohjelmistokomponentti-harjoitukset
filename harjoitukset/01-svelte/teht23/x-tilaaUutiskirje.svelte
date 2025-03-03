<script>
    import AlapalkinOsio from "../teht21/alapalkin-osio.svelte";
    import AlapalkinSarake from "../teht22/alapalkin-sarake.svelte";


</script>

<AlapalkinSarake>
    <div class="osio">
        <div>
            <AlapalkinOsio otsikko="tilaa uutiskirje">
                <div class="alapalkin-osio__sisältö">
                    <div class="uutiskirje_teksti">
                        Tilaa Jimm’sin uutiskirje ja saat ensimmäisten
                        joukossa tietoa tarjouksista, tapahtumista ja
                        uusista tuotteista.
                    </div>
                    <button class="tilaa_uutiskirje_nappi">tilaa uutiskirje</button>
                </div>
            </AlapalkinOsio>
        </div>
    </div>
</AlapalkinSarake>

<style>
    .uutiskirje_teksti{
        color: #C9D1D4;
    }
    .tilaa_uutiskirje_nappi{
        border-radius: 5px;
        height: 37px;
        width: 160px;   
        background-color: #EE6622;
        margin-top: 20px;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        color: white;
        border: none;
    }
    .tilaa_uutiskirje_nappi:hover{
        background-color: #f17d43;
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