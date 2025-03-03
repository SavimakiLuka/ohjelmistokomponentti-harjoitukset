<script>
    let { nimi, url } = $props();
</script>

<div class="kirjautuminen_valikko">
    <button class="kirjautuminen" href={url}>
        <img class="ikoni" src="./src/harjoitukset/ikonit/käyttäjä-ikoni.svg" />
        <div class="teksti">
            {nimi}
        </div>
    </button>
</div>

<style>
    .kirjautuminen_valikko {
        display: flex;
        padding: 0 10px;
        height: 100%;
        align-items: center;
    }

    .ikoni{
        display: flex;
        filter: brightness(100%) contrast(100%) saturate(100%) invert(100%);
        margin-right: 10px;
    }

    a {
        text-decoration: none;
        color: #ffffff;
    }

    .kirjautuminen {
        display: flex;
        height: 100%;
        align-items: center;
        border: none;
        background-color: #272b30;
        color: #ffffff;
    }

    .kirjautuminen:hover {
        background-color: #ffffff;
        color: #272b30;
    }

    button:hover .ikoni{
        filter: brightness(100%) contrast(50%) saturate(0%) invert(0%);
    }

    .teksti{
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @media(max-width: 768px){
        .teksti{
            display: none;
        }
        .kirjautuminen_valikko{
            padding: 0;
        }
        .kirjautuminen{
            padding: 0;
        }
        .ikoni{
            width: 20px;
            margin: 0;
        }
    }
</style>
