<script>
export default {
  name: "ContactComp",
};
</script>

<template>
  <div id="contact" class="contact container py-5">
    <div class="row">
      <div class="title mt-5 col-12 text-center">
          <h2 class="text-primary fs-1 fw-bold">CONTACTEZ MOI</h2>
        </div>
    </div>
    <div class="row py-5 my-3">
      <div class="form col-12 col-xl-6 p-4">
        <div class="container py-5 mt-5">
          <div class="row">
            <div class="mb-3">
              <label for="inputFirstname" class="form-label">Prénom</label>
              <input type="text" class="form-control mb-3" id="inputFirstname" />
            </div>
          </div>
          <div class="row">
            <div class="mb-3">
              <label for="inputLasttname" class="form-label">Nom</label>
              <input type="text" class="form-control mb-3" id="inputLastname" />
            </div>
          </div>
          <div class="row">
            <div class="mb-3">
              <label for="inputEmail" class="form-label">Adresse email</label>
              <input type="email" class="form-control mb-3" id="inputEmail" />
            </div>
          </div>
          <div class="row">
            <div class="mb-3">
              <label for="textareaMessage" class="form-label">Message</label>
              <textarea
                class="form-control mb-3"
                id="textareaMessage"
                rows="6"
              ></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-12 d-flex justify-content-center mt-5">
              <button type="submit" class="btn btn-primary text-light btn-lg col-12 col-lg-6 mb-3">
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-6">test</div>
    </div>
  </div>
</template>

<style scoped>


.form {
  background-image: url("./icons/lettre.png");
  background-size: cover;
}
</style>