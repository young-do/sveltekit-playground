<script lang="ts">
  import { onMount } from 'svelte';

  export let pathname = '';
  export let userAgent = '';

  let Route: any;

  const calc = async (type: string) => {
    if (type === '') {
      Route = await (await import('../screens/pageA.svelte')).default;
    } else {
      Route = await (await import('../screens/pageB.svelte')).default;
    }
  };

  onMount(() => {
    // console.log(pathname, userAgent);
    calc('a');
  });
</script>

<svelte:component this={Route} />
