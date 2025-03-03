<script>
    import AlapalkinSarake from "../teht22/alapalkin-sarake.svelte";
    import Asiakaspalvelu from './x-asiakaspalvelu.svelte';
    import Yritysmyynti from './x-yritysmyynti.svelte'
</script>

<AlapalkinSarake>
    <div class="asiakaspalvelu">
        <Asiakaspalvelu />
    </div>
    <div class="yritysmyynti">
        <Yritysmyynti />
    </div>
</AlapalkinSarake>

<style>
    .yritysmyynti{
        border-top: solid 1px #3E4246;
    }
</style>


