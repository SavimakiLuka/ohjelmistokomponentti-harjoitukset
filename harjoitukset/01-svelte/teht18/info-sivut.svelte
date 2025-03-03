<script>
    import InfoSivu from "./info-sivu.svelte";
  
    export let infoSivut = [
        {nimi: "yhteystiedot", url: "yhteystiedot.com"},
        {nimi: "toimitustavat", url: "toimitustavat.com"},
        {nimi: "maksutavat", url: "maksutavat.com"},
        {nimi: "takuupalautus", url: "takuupalautus.com"},
        {nimi: "palvelut ja huolto", url: "palvelutjahuolto.com"},
        {nimi: "usein kysytyt kysymykset", url: "kysymykset.com"},
        {nimi: "yritysmyynti", url: "yritysmyynti.com"},
        {nimi: "ura jimm'sillä", url: "ura.com"},
        {nimi: "jimm's tuoteturva", url: "tuoteturva.com"}
    ];
  </script>
  

    {#each infoSivut as info}
      <div>
        <InfoSivu url={info.url} nimi={info.nimi} />
      </div>
    {/each}