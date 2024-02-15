<script>
  import {enhance} from "$app/forms";
  export let data;
  export let form;
  $: obj = form != undefined ? form : data;
  let Cate = "programming";
  import {fly} from "svelte/transition";
  import {quintOut} from "svelte/easing";
  import {fade} from "svelte/transition";
  import {scale} from "svelte/transition";
  import {slide} from "svelte/transition";
</script>

<!-- joke display -->
<div class="text-center">
  {#key obj}
    <div
      transition:slide={{delay: 0, duration: 950, easing: quintOut, axis: "y"}}
      class="p-5"
    >
      <div class="card card-hover">
        <header class="card-header">
          <h1 class="h2">Category: {obj.joke.category}</h1>
        </header>
        <section class="p-4 h3">
          {obj.joke.setup || obj.joke.joke} <br />
          <span class="h6">{obj.joke.delivery || ""}</span>
        </section>
      </div>
    </div>
  {/key}

  <!-- categorie options -->
  <div class="mt-2">
    <h1 class="h5">Select Joke Categorie :</h1>
    <select class="select text-center ms-3" size="4" value="Programming">
      <option value="Pun" on:click={() => (Cate = "Pun")}>Pun</option>
      <option value="Programming" on:click={() => (Cate = "Programming")}
        >Programming</option
      >
      <option value="Miscellaneous" on:click={() => (Cate = "Miscellaneous")}
        >Misc</option
      >
      <option value="Dark" on:click={() => (Cate = "Dark")}>Dark</option>
    </select>
  </div>

  <!-- submit and get data and refetch from server -->
  <div class="grid grid-cols-1">
    <form method="POST" action="?/getcat" use:enhance>
      <input type="hidden" id="categ" name="categ" value={Cate} />
      <button type="submit">
        <h3 class="h5 p-3">Submit The Categorie</h3>
      </button>
    </form>
    <form method="POST" action="?/getjoke" use:enhance>
      <button type="submit">
        <h3 class="h5 p-3">Get Another Random Joke</h3>
      </button>
    </form>
  </div>
</div>

<style>
  button {
    @apply variant-filled-error mt-5 rounded-md;
  }
  .select {
    background-color: transparent;

    outline: none;
    border: none;
    width: 60%;
  }

  option {
    @apply variant-filled-error mt-5 rounded-md;
  }

  .card {
    overflow: auto;
  }
</style>
