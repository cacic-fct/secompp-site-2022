<script>
  import Schedule from './index-components/schedule.svelte';
  import Nav from './index-components/nav.svelte';
  import Header from './index-components/header.svelte';
  import About from './index-components/about.svelte';
  import Info from './index-components/info.svelte';
  import Footer from './index-components/footer.svelte';
  import Faq from './index-components/faq.svelte';
  import '$lib/styles/global.scss';
</script>

<Nav />
<Header />

<section id="sobre">
  <About />
</section>
<section id="programacao">
  <Schedule />
</section>
<section id="informacoes">
  <Info />
</section>
<section id="duvidas">
  <Faq />
</section>
<Footer />
