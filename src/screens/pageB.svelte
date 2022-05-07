<script lang="ts">
  import { onMount } from 'svelte';
  import '../stories/test-b';
  import '../css/b.css';

  onMount(() => {
    console.log('page b');
  });
</script>

page b 입니다.

<div class="w-10px h-10px bg-#000" />
