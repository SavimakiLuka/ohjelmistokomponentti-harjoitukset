<script>
  let { url, nimi } = $props()

  let info = {
    yhteystiedot: "./src/harjoitukset/ikonit/yhteistiedot-ikoni.svg",
    toimitustavat: "./src/harjoitukset/ikonit/toimitus-ikoni.svg",
    maksutavat: "./src/harjoitukset/ikonit/euro-ikoni.svg",
    takuupalautus: "./src/harjoitukset/ikonit/info-ikoni.svg",
    "palvelut ja huolto": "./src/harjoitukset/ikonit/työkalu-ikoni.svg",
    "usein kysytyt kysymykset": "./src/harjoitukset/ikonit/kysymys-ikoni.svg",
    yritysmyynti: "./src/harjoitukset/ikonit/yritys-ikoni.svg",
    "ura jimm'sillä": "./src/harjoitukset/ikonit/matkalaukku-ikoni.svg",
    "jimm's tuoteturva": "./src/harjoitukset/ikonit/tietoturva-ikoni.svg",
    };
</script>

<div>
  <a href={url} class="info">
    <img class="ikoni" src={info[nimi]}>
    <div class="info_teksti">{nimi}</div>
  </a>
</div>

<style>
  .info{
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }
  .info_teksti{
    display: flex;
    margin-left: 6px;
  }
  .ikoni{
    filter: invert(0.5) sepia(1) saturate(10) hue-rotate(-15deg);
    width: 20px;
    height: 20px;
  }
</style>
