<script>
    import Ostoskori from "./ostoskori.svelte";
    import Kirjautuminen from "./kirjautuminen.svelte";
    import Ostoskoriinfo from "./ostoskoriinfo.svelte";

    let ostoskori_ikoni = "./src/harjoitukset/ikonit/ostoskori-ikoni.svg"
</script>

<style>
    ul{
        list-style: none;
    }

    .toiminnot{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 0;
        margin: 0;
    }

    .toiminto{
        display: flex;
        padding: 0;
        margin: 0;
    }
</style>

<ul class="toiminnot">
    <li class="toiminto">
        <Kirjautuminen nimi="Kirjaudu / Luo tili" url="#" />
    </li>
    <li class="toiminto">
        <Ostoskoriinfo nimi={ostoskori_ikoni} url="#"/>
    </li>
</ul>

