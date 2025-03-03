<script>
    import Editori from "./editori.svelte";
    import Perusnakyma from "./perusnakyma.svelte";

    let {id, teksti, valmis} = $props();

    let muokataanko = $state({muokataanko:false});

</script>

<div class="stack-small">
    <form class="stack-small">
        {#if muokataanko.muokataanko}
        <Editori id={id} teksti={teksti} valmis={valmis} muokataanko={muokataanko}/>
        {:else}
        <Perusnakyma id={id} teksti={teksti} valmis={valmis} muokataanko={muokataanko}/>
        {/if}
    </form>
</div>

<style>
    
</style>

