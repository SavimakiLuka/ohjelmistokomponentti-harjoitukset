<script>
    import { getContext } from "svelte";
    // let { maara="0" } = $props()

    const tehtavat = getContext("tehtavat");
    // console.log("tehtava:", { tehtavat });

    // tehtavat.push(tehtavat);
    let yhteensa = $derived(tehtavat.lista.length);

    // let valmiina = 0
    // tehtavat.map((tehtava) => {
    //     if (tehtava.valmis) {
    //         valmiina++;
    //     }
    // })

    // let valmiit = tehtavat.filter((tehtava) => tehtava.valmis)
    // let valmiina = valmiit.length

    let valmiina = $derived(tehtavat.lista.filter((tehtava) => tehtava.valmis).length)

</script>


<h2 id="list-heading">{valmiina} out of {yhteensa} items completed</h2>