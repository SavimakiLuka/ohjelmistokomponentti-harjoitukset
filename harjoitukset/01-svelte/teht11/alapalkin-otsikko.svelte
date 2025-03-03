<script>
    let { teksti } = $props();
</script>

<div>
    <div class="otsikko">{teksti}</div>
</div>

<style>
    .otsikko {
        color: #f1f1f4;
        text-transform: uppercase;
        font-size: 21px;
    }
    @media(max-width: 768px){
        .otsikko{
            font-size: 19px;
        }
    }
</style>
