<script>
    let { nimi, url } = $props();
</script>

<style>
    .otsikko1{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        font-size: 72px;
        background: linear-gradient(160deg, #CE6D1D 35%, #FBD43C);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 25px;
        font-weight: 700;
        padding-right: 15px;
    }

    .otsikko2{
        display: none;
        flex-direction: row;
        justify-content: flex-start;
        font-size: 90px;
        background: linear-gradient(160deg, #CE6D1D 35%, #FBD43C);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 25px;
        font-weight: 700;
        padding-right: 15px;
    }

    a{
        text-decoration: none;
        color: #ffffff;
    }

    @media(max-width: 990px){
        .otsikko1{
            display: none;
        }
        .otsikko2{
            display: flex;
        }
    }
    @media(max-width: 480px){
        .otsikko1{
            display: flex;
        }
        .otsikko2{
            display: none;
        }
    }
</style>

<div class="otsikko1">Jimm's</div>
<div class="otsikko2">J</div>