<script lang="ts">
  import { onMount } from 'svelte';

  let Route: any;

  const calc = async (type: string) => {
    if (type === '') {
      Route = await (await import('../screens/pageA.svelte')).default;
    } else {
      Route = await (await import('../screens/pageB.svelte')).default;
    }
  };

  onMount(() => {
    const pathname = location.pathname;
    const userAgent = navigator.userAgent;

    console.log(pathname, userAgent);

    calc(pathname.includes('a') ? '' : 'no');
  });
</script>

<svelte:component this={Route} />
