<script>
    import KuvaKaruselli from "../teht26/kuva-karuselli.svelte";

    let kuvat = [
        "./src/harjoitukset/kuvat/tietokoneet.png",
        "./src/harjoitukset/kuvat/tuoli.png",
        "./src/harjoitukset/kuvat/leivan_paahdin.png",
        "./src/harjoitukset/kuvat/Lahjakortti.png",
    ];
</script>

<div class="sisalto">
    <KuvaKaruselli />
    <div class="sisalto_alarivi">
        <div class="kaikki_kuvat">
            {#each kuvat as kuva}
            <div class="kuvat">
                <img class="kuva" src={kuva} />
            </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .kuva{
        width: 266px;
        height: 266px;
        overflow: hidden;
    }
    .kuvat:first-child {
        content: "";
        margin: 0 10px 0 0;
    }
    .kuvat:last-child {
        content: "";
        margin: 0 0 0 10px;
    }
    .kuvat{
        height: 230px;
        overflow: hidden;
        margin: 0 10px;
    }
    .kuvat img{
        transition: 0.25s ease;
    }
    .kuvat:hover img{
        transform: scale(110%);
    }
    .kaikki_kuvat{
        display: flex;
        flex-direction: row;
        margin: 20px 70px;
        justify-content: space-between;
    }
    .sisalto {
        background-color: #1a1e21;
        color: black;
        padding-bottom: 30px;
    }
    @media(max-width: 1200px){
        .kaikki_kuvat{
            margin: 20px 10px;
        }
    }
    @media(max-width: 991px){
        .kaikki_kuvat {
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
       width: 70%;
        }
    }
</style>
