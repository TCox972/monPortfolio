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
          <a href="https://www.linkedin.com/in/jean-jérôme-jornat-57215658/" target="_blank">
            <i class="bi-linkedin fs-3 p-4 text-primary"></i>
          </a>
          <!-- <a href="https://www.instagram.com/iam_jeanjrm/" target="_blank">
            <i class="bi-instagram fs-3 p-4 text-primary"></i>
          </a> -->
        </div>
      </div>
      <div class="row p-2">
        <div class="col">
          <p class="text-light text-center">
            Développeur web freelance basé en Martinique, je réalise des sites
            vitrines, e-commerce et des applications web. <br />
            Discutons de vos projets !
          </p>
        </div>
      </div>
      <div class="legal row p-2 d-flex justify-content-center">
        <div class="col-12 col-lg-2 text-center">
          <a
            class="text-decoration-none"
            data-bs-toggle="modal"
            data-bs-target="#mentionModal"
            href=""
            >Mentions Légales
          </a>
        </div>
        <div
          class="modal fade"
          id="mentionModal"
          tabindex="-1"
          aria-labelledby="mentionModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="mentionModalLabel">
                  Mentions légales.
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <br />
                <h2>Site Internet</h2>
                <br />
                Nom du site : Jean-Jerome Jornat - Développeur Freelance <br />
                URL complète : https://www.jeanjrm-jornat.com <br />
                <br />
                <h2>Editeur du site</h2>
                <br />

                M. Jean-Jérôme Jornat <br />
                Numéro du SIRET : 91241683100010 <br />
                Code NAF : Programmation informatique (6201Z) <br />
                Responsable éditorial : Jean-Jérôme Jornat <br />
                Non inscrit au Registre du Commerce et des Sociétés <br />
                Siège social : 32 B rue Vincent Placoly, 97233 Schoecher<br />
                Email : contact@jeanjrm-jornat.com<br />
                <br />
                <h2>Hébergement</h2>
                <br />

                Hébergeur : HOSTINGER <br />
                Adresse : Hostinger International Ltd. 61 rue Lordou Vironos,
                6023<br />
                Site web : https://www.hostinger.fr/
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-2 text-center">
          <a
            class="text-decoration-none"
            data-bs-toggle="modal"
            data-bs-target="#cguModal"
            href=""
            >C.G.U.</a
          >
        </div>
        <div
          class="modal fade"
          id="cguModal"
          tabindex="-1"
          aria-labelledby="cguModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="cguModalLabel">
                  Conditions générales d'utilisation.
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <br />
                <h2>Limitation contractuelle sur les données</h2>
                <br />
                Les informations contenues sur ce site sont aussi précises que
                possible et le site remis à jour à différentes périodes de
                l’année, mais peut toutefois contenir des inexactitudes ou des
                omissions. Si vous constatez une lacune, erreur ou ce qui parait
                être un dysfonctionnement, merci de bien vouloir le signaler par
                email, à l’adresse contact@jeanjrm-jornat.com, en décrivant le
                problème de la manière la plus précise possible (page posant
                problème, type d’ordinateur et de navigateur utilisé, …). Tout
                contenu téléchargé se fait aux risques et périls de
                l'utilisateur et sous sa seule responsabilité. En conséquence,
                ne saurait être tenu responsable d'un quelconque dommage subi
                par l'ordinateur de l'utilisateur ou d'une quelconque perte de
                données consécutives au téléchargement. De plus, l’utilisateur
                du site s’engage à accéder au site en utilisant un matériel
                récent, ne contenant pas de virus et avec un navigateur de
                dernière génération mis-à-jour Les liens hypertextes mis en
                place dans le cadre du présent site internet en direction
                d'autres ressources présentes sur le réseau Internet ne
                sauraient engager la responsabilité de Jean-Jérôme Jornat.<br />
                <br />
                <h2>Propriété intellectuelle</h2>
                <br />
                Tout le contenu du présent sur le site www.jeanjrm-jornat.com,
                incluant, de façon non limitative, les graphismes, images,
                textes, vidéos, animations, sons, logos, gifs et icônes ainsi
                que leur mise en forme sont la propriété exclusive de la société
                à l'exception des marques, logos ou contenus appartenant à
                d'autres sociétés partenaires ou auteurs. Toute reproduction,
                distribution, modification, adaptation, retransmission ou
                publication, même partielle, de ces différents éléments est
                strictement interdite sans l'accord exprès par écrit de Jean-Jerome Jornat.
                Cette représentation ou reproduction, par quelque
                procédé que ce soit, constitue une contrefaçon sanctionnée par
                les articles L.335-2 et suivants du Code de la propriété
                intellectuelle. Le non-respect de cette interdiction constitue
                une contrefaçon pouvant engager la responsabilité civile et
                pénale du contrefacteur. En outre, les propriétaires des
                Contenus copiés pourraient intenter une action en justice à
                votre encontre.<br />
                <br />
                <h2>Déclaration à la CNIL</h2>
                <br />
                Conformément à la loi 78-17 du 6 janvier 1978 (modifié par la
                loi 2004-801 du 6 août 2004 relative à la protection des
                personnes physiques à l’égard des traitements de données à
                caractère personnel) relative à l’informatique, aux fichiers et
                aux libertés, ce site a fait l’objet d’une déclaration auprès de
                la Commission nationale de l’informatique et des libertés
                (www.cnil.fr)<br />
                <br />
                <h2>Litiges</h2>
                <br />
                Les présentes conditions d’utilisation du site
                www.jeanjrm-jornat.com sont régies par les lois françaises et toute
                contestation ou litiges qui pourraient naitre de
                l’interprétation ou de l’exécution de celles-ci seront de la
                compétence exclusive des tribunaux dont dépend le siège sociale
                de la société. La langue de référence, pour le règlement de
                contentieux éventuels, est le français.<br />
                <br />
                <h2>Données personnelles</h2>
                <br />
                De manière générale, vous n’êtes pas tenu de nous communiquer
                vos données personnelles lorsque vous visitez notre site
                Internet. Cependant, ce principe comporte certaines exceptions.
                En effet, pour certains services proposés par notre site, vous
                pouvez être amenés à nous communiquer certaines données telles
                que : votre nom, votre fonction, le nom de votre société, votre
                adresse électronique, et votre numéro de téléphone. Tel est le
                cas lorsque vous remplissez le formulaire qui vous est proposé
                en ligne, dans la rubrique « contact ». Dans tous les cas, vous
                pouvez refuser de fournir vos données personnelles. Dans ce cas,
                vous ne pourrez pas utiliser les services du site, notamment
                celui de solliciter des renseignements sur notre société, ou de
                recevoir les lettres d’information. Enfin, nous pouvons
                collecter de manière automatique certaines informations vous
                concernant lors d’une simple navigation sur notre site Internet,
                notamment : des informations concernant l’utilisation de notre
                site, comme les zones que vous visitez et les services auxquels
                vous accédez, votre adresse IP, le type de votre navigateur, vos
                temps d'accès. De telles informations sont utilisées
                exclusivement à des fins de statistiques internes, de manière à
                améliorer la qualité des services qui vous sont proposés. Les
                bases de données sont protégées par les dispositions de la loi
                du 1er juillet 1998 transposant la directive 96/9 du 11 mars
                1996 relative à la protection juridique des bases de données.<br />
                <br />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row p-2">
        <p class="text-light text-center">
          COPYRIGHT © {{ new Date().getFullYear() }} —
          <strong>JEAN-JEROME JORNAT</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.legal {
  border-bottom: 1px gray solid;
}
</style>