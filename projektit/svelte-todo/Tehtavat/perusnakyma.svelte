<script>
    import Muokkaaminen from "./muokkaaminen.svelte";
    import ValmisCheckbox from "./valmis-checkbox.svelte";
    
    let {id, teksti, valmis, muokataanko} = $props();
</script>

<div class="form-group">
    <label for="todo-1" class="todo-label">
        {teksti}
    </label>
    <ValmisCheckbox id={id} valmis={valmis} />
    <Muokkaaminen muokataanko={muokataanko} id={id}/>
</div>

<style>

</style>
