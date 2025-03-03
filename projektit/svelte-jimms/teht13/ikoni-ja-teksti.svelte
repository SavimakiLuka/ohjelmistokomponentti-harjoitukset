<script>
    let { kuva } = $props();
</script>

<img class="ikoni" src={kuva} />

<style>
    .ikoni_asettelu {
        display: flex;
        flex-direction: row;
    }
    .ikoni {
        filter: invert(0.5) sepia(1) saturate(10) hue-rotate(-15deg);
        height: 20px;
        width: 20px;
    }
</style>
