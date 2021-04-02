<template>
  <b-navbar toggleable="lg" type="light" variant="info">
    <b-navbar-brand href="/">My Blog</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Top</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>