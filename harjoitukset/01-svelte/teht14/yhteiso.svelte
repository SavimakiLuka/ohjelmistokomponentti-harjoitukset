<script>
    let { nimi, url } = $props();

    let somet = {
        facebook: "./src/harjoitukset/ikonit/facebook-ikoni.svg",
        instagram: "./src/harjoitukset/ikonit/instagram-ikoni.svg",
        twitter: "./src/harjoitukset/ikonit/twitter-ikoni.svg",
        x: "./src/harjoitukset/ikonit/twitter-ikoni.svg",
        youtube: "./src/harjoitukset/ikonit/youtube-ikoni.svg",
        tiktok: "./src/harjoitukset/ikonit/tiktok-ikoni.svg",
        linkedin: "./src/harjoitukset/ikonit/linked-ikoni.svg",
    };
</script>

<a class="yhteiso" href={url}>
    <img class="ikoni" src={somet[nimi]} />
</a>

<style>
    .yhteiso {
        display: flex;
        height: 30px;
        width: 30px;
    }
    .ikoni {
        filter: invert(98%) sepia(30%) saturate(273%) hue-rotate(174deg)
            brightness(99%) contrast(89%);
    }
</style>
