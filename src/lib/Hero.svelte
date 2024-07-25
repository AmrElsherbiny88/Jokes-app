<script>
  import { goto } from "$app/navigation";
</script>
<h1 class='h1 mt-5'>Did your manager make you feel bad today?</h1>
<button 
class='variant-filled-error mt-5 rounded-md'
onclick={()=> goto("/Home")} 
>    <h3 class='h3 p-3 '>So click here to get a joke</h3>
</button>