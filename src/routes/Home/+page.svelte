<script>
	import {enhance} from "$app/forms";
	let {data, form} = $props();
	let obj = $derived(form != undefined ? form : data)
 	var Cate = $state(" ");
	import {quintOut} from "svelte/easing";
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
	  <h1 class="h5">Select Joke Category :</h1>
	  <div class="catbtn-div">
		<button class:active={Cate=="Pun"} class="px-4 py-1" onclick={() => (Cate = "Pun")}>Pun</button>
		<button class:active={Cate=="Programming"}  class="px-4 py-1"  onclick={() => (Cate = "Programming")}
		  >Programming</button
		>
		<button class:active={Cate=="Miscellaneous"}  class="px-4 py-1" onclick={() => (Cate = "Miscellaneous")}
		  >Misc</button
		>
		<button class:active={Cate=="Dark"}  class="px-4 py-1" onclick={() => (Cate = "Dark")}>Dark</button>
	 
	  </div>
	   
	</div>
  
	<!-- submit and get data and refetch from server -->
	<div class="grid grid-cols-1">
	  <form method="POST" action="?/getcat" use:enhance>
		<input type="hidden" id="categ" name="categ" value={Cate} />
		<button type="submit">
		  <h3 class="h5 p-3">Submit The Category</h3>
		</button>
	  </form>
	  <form method="POST" action="?/getjoke" use:enhance>
		<button onclick={()=> Cate=" " } type="submit">
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
	  background-color: transparent !important;
	  outline: none;
	  border: none;
	  width: 60%;
	}
  
   .active {
	@apply variant-filled-warning mt-5 rounded-md;
	}
   
  
	.card {
	  overflow: auto;
	}
  </style>
  