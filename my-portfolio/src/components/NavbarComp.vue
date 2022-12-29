<script>
export default {
  name: "NavbarComp",
};
</script>

<template>
  <nav
    class="
      navbar
      sticky-top
      navbar-expand-lg
      shadow-sm
      border-bottom border-primary
    "
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="./icons/logo.png" alt="Logo" width="56" height="56" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item mx-4">
            <a class="nav-link link-success fw-bold text-primary" aria-current="page" href="#"
              >ACCUEIL</a
            >
          </li>
          <li class="nav-item mx-4">
            <a class="nav-link link-success fw-bold text-primary" href="#services">SERVICES</a>
          </li>
          <li class="nav-item mx-4">
            <a class="nav-link link-success fw-bold text-primary" href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar{
  background-image: url("./icons/navBg.jpg");
  background-size: cover;
}
</style>
