<script>
  import { getContext } from "svelte";

  const filter = getContext("filter");
  // const tehtavat = getContext("tehtavat");

  // let { id, teksti, valmis } = $props()

  const filteriFunktioNäytäKaikki = () => true;
  const filteriFunktioNäytäAktiiviset = (tehtava) => !tehtava.valmis;
  const filteriFunktioNäytäValmiit = (tehtava) => tehtava.valmis;

  let handleShowAll = (event) => {
    filter.funktio = filteriFunktioNäytäKaikki;
  };

  let handleShowActive = (event) => {
    filter.funktio = filteriFunktioNäytäAktiiviset;
  };

  let handleShowCompleted = (event) => {
    filter.funktio = filteriFunktioNäytäValmiit;
  };

  // let tulos = ""

  // let showActive = (event) => {
  //   if(tehtavat.valmis){
  //     tulos = "ok"
  //   }
  // }
</script>

<!-- <div>tulos: {tulos}</div> -->
<div class="filters btn-group stack-exception">
  <button class="btn toggle-btn" onclick={handleShowAll} aria-pressed="true">
    <span class="visually-hidden">Show</span>
    <span>All</span>
    <span class="visually-hidden">tasks</span>
  </button>
  <button
    class="btn toggle-btn"
    onclick={handleShowActive}
    aria-pressed="false"
  >
    <span class="visually-hidden">Show</span>
    <span>Active</span>
    <span class="visually-hidden">tasks</span>
  </button>
  <button
    class="btn toggle-btn"
    onclick={handleShowCompleted}
    aria-pressed="false"
  >
    <span class="visually-hidden">Show</span>
    <span>Completed</span>
    <span class="visually-hidden">tasks</span>
  </button>
</div>

<style>
  .stack-exception{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 25%;
  }
  .btn{
    display: flex;
    width: 40%;
    align-items: center;
    justify-content: center;
    margin: 10px 5px;
  }
  .visually-hidden{
    display: none;
  }
</style>
