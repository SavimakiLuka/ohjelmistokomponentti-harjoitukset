<script>
    import Alapalkki from "./alapalkki/alapalkki.svelte";
    import Ylapalkki from "./ylapalkki/ylapalkki.svelte";
</script>

<Ylapalkki />
<Alapalkki />

<style>
    :global(ul){
        list-style: none;
        margin: 0;
        padding: 0;
    }
    :global(body){
        margin: 0;
    }
    :global(:root){
        font-family: "OpenSans", "sans-serif";
    }
    @font-face {
        font-family: "OpenSans";
        src:
            url("./src/harjoitukset/fontti/OpenSans-VariableFont_wdth,wght.ttf") format("woff2");
        font-style: normal;
    }
</style>