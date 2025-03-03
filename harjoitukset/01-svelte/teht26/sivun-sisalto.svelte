<script>
    import Haku from "../teht08/haku.svelte";
    import Etusivu from "../teht35/etusivu.svelte";
    import Hakusivu from "../teht36/hakusivu.svelte";
    import { getContext } from 'svelte';

    const hakusanaMap = getContext('haettu_asia')
    console.log("hakusana:", hakusanaMap)
</script>

<div class="sisalto">
    {#if hakusanaMap.hakusana === "" || hakusanaMap.hakusana === undefined}
    <Etusivu />
    {:else}
    <Hakusivu hakusana={hakusanaMap.hakusana}/>
    {/if}
</div>