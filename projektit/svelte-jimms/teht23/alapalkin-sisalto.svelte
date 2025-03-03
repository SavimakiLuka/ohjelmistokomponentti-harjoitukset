<script>
    import AsiakaspalveluYritysmyynti from "./x-asiakaspalvelu-yritysmyynti.svelte";
    import MyymalaTurku from "./x-myymalaTurku.svelte";
    import Yhteisot from "./x-yhteisot.svelte";
    import TilaaUutiskirje from "./x-tilaaUutiskirje.svelte";
    import Info from "./x-info.svelte";
    import ShopInShops from "./x-shopInShops.svelte";
    import ArtikkelitJaBlogi from "./x-artikkelitJaBlogi.svelte";
    import SertifikaatitJaPalkinnot from "./x-sertifikaatitJaPalkinnot.svelte";
</script>

<div class="alapalkki">
    <div class="ylarivi">
        <div class="levea_nakyma">
            <AsiakaspalveluYritysmyynti />
            <MyymalaTurku />
            <Yhteisot />
            <TilaaUutiskirje />
        </div>

        <div class="kapea_nakyma">
            <div class="vasen_sarake">
                <AsiakaspalveluYritysmyynti />
                <MyymalaTurku />
            </div>
            <div class="oikea_sarake">
                <Yhteisot />
                <TilaaUutiskirje />
            </div>
        </div>
    </div>
    <div class="alarivi">
        <div class="levea_nakyma">
            <Info />
            <ShopInShops />
            <ArtikkelitJaBlogi />
            <SertifikaatitJaPalkinnot />
        </div>

        <div class="kapea_nakyma">
            <div class="vasen_sarake">
                <Info />
                <SertifikaatitJaPalkinnot />
            </div>
            <div class="oikea_sarake">
                <ShopInShops />
                <ArtikkelitJaBlogi />
            </div>
        </div>
    </div>
</div>

<style>
    .alapalkki {
        display: flex;
        flex-direction: column;
        background-color: #23272b;
        padding: 0 70px;
    }
    .alarivi {
        display: flex;
        flex-direction: row;
        padding-bottom: 30px;
        width: 100%;
    }
    .ylarivi {
        display: flex;
        flex-direction: row;
        padding-bottom: 50px;
        width: 100%;
        border-bottom: solid 1px #3E4246;
    }
    .oikea_sarake {
        display: none;
    }
    .vasen_sarake {
        display: none;
    }
    .levea_nakyma {
        display: flex;
        flex-direction: row;
    }
    .kapea_nakyma {
        display: none;
        flex-direction: row;
    }
    @media (max-width: 992px) {
        .alapalkki {
            flex-wrap: wrap;
            padding: 0 0;
        }
        .ylarivi {
            flex-wrap: wrap;
        }
        .alarivi {
            flex-wrap: wrap;
        }
        .levea_nakyma {
            display: none;
        }
        .kapea_nakyma {
            display: flex;
            flex-direction: row;
        }
        .oikea_sarake {
            display: flex;
            flex-direction: column;
            width: 50%;
            justify-content: flex-start;
        }
        .vasen_sarake {
            display: flex;
            flex-direction: column;
            width: 50%;
        }
    }

    @media(max-width: 768px){
        
    }

    @media (max-width: 479px) {
        .kapea_nakyma {
            display: flex;
            flex-direction: column;
        }
        .vasen_sarake {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
    }
</style>
