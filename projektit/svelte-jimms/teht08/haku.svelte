<script>
    import { getContext } from 'svelte';

    let { placeholder = "Hae tuotteista", url } = $props();

    const hakusanaMap = getContext("haettu_asia")

    let hakuKentänArvo = $state("");
    url = "#";
    let hakuikoni = "./src/harjoitukset/ikonit/hakupalkin-ikoni.svg";

    function hakeminen(event) {
    if (event.key === "Enter") {
        console.log("ennen", hakusanaMap, hakuKentänArvo)
        
        console.log("jälkeen", hakusanaMap)
        let key = event.key;
        console.log(key)

        hakusanaMap.hakusana = hakuKentänArvo
    }
  }
</script>

<input class="hakupalkki" bind:value={hakuKentänArvo} onkeydown={hakeminen} type="text" placeholder={placeholder} />


<style>
    .haku {
        display: flex;
        flex-direction: row;
        padding: 0 5px;
        color: #868b90;
        font-size: 16px;
    }

    .ikoni {
        filter: invert(0.6) sepia(0.32) saturate(5) hue-rotate(-30deg);
        width: 25px;
        height: 25px;
        padding-left: 10px;
    }

    input.hakupalkki {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 45px;
        border-radius: 2px;
        border: solid 2px #868b90;
        align-items: center;
        color: white;
        justify-content: flex-start;
        padding: 0 0 0 40px;
        font-size: 16px;
        background: #1A1E21 url("./src/harjoitukset/ikonit/hakupalkin-ikoni.svg") no-repeat 15px;
    }
    @media(max-width: 478px){
        input.hakupalkki {
        width: 85%;
    }
    }
</style>
