<script>
    import AlapalkinOsio from "../teht21/alapalkin-osio.svelte";
    import ShopInShops from "../teht16/brandit.svelte"
    import AlapalkinSarake from "../teht22/alapalkin-sarake.svelte";
</script>

<AlapalkinSarake>
    <div class="osio">
        <div>
            <AlapalkinOsio otsikko="shop-in-shops">
                <div class="alapalkin-osio__sisältö">
                    <ShopInShops />
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