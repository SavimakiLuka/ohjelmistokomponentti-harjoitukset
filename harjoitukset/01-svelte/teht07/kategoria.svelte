<script>
    let { nimi, url } = $props();
    import KategoriaPudotusvalikkoSisalto from "../teht25/kategoria-pudotusvalikko-sisalto.svelte";
</script>

<style>
    button{
        border: none;
        background-color: #272B30;
        color: #ffffff;
        height: 40px;
        width: 100%;
        padding: 0 17px;
    }

    .kategoriat{
        display: block;
        flex-direction: row;
        font-size: 16px;
    }

    .kategoria:first-letter {
        text-transform: uppercase;
    }

    span {
        position: absolute;
        display: none;
        background-color: #E5E5E5;
        color: black;
        top: 100px;
        right: 65px;
        z-index: 999;
    }

    .kategoriat:hover span {
        display: flex;
    }

    .kategoriat:hover button{
        background-color: #E5E5E5;
        color: #EE7045;
        transition: color .1s ease-in .2s, background-color .1s ease-in .2s;
    }
</style>


<div class="kategoriat">
    <button class="kategoria" href={url}>{nimi}</button>
    <span>
        <KategoriaPudotusvalikkoSisalto />
    </span>
</div>

