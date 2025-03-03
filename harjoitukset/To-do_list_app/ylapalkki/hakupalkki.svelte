<script>
    import { getContext } from 'svelte';

    let tehtavanTeksti = $state("");

    let tehtavat = getContext("tehtavat")

    let handleClick = (event) => {
        let tehtava = {
            id: tehtavat.lista.lenght + 1,
            valmis: false,
            teksti: tehtavanTeksti
        } 
        tehtavat.lista.push(tehtava)
        tehtavanTeksti = ""
    }
</script>

<input type="text" id="todo-0" bind:value={tehtavanTeksti} autocomplete="off" class="input input__lg" />
<button onclick={handleClick} type="button" class="btn btn__primary btn__lg">
    Add
</button>

<style>
    .input{
        width: 370px;
        height: 30px;
        border-radius: 1px;
    }
    .btn{
        display: flex;
        width: 30%;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        margin: 10px 0;
        background-color: black;
        color: white;
    }
</style>