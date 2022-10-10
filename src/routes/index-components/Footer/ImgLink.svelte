<script lang="ts">
  export let href: string;
  export let src: string;
  export let alt: string;
  export let marginX: boolean = false;
  export let marginBottom: boolean = false;
  export let size: 'xl' | 'lg' | 'sm' = 'lg';

  const img_small = size == 'sm';
  const img_large = size == 'lg';
  const img_xl = size == 'xl';
</script>

<a {href} target="_blank" class:margin-left={marginX} class:mb-1={marginBottom}>
  <img loading="lazy" {src} {alt} class="d-inline-block" class:img_xl class:img_large class:img_small />
</a>

<style lang="scss">
  .img_large {
    width: 100px;
  }

  .img_xl {
    width: 200px;
  }

  .margin-left {
    margin-left: 4px;
  }

  .img_small {
    width: 70px;
  }

  a:focus-visible {
    outline: 0;

    img {
      outline: 2px ridge cyan;
      border-radius: 5px;
      outline-offset: 5px;
    }
  }
</style>
