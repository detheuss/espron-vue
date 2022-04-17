<template>
  <b-navbar
    toggleable="sm"
    type="light"
    variant="fade"
    class="navbar fixed-top espron-navbar"
  >
    <b-navbar-brand>
      <router-link to="/">
        <img
          src="../assets/Logo/logo-trans-horizontal.png"
          class="espron-logo"
          alt
        />
      </router-link>
    </b-navbar-brand>
    <b-collapse
      id="nav-collapse"
      is-nav
    >
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link
            to="/#aboutUs"
            class="espron-nav-item"
          > About Us</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link
            to="/#howItWorks"
            class="espron-nav-item"
          >
            How It Works
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link
            to="/case-studies"
            class="espron-nav-item"
          >
            Case Studies
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link
            to="/contact-us"
            class="espron-nav-item"
          >
            Contact Us
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  </b-navbar>
</template>

<style scoped>
  .espron-logo {
    max-height: 3vh;
    max-width: auto;
  }
  .espron-navbar {
    background-color: rgba(255, 255, 255, 0.7);
  }
  .espron-nav-item {
    color: #797979;
  }
  .espron-nav-item:hover {
    color: #191919;
    text-decoration: none;
  }
  .navbar-toggler {
    border: none;
  }
</style>
