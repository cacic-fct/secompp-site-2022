<script>
  import '$lib/styles/global.scss';
  import About from './index-components/about.svelte';
  import Faq from './index-components/faq.svelte';
  import Footer from './index-components/Footer/Footer.svelte';
  import Header from './index-components/header.svelte';
  import Info from './index-components/info.svelte';
  import Nav from './index-components/nav.svelte';
  import Schedule from './index-components/Schedule/Schedule.svelte';
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
