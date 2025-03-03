<script>
    import { getContext } from "svelte";
    import Valiotsikko from "./valiotsikko.svelte";
    import Tehtava from "./tehtava.svelte";

    const tehtavat = getContext("tehtavat");
    const filter = getContext("filter")

    // tehtavat.lista.push(tehtavat);
    let pituus = tehtavat.lista.length;
    let filteroidytTehtavat = $derived(tehtavat.lista.filter(filter.funktio))
</script>

<Valiotsikko maara={pituus} />

<ul>
    {#each filteroidytTehtavat as tehtava}
        <li class="todo">
            <Tehtava {...tehtava} />
        </li>
    {/each}
</ul>

<style>
    ul{
        text-decoration: none;
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>
