<script>
    let { ajat } = $props();

    import Aukioloaika from "./aukioloaika.svelte";
    import Auki from "./auki.svelte";
    import Paivat from "./paivat.svelte";
</script>

<div class="aukioloaika">
    <Paivat />
    <div class="kellonaika">
        24/7
    </div>
</div>

<style>
    .aukioloaika{
        display: flex;
        flex-direction: row;
        color: #C9D1D4;
    }
    .kellonaika{
        display: flex;
        padding-left: 40px;
    }
    
</style>
