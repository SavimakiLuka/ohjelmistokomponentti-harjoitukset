<script>
    import Apunappi from "./apunappi.svelte";


</script>

<div class="alapalkki_alarivi">
    <ul class="aiheet">
        <li class="aihe">
            <div class="valiotsikko">abstract</div>
            <ul>
                <li class="sisalto">
                    start trial
                </li>
                <li class="sisalto">
                    pricing
                </li>
                <li class="sisalto">
                    download
                </li>
            </ul>
        </li>
        <li class="aihe">
            <div class="valiotsikko">resources</div>
            <ul>
                <li class="sisalto">
                    blog
                </li>
                <li class="sisalto">
                    help center
                </li>
                <li class="sisalto">
                    release notes
                </li>
                <li class="sisalto">
                    status
                </li>
            </ul>
        </li>
        <li class="aihe">
            <div class="valiotsikko">community</div>
            <ul>
                <li class="sisalto">
                    twitter
                </li>
                <li class="sisalto">
                    linked
                </li>
                <li class="sisalto">
                    facebook
                </li>
                <li class="sisalto">
                    dribbble
                </li>
                <li class="sisalto">
                    podcast
                </li>
            </ul>
        </li>
        <li class="aihe">
            <div class="valiotsikko">company</div>
            <ul>
                <li class="sisalto">
                    about us
                </li>
                <li class="sisalto">
                    careers
                </li>
                <li class="sisalto">
                    legal
                </li>
                <li class="yhteystiedot">
                    contact us
                </li>
                <li class="sisalto">
                    info@abstract.com
                </li>
            </ul>
        </li>
    </ul>
    <div class="ala_osa">
        <div class="vali"></div>
        <div class="tiedot">
            <div class="logo">ㆆ</div>
            <div class="sisalto">
                © Copyright 2025
            </div>
            <div class="sisalto">
                Abstract Studio Design, Inc.
            </div>
            <div class="sisalto">
                All rights reserved
            </div>
        </div>
    </div>
</div>
<Apunappi />

<style>
    .sisalto{
        margin-bottom: 2px;
    }
    .vali{
        width: 300px;
    }
    .yhteystiedot{
        margin-top: 30px;
        margin-bottom: 5px;
        font-weight: 700;
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
        margin-bottom: 20px;
    }
    .tiedot{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        width: 400px;
        margin-bottom: 20px;
    }
    .valiotsikko{
        text-transform: capitalize;
        font-size: 23px;
        font-weight: 800;
        margin-bottom: 15px;
    }
    .alapalkki_alarivi{
        display: flex;
        flex-direction: row;
        background-color: black;
        color: white;
        margin: 0;
        padding: 45px 90px;
        height: 312px;
        font-size: 19px;
    }
    .aiheet{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 630px;
        font-size: 16px;
    }
    .aihe{
        display: flex;
        flex-direction: column;
        text-transform: capitalize;
        width: 20%;
    }
    .ala_osa{
        display: flex;
        width: 400px;
    }
    @media(max-width: 990px){
        .aihe{
            width: 40%;
            margin-bottom: 45px;
        }
        .aiheet{
            flex-wrap: wrap;
            width: 83%;
        }
        .vali{
            width: 245%;
        }
        .tiedot{
            width: 100%;
        }
        .ala_osa{
            display: flex;
            flex-direction: row;
            width: 100%;
        }
        .alapalkki_alarivi{
            padding-bottom: 300px;
            padding-left: 75px;
            padding-right: 75px;
            flex-direction: column;
        }
    }
</style>