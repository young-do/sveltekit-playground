<script lang="ts">
  import { onMount } from 'svelte';
  import '../stories/test-a';
  import '../css/a.css';

  onMount(() => {
    console.log('page a');
  });
</script>

page a 입니다.

<div class="w-20px h-20px bg-blue" />
