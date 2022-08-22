<script lang="ts">
  import logo from '$lib/img/secompp22-logo.svg';

  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
  } from 'sveltestrap';

  let isOpen = false;

  function handleUpdate(event: any) {
    isOpen = event.detail.isOpen;
  }
</script>

<Navbar color="dark" container dark expand="md" class="sticky-top">
  <NavbarBrand href="#">
    <div style="height: 32px; width: 150px">
      <img src={logo} style="width: 150px" alt="Logo da SECOMPP 2022" />
    </div>
  </NavbarBrand>
  <NavbarToggler
    aria-label="Botão do menu"
    class="border border-0"
    on:click={() => (isOpen = !isOpen)} />

  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink href="#sobre">Sobre</NavLink>
      </NavItem>

      <NavItem>
        <NavLink href="#programacao">Programação</NavLink>
      </NavItem>

      <NavItem>
        <NavLink href="#duvidas">Dúvidas</NavLink>
      </NavItem>

      <NavItem>
        <NavLink href="#footer">Apoio</NavLink>
      </NavItem>

      <NavItem>
        <Button class="nav-subscribe-btn" outline>Inscrever-se</Button>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>

<style lang="sass">
	:global(.nav-subscribe-btn) 
		@media (min-width: 768px) 
			margin-left: 8px
</style>
