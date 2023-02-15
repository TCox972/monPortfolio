
<script>
import Swal from 'sweetalert2';

export default {
  name: "ContactComp",
  data: () => ({
    organisationName: "",
    contactName: "",
    email: "",
    message: "",
    isActive: false,
  }),
  methods: {
    checkValidity() {
      var error
      const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

      if (!this.organisationName || !this.contactName || !this.email || !this.message) {
        error = "Fill all the inputs"
      }
      
      if (emailRegex.test(this.email) == false) {
        error = "email doesn't match"
      }

      if (error) {
        this.isActive=true
        return false
      } else {
        this.sendEmail()
        this.resetForm()
      }
    },
    sendEmail() {
      Email.send({
        SecureToken: "66f7968f-970d-4e4d-a957-0867485c9388",
        To: "contact@jeanjrm-jornat.com",
        From: "jornat.jerome@gmail.com",
        Subject: "Demande d'infos par : " + this.organisationName,
        Body:
          "Vous avez une nouvelle demande de contact :" +
          "." +
          "<br> Organisation : " +
          this.organisationName +
          "<br> Nom du contact : " +
          this.contactName +
          "<br> Email : " +
          this.email +
          "<br> Message : " +
          this.message,
      }).then(() =>
        Swal.fire({
          icon: "success",
          title: "A Bientot",
          text: "Message envoyé avec succès",
          showConfirmButton: false,
          timer: 1500
        })
      );
    },
    resetForm() {
      this.organisationName = ""
      this.contactName = ""
      this.email = ""
      this.message = ""
      this.isActive = false
    }
  },
};

</script>

<template>
  <div id="contact" class="contact container py-4">
    <div class="row">
      <div class="title mt-5 col-12 text-center">
        <img src="./icons/logo.png" alt="Logo" width="88" height="88" />
      </div>
    </div>
    <div class="row py-5 my-3">
      <div class="form col-12 col-xl-6 p-4">
        <form
          class="container py-5 mt-5 needs-validation"
          :class="{ 'was-validated': isActive }"
          novalidate
        >
          <div class="row">
            <div class="mb-3">
              <label for="inputFirstname" class="form-label"
                >Nom de l'organisation</label
              >
              <input
                type="text"
                class="form-control mb-3"
                id="inputFirstname"
                v-model="organisationName"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="mb-3">
              <label for="inputLasttname" class="form-label"
                >Nom du contact</label
              >
              <input
                type="text"
                class="form-control mb-3"
                id="inputLastname"
                v-model="contactName"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="mb-3">
              <label for="inputEmail" class="form-label">Adresse email</label>
              <input
                type="email"
                class="form-control mb-3"
                id="inputEmail"
                v-model="email"
                required
              />
              <div class="invalid-feedback">Entrer une adresse mail valide</div>
            </div>
          </div>
          <div class="row">
            <div class="mb-3">
              <label for="textareaMessage" class="form-label">Message</label>
              <textarea
                class="form-control mb-3"
                id="textareaMessage"
                rows="6"
                v-model="message"
                required
              ></textarea>
              <div class="invalid-feedback">Entrer un message</div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 d-flex justify-content-center mt-5">
              <div
                class="
                  btn btn-primary
                  shadow
                  text-light
                  btn-lg
                  col-12 col-lg-6
                  mb-3
                "
                @click="checkValidity()"
              >
                Envoyer
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-12 col-xl-6">
        <div class="row px-5">
          <div class="col-12">
            <h2 class="title text-primary fw-bold pb-4">Contactez-moi</h2>
            <h3 class="fs-1 fw-light">Créons votre projet ensemble !</h3>
            <p class="fs-3 text-primary fw-light">
              Remplissez les champs à gauche de votre écran et envoyez moi un
              message. <br />
              A très vite !
            </p>
          </div>
        </div>
        <div class="row pt-3 px-5">
          <div class="col-12">
            <h3 class="fs-2 fw-bold">Appelez moi directement :</h3>
            <a
              href="tel:+596696301933"
              class="fs-1 fw-bold text-decoration-none"
              >+596 6 96 30 19 33</a
            >
          </div>
          <div class="col-12">
            <h3 class="fs-2 fw-bold">Ou par mail :</h3>
            <a
              href="mailto:contact@jeanjrm-jornat.com"
              class="fs-1 fw-bold text-decoration-none"
              >contact@jeanjrm-jornat.com</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form {
  background-image: url("./icons/lettre.png");
  background-size: cover;
}

.title {
  font-size: 64px;
}
</style>
