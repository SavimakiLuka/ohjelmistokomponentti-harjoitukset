<script>
    import { getContext } from "svelte";
    import Tehtavat from "../Tehtavat/tehtavat.svelte";
    import Filter from "../Filter/filter.svelte";

    let tehtavat = getContext("tehtavat")

    let { id, teksti, valmis} = $props()

    let checkAll = (event) => {
        for (let index = 0; index < tehtavat.lista.length; index++) {
            tehtavat.lista[index].valmis = true
        }
    };
    let removeCompleted = (event) => {
        tehtavat.lista = tehtavat.lista.filter((tehtava)=>!tehtava.valmis)
    }
</script>

<div class="btn-group">
    <button type="button" onclick={checkAll} class="btn btn__primary">Check all</button>
    <button type="button" onclick={removeCompleted} class="btn btn__primary">Remove completed</button>
</div>

<style>
    .btn{
        background-color: black;
        color: white;
        border: 1px solid darkgray;
        width: 50%;
    }
    .btn-group{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 300px;
        border-top: 2px solid black;
        padding-top: 10px;
    }
</style>