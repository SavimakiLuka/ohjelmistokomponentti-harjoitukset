<script>
    import { setContext } from 'svelte';

    import Header from "../teht09/header.svelte";
    import SivunSisalto from "../teht26/sivun-sisalto.svelte";
    import Alapalkki from "../teht24/alapalkki.svelte";

    let hakusanaMap = $state({ hakusana: "" })
    setContext("haettu_asia", hakusanaMap)
</script>

<Header />
<SivunSisalto />
<Alapalkki />
