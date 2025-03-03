<script>
    let { kuva, kuvat, kuvanumero } = $props();
    let onkoNäkyvissä = $derived(kuvat[kuvanumero] === kuva ? 'näkyvissä' : 'piilossa');

    let kuvatSrc = {
        gpu: "./src/harjoitukset/kuvat/gpu.jpg",
        kuulokkeet: "./src/harjoitukset/kuvat/kuulokkeet.jpg"
    }

</script>

<img src={kuvatSrc[kuva]} class="kuva {onkoNäkyvissä} {kuva}" />

<style>
.näkyvissä {
    display: flex;
}

.piilossa {
    display: none;
}
</style>
