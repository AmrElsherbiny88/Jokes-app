<script>
  import {enhance} from "$app/forms";
  export let data;
  export let form;
  $: obj = form != undefined ? form : data;

  let Cate = "programming";
</script>

<div class="text-center">
  <h1 class="h2 mt-5 mb-4">Category: {obj.joke.category}</h1>
  <h1 class="h3">{obj.joke.setup || obj.joke.joke}</h1>
  <h2>{obj.joke.delivery || ""}</h2>

  <form method="POST" action="?/getcat" use:enhance>
    <input type="hidden" id="categ" name="categ" value={Cate} />
    <button type="submit">
      <h3 class="h3 p-3">Categorie</h3>
    </button>
  </form>

  <form method="POST" action="?/getjoke" use:enhance>
    <button type="submit">
      <h3 class="h3 p-3">Get Another Joke</h3>
    </button>
  </form>

  <button on:click={() => (Cate = "Programming")}>
    <h3 class="h3 p-3">programming</h3>
  </button>

  <button on:click={() => (Cate = "Pun")}>
    <h3 class="h3 p-3">Pun</h3>
  </button>
</div>

<style>
  button {
    @apply variant-filled-error mt-5 rounded-md;
  }
</style>
