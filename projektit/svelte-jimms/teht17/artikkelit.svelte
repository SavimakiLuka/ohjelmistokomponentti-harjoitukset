
<script>
  import Artikkeli from "./artikkeli.svelte";


  const artikkelit = [
    { url: "oppaat.com", nimi: "jimm's oppaat" },
    { url: "blogi.com", nimi: "jimm's blogi" }
  ];
</script>

<div class="artikkelit">
  {#each artikkelit as artikkeli}
    <Artikkeli url={artikkeli.url} nimi={artikkeli.nimi} />
  {/each}
</div>

<style>
  .artikkelit{
    display: flex;
    flex-direction: column;
  }
</style>