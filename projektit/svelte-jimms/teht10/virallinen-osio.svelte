<script>
    import EhdotJaSelosteet from "./ehdot-ja-selosteet.svelte";
    import Vuosi from "./vuosi.svelte";
</script>

<style>
    .alapalkki{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #1A1D20;
        color: #CED4DA;
        height: 100px;
    }
</style>

<div class="alapalkki">
    <EhdotJaSelosteet />
    <Vuosi />
</div>