<script>
export default {
        name: "HomeComp"
    }
</script>

<template>
    <div id="home" class="home container-fluid h-100 py-5">
        <div class="row gy-5 gy-lg-0 my-lg-5 h-100 align-items-center justify-content-lg-center">
            <div class="col-12 col-lg-6">
                <h1 class="fw-bold text-center text-lg-start" data-aos="fade-right" data-aos-duration="1500"> Hello ! C'est Jean-Jérôme, je suis Développeur Web freelance.</h1>
                <h2 class="fw-light text-center text-lg-start" data-aos="fade-right" data-aos-duration="1500">Créons ensemble un projet à l'image de votre entreprise.</h2>
                <a href="#services" class="d-flex justify-content-center text-decoration-none">
                    <button class="btn btn-primary btn-lg text-light col-8 col-lg-4 shadow mt-5 scale-up-center" type="button">En savoir plus</button>
                </a>
            </div>
            <div class="col-12 col-lg-4" data-aos="fade" data-aos-duration="1500">
                <img class="img-fluid" src="./icons/profil.png" alt="Photo de Jean-Jérome Jornat Développeur Web Freelance">
            </div>
        </div>
    </div>
</template>

<style scoped>
.home{
    background-image: url("./icons/homeBg.jpg");
    background-size: cover;
    min-height: 100vh;
}
.scale-up-center:hover {
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
 @-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
}

</style>