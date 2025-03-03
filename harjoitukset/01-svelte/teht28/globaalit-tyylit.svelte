<style>
    @font-face {
        font-family: "OpenSans";
        src:
            url("./src/harjoitukset/fontti/OpenSans-VariableFont_wdth,wght.ttf") format("woff2");
        font-style: normal;
    }

    :global(body) {
        margin: 0;
    }
    :global(:root){
        font-family: 'OpenSans', sans-serif;
        font-size: 14.2px;
    }

    :global(a) {
        text-decoration: none;
        color: #c9d1d4;
    }
    :global(a:hover) {
        text-decoration: none;
        color: #f17d43;
    }
    :global(.tilaa_uutiskirje_nappi){
        font-family: "OpenSans", sans-serif;
    }

    :global(:root) {
        --sivun-sisällön-leveys: calc(1120px + 7px + 7px);
        --sivun-sisällön-korkeus: calc(500px);
    }

    @media (max-width: 1150px) {
        :global(:root) {        
            --sivun-sisällön-leveys: calc(100%);
            --sivun-sisällön-korkeus: calc(100%);
        }   
    }

    @media (max-width: 768px) {
        :global(:root) {        
            font-family: 'OpenSans', sans-serif;
            font-size: 12.2px;
        }   
    }

    :global(span) {
        width: var(--sivun-sisällön-leveys);
        height: var(--sivun-sisällön-korkeus);
    }
</style>
