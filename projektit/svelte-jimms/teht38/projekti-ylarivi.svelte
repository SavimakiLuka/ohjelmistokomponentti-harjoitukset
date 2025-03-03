<script>

</script>

<div class="ylarivi">
    <div class="malli">
        portfolio:
        <a class="jimms_linkki" href="https://www.jimms.fi/">jimms.fi</a>
        -etusivu kopio
    </div>
    <div class="tiedot">
        <div class="repo">
            repo:
            <a class="repo_linkki" href="https://github.com/SavimakiLuka/SavimakiLuka">github:SavimakiLuka/SavimakiLuka</a>
        </div>
        <div class="profiili">
            profiili:
            <a class="profiili_linkki" href="https://github.com/SavimakiLuka/SavimakiLuka">github:SavimakiLuka/SavimakiLuka</a>
        </div>
    </div>
</div>

<style>
    @media(max-width: 980px){
        .tiedot{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }
    }
    @media(max-width: 510px){
        .ylarivi{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }
        .malli{
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
        }
    }
    .tiedot{
        display: flex;
        flex-direction: row;
    }
    .jimms_linkki{
        margin: 5px;
    }
    .repo_linkki{
        margin-left: 5px;
    }
    .profiili_linkki{
        margin-left: 5px;
    }
    a{
        text-decoration: none;
        color: #EE6622;
    }
    a:hover{
        color: #F17D43;
    }
    .ylarivi{
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #0F0F0F;
        color: white;
        padding: 10px 20px;
    }
    .malli{
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
    }
    .repo{
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
    .profiili{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-left: 10px;
    }
</style>
