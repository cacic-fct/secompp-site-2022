<script lang="ts">
  export let href: string;
  export let src: string;
  export let alt: string;
  export let marginX: boolean = false;
  export let marginBottom: boolean = false;
  export let size: 'lg' | 'sm' = 'lg';

  const img_small = size == 'sm';
  const img_large = !img_small;
</script>

<a {href} target="_blank">
  <img
    loading="lazy"
    {src}
    {alt}
    class="d-inline-block"
    class:img_large
    class:img_small
    class:mx-3={marginX}
    class:mb-1={marginBottom} />
</a>

<style>
  .img_large {
    width: 100px;
  }

  .img_small {
    width: 70px;
  }
</style>
