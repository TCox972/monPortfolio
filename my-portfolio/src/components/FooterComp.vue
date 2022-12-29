<script>
export default {
  name: "FooterComp",
};
</script>

<template>
  <div class="container-fluid bg-dark">
    <div class="container footer p-4">
      <div class="row p-2">
        <div class="col d-flex justify-content-center">
          <a href="">
            <i class="bi-linkedin fs-3 p-4 text-primary"></i>
          </a>
          <a href="">
            <i class="bi-instagram fs-3 p-4 text-primary"></i>
          </a>
        </div>
      </div>
      <div class="row p-2">
        <div class="col">
          <p class="text-light text-center">Développeur web freelance basé en Martinique, je réalise des sites vitrines, e-commerce et des applications web. <br> Discutons de vos projets !</p>
        </div>
      </div>
      <div class="legal row p-2 d-flex justify-content-center">
        <div class="col text-end">
          <a class="text-decoration-none" href="">Mentions Légales</a>
        </div>
        <div class="col text-start">
          <a class="text-decoration-none" href="">C.G.U.</a>
        </div>
      </div>
      <div class="row p-2">
        <p class="text-light text-center">COPYRIGHT ©
        {{ new Date().getFullYear() }} — <strong>JEAN-JEROME JORNAT</strong></p>
      </div>
    </div>
  </div>
</template>

<style>
.legal{
  border-bottom: 1px gray solid;
}
</style>