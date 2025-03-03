<script>
    let { yhteystiedot, yhteystiedot2, teksti } = $props();

    import Yhteystieto from "./yhteystieto.svelte";

    yhteystiedot = [
        { puhelin: "+358 29 707 0701" },
        { sahkoposti: "@yritys.fi" },
    ];

    yhteystiedot2 = [{ osoite: "Lukkosepänkatu 15" }, { muu: "20320 Turku" }];
</script>

<div class="auki">
    
    {#if teksti === "1"}
    {#each yhteystiedot as yhteytieto}
    {#if yhteytieto.puhelin}
    <a href="#" class="yhteystieto">
        <Yhteystieto tyyppi={"puhelin"} />
        <div class="yhteystieto_teksti">{yhteytieto.puhelin}</div>
    </a>
    {/if}
    {#if yhteytieto.sahkoposti}
    <a href="#" class="yhteystieto">
        <Yhteystieto tyyppi="sahkoposti" />
        <div class="yhteystieto_teksti">{yhteytieto.sahkoposti}</div>
    </a>
    {/if}
    {/each}
    {/if}
</div>

{#if (teksti === "2")}
    {#each yhteystiedot2 as yhteytieto}
        {#if yhteytieto.osoite}
            <a href="#" class="yhteystieto">
                <Yhteystieto tyyppi="osoite" />
                <div class="yhteystieto_teksti">{yhteytieto.osoite}</div>
            </a>
        {/if}
        {#if yhteytieto.muu}
            <a href="#" class="yhteystieto">
                <div class="yhteystieto_teksti_muu">{yhteytieto.muu}</div>
            </a>
        {/if}
    {/each}
{/if}


<style>
    .yhteystieto {
        display: flex;
        flex-direction: row;
    }
    .yhteystieto_teksti{
        display: flex;
        margin-left: 6px;
    }
    .yhteystieto_teksti_muu{
        display: flex;
        margin-left: 30px;
    }
    .auki{
        display: flex;
        flex-direction: column;
        margin-top: 15px;
    }
</style>
