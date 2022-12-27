<script>
export default {
  name: "ServicesComp",
  data: () => ({
    services: [
      {
        name: "Site Vitrine",
        img: "",
        desc: "",
      },
      {
        name: "Site E-Commerce",
        img: "",
        desc: "",
      },
      {
        name: "WebMastering",
        img: "",
        desc: "",
      },
    ],
  }),
};
</script>

<template>
  <div class="services container-fluid py-5">
    <div class="container">
      <div class="row py-5">
        <div class="title col-12 text-center">
          <h2 class="text-light fs-1 fw-bold">MES SERVICES</h2>
        </div>
      </div>
      <div class="row py-3 g-5">
        <div
          v-for="service in services"
          :key="service.name"
          class="col-12 col-lg-4 d-flex justify-content-evenly"
        >
          <div class="card text-center px-4 py-4 m-2 rounded-4 shadow-lg">
            <div class="card-body">
              <h3 class="card-title text-light my-4">{{ service.name }}</h3>
              <p class="card-text text-light">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-outline-light">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.services {
  background-image: url("./icons/servBg.jpg");
  background-size: cover;
  background-position-y: bottom;
  min-height: 100vh;
}
.card {
  border: 1px solid transparent;

  backdrop-filter: blur(0.5rem);
  background-color: hsla(0, 0%, 88%, 0.1);

  border-top-color: rgba(225, 225, 225, 0.5);
  border-left-color: rgba(225, 225, 225, 0.5);
  border-bottom-color: rgba(225, 225, 225, 0.1);
  border-right-color: rgba(225, 225, 225, 0.1);

}
</style>