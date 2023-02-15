import { createStore } from 'vuex'
import img1 from '../assets/vitrine.png'
import img2 from '../assets/ecom.png'
import img3 from '../assets/webmast.png'

export default createStore({
  state: {
    services: [
      {
        name: "Site Vitrine",
        image: img1,
        txtAlt: "image site vitrine",
        desc: "Le site vitirne est un excellent moyen de mettre en lumière vos produits ou votre service.",
        btnText: "Je mets en avant mon produit",
      },
      {
        name: "Site E-Commerce",
        image: img2,
        txtAlt: "image e-commerce",
        desc: "Les boutiques en ligne sont devenus un moyen efficace d'augmenter sont chiffre d'affaire et convertir de nouveaux clients.",
        btnText: "Je crée mon business en ligne",
      },
      {
        name: "Webmastering",
        image: img3,
        txtAlt: "image webmaster",
        desc: "La vie d'un site web passe aussi par des mises à jour régulières de sa structure et de ses fonctionnalités.",
        btnText: "Je garde un site moderne",
      },
    ],
  },
  getters: {
    getServices: state => state.services
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
