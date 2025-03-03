<script>
    import { getContext } from "svelte";

    const tehtavat = getContext("tehtavat");

    let { id, valmis } = $props();

    let handleClick = () => tehtavat.lista.find((tehtava) => tehtava.id === id).valmis = !valmis
</script>


<input
type="checkbox"
onclick={handleClick}
id="todo-1"
checked={valmis}
autocomplete="off"
class="todo-text"
/>

<style>
    .todo-text{
        border: 1px solid black;
        display: flex;
    }
</style>
