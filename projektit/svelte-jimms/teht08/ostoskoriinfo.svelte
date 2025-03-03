<script>
    let { nimi, url } = $props()
    import Ostoskori from "./ostoskori.svelte";

</script>

<Ostoskori nimi={nimi} url={url} teksti="Ostoskorisi on tyhjä" />