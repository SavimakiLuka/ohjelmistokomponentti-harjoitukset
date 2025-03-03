<script>
    import KuvatKaruselliin from "./kuvat-karuselliin.svelte";
    import KarusellinKuva from "./karusellin-kuva.svelte";
    
    let kuvat_numero = $state(0);
    
    var kuvat = ["gpu", "kuulokkeet"];

    // let kuvanumero = $state(0)
    // let kuvanumero = 0

    // function vaihdakuva() {
    //     kuvanumero = (kuvanumero + 1) % kuvat.length;
    // }


    // var kuvat_numero = 0;

    let valittuKuva = $derived(kuvat[kuvat_numero])


    console.log("komponentti", valittuKuva)

    // let valittuKuva = kuvat[kuvat_numero]

    // setInterval(vaihdakuva, 2000);
    $effect(()=>{
        setInterval(() => {
            // console.log('paivitakuva', kuvat_numero)
            kuvat.src = kuvat[kuvat_numero];
            kuvat_numero = (kuvat_numero + 1) % kuvat.length;
            // console.log('paivitakuva', valittuKuva)
        }, 2000);
    })
</script>

<div class="sisalto">

    <!-- <ul class="karuselli">
        {#each kuvat as kuva}
            <li>
                <KarusellinKuva kuva={kuva} kuvat={kuvat} kuvanumero={kuvanumero}/>            
            </li>
        {/each}
    </ul> -->

    <div class="mainos">
        <KuvatKaruselliin kuva={valittuKuva} />
    </div>
    <!-- <button class="edellinen">
        <img
            class="nuoli"
            src="./src/harjoitukset/ikonit/nuoli_vasemmalle_ikoni.svg"
        />
    </button>
    <button class="seuraava">
        <img
            class="nuoli"
            src="./src/harjoitukset/ikonit/nuoli_oikealle_ikoni.svg"
        />
    </button> -->
</div>

<style>
    .mainos{
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
    }
    .sisalto{
        margin-right: 13px;
    }












    /* .nuoli {
        display: flex;
        align-content: center;
        z-index: 999;
        filter: brightness(100%) invert(100%) contrast(100%);
    }

    .edellinen {
        border: none;
        background-color: black;
        opacity: 0.6;
        width: 50px;
        height: 70px;
        z-index: 998;
        position: absolute;
        top: 45%;
        left: 5.5%;
    }
    .edellinen:hover {
        opacity: 0.9;
    }

    .seuraava {
        border: none;
        background-color: black;
        opacity: 0.6;
        width: 50px;
        height: 70px;
        z-index: 998;
        position: absolute;
        top: 45%;
        right: 4.5%;
    }
    .seuraava:hover {
        opacity: 0.9;
    } */
</style>
