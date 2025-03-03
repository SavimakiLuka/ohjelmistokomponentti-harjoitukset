<script>
    import { setContext } from "svelte";
    import Ylapalkki from "../ylapalkki/ylapalkki.svelte";
    import Filter from "../Filter/filter.svelte";
    import Tehtavat from "../Tehtavat/tehtavat.svelte";
    import Lisatoiminnot from "../Lisaa-toimintoja/lisatoiminnot.svelte"

    let tehtavat = $state({
        lista: [
            { id: 1, teksti: "New name for 'Create a Svelte starter app'", valmis: true},
            { id: 2, teksti: "Create your first component", valmis: false},
            { id: 3, teksti: "Complete the rest of the tutorial", valmis: false}
        ]
    })

    let filter = $state({
        funktio: () => true,
        valittuFunktio: "kaikki"
    })

    setContext("filter", filter)
    setContext("tehtavat", tehtavat)
</script>

<title>To Do List App</title>

<div class="sivu">
    
    <Ylapalkki />
    <Filter />
    <Tehtavat />
    <Lisatoiminnot />
</div>

<style>
    .sivu{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    :global(button){
        width: 12%;
        height: 30px;
    }
    :global(ul){
        text-decoration: none;
    }
</style>

