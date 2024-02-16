<script>
  import "../app.postcss";
  import "../App.css";
  import {LightSwitch} from "@skeletonlabs/skeleton";
  import theme from "$lib/stores";
  import {browser} from "$app/environment";
</script>

{#if browser}
  <body data-theme={$theme} class="h-screen">
    <div class="container-body">
      <button
        class="variant-glass-primary p-5"
        on:click={() => theme.set("crimson")}
      >
        crimson
      </button>
      <button
        class="variant-glass-secondary p-5"
        on:click={() => theme.set("skeleton")}
      >
        skeleton
      </button>
      <button
        class="variant-glass-success p-5"
        on:click={() => theme.set("modern")}
      >
        modern
      </button>
      <button
        class="variant-glass-error p-5"
        on:click={() => theme.set("gold-nouveau")}
      >
        Gold
      </button>
    </div>
    <LightSwitch class="togglee  mt-5 mb-5 " />
    <slot />
  </body>
{/if}

<style>
  .container-body {
    @apply grid grid-cols-4 ms-0 text-center justify-center items-center;
  }
</style>
