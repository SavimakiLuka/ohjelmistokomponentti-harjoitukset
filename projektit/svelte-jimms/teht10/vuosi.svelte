<script>
    var NykyinenAika = new Date();
    var NykyinenVuosi = NykyinenAika.getFullYear();
</script>

<style>
    .copyright{
        display: flex;
        flex-direction: row;
    }

    .vuosi{
        padding: 0 8px;
    }
</style>

<div class="copyright">
    <div>Copyright ©</div>
    <div class="vuosi">{NykyinenVuosi}</div>
    <div>Jimm's PC-Store Oy</div>
</div>


