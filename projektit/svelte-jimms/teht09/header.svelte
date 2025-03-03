<script>
    import Ylarivi from "../teht08/ylarivi.svelte";
    import Alarivi from "../teht07/alarivi.svelte";
</script>

<style>

    .ylapalkki{
        display: flex;
        flex-direction: column;
        background-color: #272B30;
        color: #ffffff;
        position: sticky;
        top: 0;
        z-index: 1000;
        margin: 0 auto;
    }
    @media(max-width: 768px){
        .ylapalkki{
            position: unset;
        }
    }
</style>

<div class="ylapalkki">
    <Ylarivi />
    <Alarivi />
</div>