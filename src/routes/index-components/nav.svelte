<script lang="ts">
  import logo from '$lib/img/secompp22-logo.svg';

  import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'sveltestrap';

  let isOpen = false;
</script>

<Navbar color="dark" container dark expand="md" class="sticky-top">
  <NavbarBrand href="#">
    <img src={logo} class="py-1" width="150" alt="Logo da SECOMPP 2022" />
  </NavbarBrand>
  <NavbarToggler aria-label="Botão do menu" class="border border-0" on:click={() => (isOpen = !isOpen)} />

  <Collapse {isOpen} navbar expand="md">
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
    </Nav>
  </Collapse>
</Navbar>

<style lang="scss">
  :global(.nav-subscribe-btn) {
    @media (min-width: 768px) {
      margin-left: 8px;
    }
  }
</style>
