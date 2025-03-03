<script>

</script>

<div class="info_palkki">
    <div class="info">
        <div class="info_linkki">
            <div class="logo">ㆆ</div>
            <div class="abstract">abstract</div>
        </div>
        <div class="help_center">help center</div>
    </div>
    <div class="napit">
        <button class="nappi submit_request">
            <div class="teksti">submit a request</div>
        </button>
        <img src="./src/harjoitukset/ikonit/hakupalkin-ikoni.svg" class="vaihtuva_teksti">
        <button class="nappi sing_in">
            <div class="teksti">sign in</div>
        </button>
        <img src="./src/harjoitukset/ikonit/menu-ikoni.svg" class="vaihtuva_teksti">
    </div>
</div>

<style>
    .ikoni{
        filter: brightness(100%) saturate(100%) contrast(100%) hue-rotate(100%) invert(100%) sepia(100%);
    }
    .logo{
        background-color: white;
        color: black;
        font-weight: 800;
        border-radius: 42%;
        width: 33px;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease-out;
    }
    .logo:hover{
        background-color: #CCCCCC;
    }
    .abstract{
        margin: 0 10px;
        font-weight: 600;
        transition: all 0.3s ease-out;
    }
    .abstract:hover{
        color: #CCCCCC;
    }
    .help_center{
        display: flex;
        width: 200px;
    }
    .help_center:hover{
        text-decoration: underline;
    }
    .info_linkki{
        display: flex;
        flex-direction: row;
    }
    .submit_request{
        background-color: #191A1B;
        border: 1px solid white;
        width: 229px;
    }
    .submit_request:hover{
        cursor: pointer;
    }
    .sing_in{
        background-color: 
        #4C5FD5;
        border: none;
        margin-left: 17px;
        width: 140px;
        transition: all 0.3s ease-out;
    }
    .sing_in:hover{
        cursor: pointer;
        background-color: white;
        color: black;
    }
    .nappi{
        display: flex;
        height: 48px;
        font-size: 22px;
        color: white;
        align-items: center;
        justify-content: center;
        border-radius: 7px;
    }
    .teksti::first-letter{
        text-transform: capitalize;
    }
    .vaihtuva_teksti{
        display: none;
        color: white;
    }
    .info{
        display: flex;
        flex-direction: row;
        font-size: 22px;
        text-transform: capitalize;
        align-items: center;
    }
    .napit{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
    }
    .info_palkki{
        background-color: black;
        color: white;
        display: flex;
        flex-direction: row;
        padding: 20px 90px;
        height: 48px;
    }
    @media(max-width: 1200px){
        .nappi{
            display: none;
        }
        .vaihtuva_teksti{
            display: flex;
        }
    }
</style>