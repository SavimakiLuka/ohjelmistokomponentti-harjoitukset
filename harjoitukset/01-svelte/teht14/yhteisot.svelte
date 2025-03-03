<script>
    import Yhteiso from "./yhteiso.svelte";

    let { yhteisot } = $props();

    yhteisot = [
        { nimi: "facebook", url: "facebook.com" },
        { nimi: "instagram", url: "ig.com" },
        { nimi: "twitter", url: "x.com" },
        { nimi: "x", url: "x.com" },
        { nimi: "youtube", url: "youtube.com" },
        { nimi: "tiktok", url: "tiktok.com" },
        { nimi: "linkedin", url: "in.com" },
    ];
</script>

<div class="yhteisot">
    {#each [...new Map(yhteisot.map(item => [item.url, item])).values()] as yhteiso}
        <Yhteiso nimi={yhteiso.nimi} url={yhteiso.url} />
    {/each}
</div>

<style>
    .yhteisot {
        display: flex;
        flex-direction: row;
    }
</style>
