<script>
import { mapGetters } from 'vuex';

export default {
  name: "ServicesComp",
  computed: {
    ...mapGetters(['getServices'])
  }
};
</script>

<template>
  <div id="services" class="services container-fluid py-5">
    <div class="container">
      <div class="row py-5">
        <div class="title col-12 text-center">
          <h2 class="text-light fs-1 fw-bold">MES SERVICES</h2>
        </div>
      </div>
      <div class="row py-3 g-5">
        <div
          v-for="service in getServices"
          :key="service.name"
          class="col-12 col-xl-4 d-flex justify-content-evenly"
        >
          <div
            class="card text-center px-4 py-4 m-2 rounded-4 shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div class="card-body">
              <h3 class="card-title text-light mb-0 mt-4">
                {{ service.name }}
              </h3>
              <img
                :src="service.image"
                class="card_image my-0"
                :alt="service.txtAlt"
              />
              <p class="card-text mb-4 text-light">{{ service.desc }}</p>
              <a href="#contact" class="text-light my-4 btn btn-primary shadow">{{
                service.btnText
              }}</a>
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