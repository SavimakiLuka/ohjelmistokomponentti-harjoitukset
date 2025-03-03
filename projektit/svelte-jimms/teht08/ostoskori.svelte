<script>
    let { nimi, url, teksti } = $props();
</script>

<style>
    .ostoskori{
        padding-left: 10px;
    }
    .ostoskori_osio{
        display: flex;
        border: solid 2px white;
        border-radius: 2px;
        background-color: #272B30;
        width: 50px;
        height: 50px;
        justify-content: center;
        align-items: center;
    }
    .ikoni {
        width: 30px;
        height: 30px;   
        display: flex;
        filter: brightness(112%) contrast(100%) saturate(100%) invert(100%);
    }

    button:hover .ikoni {
        filter: brightness(100%) contrast(50%) saturate(0%) invert(0%);
    }

    .ostoskori_osio:hover{
        background-color: #ffffff;
    }

    span {
        position: absolute;
        width: 400px;
        height: 50px;
        visibility: hidden;
        background-color: #ffffff;
        color: black;
        border-radius: 3px;
        top: 70px;
        right: 70px;
        box-shadow: rgba(0, 0, 0, .13) 0 7px 15px, rgba(0, 0, 0, .05) 0 0 3px;
    }

    .ostoskori_osio:hover span {
        visibility: visible;
    }

    .ostoskorin_sisalto{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 15px;
        padding-left: 10px;
    }

    @media(max-width: 768px){
        .ostoskori_osio{
            border: none;
        }
        .ostoskori{
            padding: 0;
        }
        .ikoni{
            width: 20px;
        }
    }
</style>

<div class="ostoskori">
    <button class="ostoskori_osio" href={url}>
        <img class="ikoni" src={nimi} >
        <span class="ostoskorin_sisalto">{teksti}</span>
    </button>
</div>