<script>
    import Kategoria from "./kategoria.svelte";
</script>

<style>
    ul{
        list-style: none;
    }
    .kategoriat{    
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
    }
    @media(max-width: 1200px){
        .kategoriat{
            display: none;
        }
    }
</style>

<ul class="kategoriat">
    <li class="kategoria">
        <Kategoria nimi="tietokoneet" URL="#" />
    </li>
    <li class="kategoria">
        <Kategoria nimi="komponentit" URL="#" />
    </li>
    <li class="kategoria">
        <Kategoria nimi="oheislaitteet" URL="#" />
    </li>
    <li class="kategoria">
        <Kategoria nimi="pelaaminen" URL="#" />
    </li>
    <li class="kategoria">
        <Kategoria nimi="sim racing" URL="#" />
    </li>
    <li class="kategoria">
        <Kategoria nimi="verkkotuotteet" URL="#" />
    </li>
    <li class="kategoria">
        <Kategoria nimi="tarvikkeet" URL="#" />
    </li>
    <li class="kategoria">
        <Kategoria nimi="erikoistuotteet" URL="#" />
    </li>
    <li class="kategoria">
        <Kategoria nimi="ohjelmistot" URL="#" />
    </li>
    <li class="kategoria">
        <Kategoria nimi="palvelut" URL="#" />
    </li>
    <li class="kategoria">
        <Kategoria nimi="kampanjat" URL="#" />
    </li>
</ul>