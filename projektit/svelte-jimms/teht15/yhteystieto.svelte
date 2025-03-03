<script>
    const kuvat = {
        puhelin: "./src/harjoitukset/ikonit/puhelin-ikoni.svg",
        sahkoposti: "./src/harjoitukset/ikonit/email-ikoni.svg",
        osoite: "./src/harjoitukset/ikonit/sijainti-ikoni.svg",
        oletus: "./src/harjoitukset/ikonit/info-ikoni.svg",
    };

    let { tyyppi, teksti } = $props();

    import IkoniJaTeksti from "../teht13/ikoni-ja-teksti.svelte";

    let kuva;

    switch (tyyppi) {
        case "puhelin":
            kuva = kuvat.puhelin;
            break;
        case "sahkoposti":
            kuva = kuvat.sahkoposti;
            break;
        case "osoite":
            kuva = kuvat.osoite;
            break;
        default:
            kuva = kuvat.oletus;
            break;
    }
</script>

<IkoniJaTeksti {kuva} teksti={tyyppi} />

<style>
</style>
