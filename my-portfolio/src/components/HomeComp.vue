<script>
export default {
        name: "HomeComp"
    }
</script>

<template>
    <div class="home container-fluid h-100 py-5">
        <div class="row gy-5 gy-lg-0 my-lg-5 h-100 align-items-center justify-content-lg-center">
            <div class="col-12 col-lg-6">
                <h1 class="fw-bold text-center text-lg-start"> Hello ! C'est Jean-Jérôme, je suis Développeur Web freelance.</h1>
                <h2 class="fw-light text-center text-lg-start">Créons ensemble un projet à l'image de votre entreprise.</h2>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-primary btn-lg text-light col-8 col-lg-4 shadow mt-5" type="button">En savoir plus</button>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <img class="img-fluid" src="./icons/profil.png" alt="Photo de Jean-Jérome Jornat">
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
</style>