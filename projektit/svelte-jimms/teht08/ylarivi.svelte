<script>
    import Toiminnot from "./toiminnot.svelte";
    import Otsikko from "./otsikko.svelte";
    import Haku from "./haku.svelte";
</script>

<div class="ylapalkki__ylarivi">
    <div class="oikeat">
        <div class="kuva">
            <img class="menu" src="./src/harjoitukset/ikonit/menu-ikoni.svg" />
        </div>
        <div class="otsikko">
            <Otsikko />
        </div>
        <div class="hakupalkki">
            <Haku />
        </div>
        <div class="toiminnot">
            <Toiminnot />
        </div>
    </div>
    <div class="hakupalkki_uusi">
        <Haku />
    </div>
</div>

<style>
    .ylapalkki__ylarivi {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0 70px;
        margin-top: 10px;
        justify-content: space-between;
    }

    .menu {
        display: none;
        filter: contrast(100%) brightness(100%) invert(100%);
        margin: 0 15px 0 10px;
        width: 37px;
    }

    .oikeat {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .hakupalkki_uusi {
        display: none;
    }

    .hakupalkki {
        display: flex;
        width: 87%;
    }

    .otsikko {
        display: flex;
        width: unset;
        justify-content: flex-start;
    }

    @media (max-width: 1200px) {
        .ylapalkki__ylarivi {
            margin: 10px 0;
        }
        .menu {
            display: flex;
        }
    }

    @media(max-width: 768px){
        .hakupalkki {
        width: 80%;
        padding-right: 10px;
    }
    }

    @media (max-width: 480px) {
        .hakupalkki {
            display: none;
        }
        .hakupalkki_uusi {
            display: flex;
            width: 100%;
            justify-content: center;
        }
        .oikeat {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            justify-content: space-between;
        }
        .ylapalkki__ylarivi {
            display: flex;
            flex-direction: column;
        }
        .kuva {
            display: flex;
        }
        .otsikko {
            width: 100%;
        }
        .toiminnot {
            display: flex;
        }
    }
</style>
