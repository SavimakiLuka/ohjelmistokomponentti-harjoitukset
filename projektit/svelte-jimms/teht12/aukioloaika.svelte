<script>
    let { paivat, auki } = $props()

    import Paivat from "./paivat.svelte"
    import Auki from "./auki.svelte";

    auki = ([
        ["11:00", "19:00"],
        ["10:00", "16:00"],
        ["12:00", "20:00"]
    ])
</script>

<style>

</style>

{#each auki as [avain, arvo]}
    <div>
        {avain}: {arvo}
    </div>
{/each}

