<script>
    import Muokkaaminen from "./muokkaaminen.svelte";

    let {id, teksti, valmis, muokataanko} = $props();

    let tehtavanTeksti = $state("");
</script>

<div class="nimen__muokkaaminen">
    <label for="todo-1" class="todo-label">
        {teksti}
    </label>
    <input type="text" bind:value={tehtavanTeksti}/>
</div>
<Muokkaaminen muokataanko={muokataanko} id={id} teksti={teksti} tehtavanTeksti={tehtavanTeksti}/>

<style>
    .nimen__muokkaaminen{
        display: flex;
        flex-direction: column;
    }
</style>