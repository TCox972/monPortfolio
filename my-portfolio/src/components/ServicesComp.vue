<script>
export default {
  name: "ServicesComp",
  data: () => ({
    services: [
      {
        name: "Site Vitrine",
        icon: "/src/components/icons/vitrine.png",
        txtAlt: "image site vitrine",
        desc: "Le site vitirne est un excellent moyen de mettre en lumière vos produits et votre entreprise. En m'adaptant à votre projet, je serai en mesure de vous délivrer un site internet entièrement personnalisé, à la hauteur des standards de votre entreprise.",
        btnText: "Je mets en avant mon produit",
      },
      {
        name: "Site E-Commerce",
        icon: "/src/components/icons/ecom.png",
        txtAlt: "image e-commerce",
        desc: "Les boutiques en ligne sont devenus un moyen efficace d'augmenter sont chiffre d'affaire et de convertir et fidéliser de nouveaux clients. En vous accompagnant, je vous mettrai à disposotion un outil efficace et personnalisé.",
        btnText: "Je crée mon business en ligne",
      },
      {
        name: "Webmastering",
        icon: "/src/components/icons/webmast.png",
        txtAlt: "image webmaster",
        desc: "La vie d'un site web ou d'une application passe aussi par des mises à jour régulières de sa structure et de ses fonctionnalités. Il est essentiel d'effectuer un suivi précis des technologies pour le bien de votre business et de votre activité.",
        btnText: "Je garde un site moderne",
      },
    ],
  }),
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
          v-for="service in services"
          :key="service.name"
          class="col-12 col-xl-4 d-flex justify-content-evenly"
        >
          <div class="card text-center px-4 py-4 m-2 rounded-4 shadow-lg">
            <div class="card-body">
              <h3 class="card-title text-light mb-0 mt-4">
                {{ service.name }}
              </h3>
              <img :src="service.icon" class="card_image my-0" :alt="service.txtAlt" />
              <p class="card-text mb-4 text-light">{{ service.desc }}</p>
              <a href="#" class="text-light my-4 btn btn-primary shadow">{{
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

.card_image{
}
</style>