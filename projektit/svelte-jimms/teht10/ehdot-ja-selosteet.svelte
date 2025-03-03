<script>
    import EhtoTaiSeloste from "./ehto-tai-seloste.svelte";

    let alkiot = [ 
        {nimi: "Takuu- ja toimitusehdot", url: "#"},
            {nimi: "Tietosuojaseloste", url: "#"}
        ];
</script>

<style>
    .ehdot{
        display: flex;
        flex-direction: row;
    }
    li{
        list-style: none;
    }
</style>

<ul class="ehdot">
    {#each alkiot as alkio}
        <li class="ehto">
            <EhtoTaiSeloste nimi={alkio.nimi} url={alkio.url} />
        </li>
    {/each}
</ul>