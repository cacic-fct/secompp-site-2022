<script>
  import '$lib/styles/global.scss';
  import About from './index-components/about.svelte';
  import Faq from './index-components/faq.svelte';
  import Footer from './index-components/Footer/Footer.svelte';
  import Header from './index-components/header.svelte';
  import Info from './index-components/info.svelte';
  import Nav from './index-components/nav.svelte';
  import Schedule5B from './index-components/Schedule/Schedule5B.svelte';
  import Schedule6B from './index-components/Schedule/Schedule6B.svelte';
  import Schedule8B from './index-components/Schedule/Schedule8B.svelte';
  import SchedulePalestra from './index-components/Schedule/SchedulePalestra.svelte';
</script>

<Nav />
<Header />

<section id="sobre">
  <About />
</section>
<section id="programacao">
  <Schedule5B />
  <Schedule6B/>
  <Schedule8B/>
  <SchedulePalestra/>
</section>
<section id="informacoes">
  <Info />
</section>
<section id="duvidas">
  <Faq />
</section>
<Footer />
