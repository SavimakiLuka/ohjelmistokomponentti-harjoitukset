<script>
    let { kuva } = $props();

    let kuvat = {
        "gpu": "./src/harjoitukset/kuvat/gpu.jpg",
        "kuulokkeet": "./src/harjoitukset/kuvat/kuulokkeet.jpg"
    }
    console.log(kuva)

    let kuvatkeys = ["gpu", "kuulokkeet"]
</script>

<div class="kuva_karuselli">
    {#each kuvatkeys as valittu_kuva}
        {#if valittu_kuva === kuva}
            <img class="kuva" src={kuvat[valittu_kuva]} />
        {/if}
    {/each}
</div>

<style>
    .kuva_karuselli{
        height: 380px;
        background-color: #1A1E21;
    }
    .kuva{
        display: flex;
        justify-content: center;
        width: 90%;
        height: 380px;
        margin: 0 70px;
    }
</style>