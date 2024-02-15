<script>
	import '../app.postcss';
	import "../App.css"
	import { LightSwitch } from '@skeletonlabs/skeleton';
	let theme = "gold-nouveau"
</script>

<style>
	.container-body{
		@apply grid grid-cols-4 ms-0 text-center justify-center items-center;
	}
</style>

<body data-theme={theme} class="container h-screen   " >
	<div class="container-body" >
		
		<button
		class="variant-glass-primary p-5"
		 on:click={()=> theme = "crimson"}  
		>
		    crimson
		</button>
		<button
		class="variant-glass-secondary p-5"
		 on:click={()=> theme = "skeleton"}  
		>
		skeleton
 
		</button>
		<button
		class="variant-glass-success p-5"
		 on:click={()=> theme = "modern"}  
		>
		modern
		</button>
		<button
		class="variant-glass-error p-5"
		 on:click={()=> theme = "gold-nouveau"}  
		>
		Gold 
		</button>
	 </div>
	 <LightSwitch class="togglee  mt-5 mb-5 " />
	 <slot  />
</body>

