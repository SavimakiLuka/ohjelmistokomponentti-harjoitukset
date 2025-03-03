<script>
    import Brandi from "./brandi.svelte";

    let brandit = [
        [
            { nimi: "APNX", url: "https://APNX.com" },
            { nimi: "Ducky", url: "https://Ducky.com" },
            { nimi: "Endgame Gear", url: "https://EndgameGear.com" },
            { nimi: "HAVN", url: "https://HAVN.com" },
            { nimi: "Kolink", url: "https://Kolink.com" },
            { nimi: "Nitro Consepts", url: "https://NitroConsepts.com" },
            { nimi: "noblechairs", url: "https://noblechairs.com" },
            { nimi: "Streamplify", url: "https://Streamplify.com" },
            { nimi: "TRYX", url: "https://TRYX.com" },
        ],
        [
            { nimi: "Asus", url: "https://Asus.com" },
            { nimi: "Acer", url: "https://Acer.com" },
            { nimi: "Akasa", url: "https://Akasa.com" },
            { nimi: "ASRock", url: "https://ASRock.com" },
            { nimi: "Cooler Master", url: "https://CoolerMaster.com" },
            { nimi: "Corasir", url: "https://Corsair.com" },
            { nimi: "Fractal Desing", url: "https://FractalDesing.com" },
            { nimi: "Gigabyte", url: "https://Gigabyte.com" },
            { nimi: "Logitech", url: "https://Logitech.com" },
            { nimi: "Phanteks", url: "https://Phanteks.com" },
        ],
    ];

    console.log("Brandit-taulu:", brandit);
</script>

<div class="brandit">
    {#each brandit[0] as brandi}
        {console.log("Brandi silmukassa:", brandi)}
        <Brandi nimi={brandi.nimi} url={brandi.url} />
    {/each}
</div>
<div class="brandit">
    {#each brandit[1] as brandi}
        {console.log("Brandi silmukassa:", brandi)}
        <Brandi nimi={brandi.nimi} url={brandi.url} />
    {/each}
</div>

<style>
    a {
        text-decoration: none;
        color: black;
    }

    .brandit {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
</style>
