<script>
    import { getContext } from "svelte";

    let tehtavat = getContext("tehtavat");

    let { id, teksti, valmis, muokataanko, tehtavanTeksti } = $props();

    let muokkaaminen = (event) => {
        console.log("muokkaaminen", id, muokataanko.muokataanko)
        muokataanko.muokataanko = !muokataanko.muokataanko;
    };

    let poistaminen = (event) => {
        console.log("poistaminen", id)
        tehtavat.lista = tehtavat.lista.filter((tehtava) => tehtava.id !== id);
    };

    let tallentaminen = (event) => {
        tehtavat.lista[id - 1].teksti = tehtavanTeksti
    }
</script>

{#if muokataanko.muokataanko}
    <div class="btn-group">
        <button
            class="btn btn__primary todo-edit"
            onclick={muokkaaminen}
            type="submit"
        >
            Cancel
        </button>
        <button class="todo-save" onclick={tallentaminen} type="button">
            Save
        </button>
    </div>
{:else}
    <div class="btn-group">
        <button
            class="btn btn__primary todo-edit"
            onclick={muokkaaminen}
            type="submit"
        >
            Edit
        </button>
        <button class="todo-cancel" onclick={poistaminen} type="button">
            Delete
        </button>
    </div>
{/if}

<style>
    .btn-group {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin: 10px 0;
    }
    span {
        display: none;
    }
    .todo-cancel {
        background-color: red;
        border: none;
        color: white;
        width: 140px;
        margin-left: 5px;
    }
    .todo-save {
        background-color: black;
        border: none;
        color: white;
        width: 140px;
        margin-left: 5px;
    }
    .todo-edit {
        background-color: white;
        border: 1px solid black;
        color: black;
        width: 140px;
        margin-right: 5px;
    }
    .todo-cancel:hover {
        background-color: darkred;
    }
    .todo-save:hover {
        background-color: gray;
    }
    .todo-edit:hover {
        background-color: gray;
    }
</style>
