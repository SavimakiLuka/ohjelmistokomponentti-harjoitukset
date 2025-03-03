<script>
    import Palkinto from "./palkinto.svelte";

    let palkinnot = [
        {kuva: "Menestyjät", url: "#"},
        {kuva: "Vuoden Paras", url: "#"}
    ]
</script>

{#each palkinnot as palkinto}
    <div class="palkinto" url={palkinto.url}>{palkinto.kuva}</div>
{/each}

<style>
    .palkinto{
        color: #C9D1D4;
    }
</style>