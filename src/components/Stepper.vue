<template>
  <v-container>
    <div class = "stepper">
      <ul class="steps">
        <li @click="selectStep(1)" :class="step1 ? 'active-step':'unactive-step'">Consideraciones</li>
        <li @click="selectStep(2)" :class="step2 ? 'active-step':'unactive-step'">Carga la imagen</li>
        <li @click="selectStep(3)" :class="step3 ? 'active-step':'unactive-step'">Procesando</li>
        <li @click="selectStep(4)" :class="step4 ? 'active-step':'unactive-step'">¡Listo!</li>
      </ul>
      <div id="content-area">
        <div :class="step1 ? 'selected':'unselected'">
          <div class="step">
            <div>
              <ul>
                <li>Las imágenes que subas deben de estar guardadas en uno de los siguientes formatos: JPG, JPEG o PNG.</li>
                <li>Descarga e imprime el siguiente documento.</li>
                <li>Toma la foto de modo que solo sea visible la parte negra alrededor del DUI.</li>
                <li>Si no te es posible imprimir el documento puedes hacerlo por tu cuenta.</li>
                <li>Las medidas las siguientes:</li>
                <ul>
                  <li>Medidas externa:</li>
                  <li>Medidas internas:</li>
                </ul>
                <li>Asegurate que la resolución de la imagen permita entender con facilidad el contenido de esta.</li>
              </ul>
            </div>
            <img src="@/assets/img/Step1.png">
          </div>
        </div>
        <div :class="step2 ? 'selected':'unselected'">
          <div class="step">
            <div>
            </div>
            <img src="@/assets/img/Step2.png">
          </div>
        </div>
        <div :class="step3 ? 'selected':'unselected'">
          <div class="step">
            <div>
              <ul>
                <li>Las imágenes que subas deben de estar guardadas en uno de los siguientes formatos: JPG, JPEG o PNG.</li>
                <li>Descarga e imprime el siguiente documento.</li>
                <li>Toma la foto de modo que solo sea visible la parte negra alrededor del DUI.</li>
                <li>Si no te es posible imprimir el documento puedes hacerlo por tu cuenta.</li>
                <li>Las medidas las siguientes:</li>
                <ul>
                  <li>Medidas externa:</li>
                  <li>Medidas internas:</li>
                </ul>
                <li>Asegurate que la resolución de la imagen permita entender con facilidad el contenido de esta.</li>
              </ul>
            </div>
            <img src="@/assets/img/Step3.png">
          </div>
        </div>
        <div :class="step4 ? 'selected':'unselected'">
          <div class="step">
            <div>
              <ul>
                <li>Las imágenes que subas deben de estar guardadas en uno de los siguientes formatos: JPG, JPEG o PNG.</li>
                <li>Descarga e imprime el siguiente documento.</li>
                <li>Toma la foto de modo que solo sea visible la parte negra alrededor del DUI.</li>
                <li>Si no te es posible imprimir el documento puedes hacerlo por tu cuenta.</li>
                <li>Las medidas las siguientes:</li>
                <ul>
                  <li>Medidas externa:</li>
                  <li>Medidas internas:</li>
                </ul>
                <li>Asegurate que la resolución de la imagen permita entender con facilidad el contenido de esta.</li>
              </ul>
            </div>
            <img src="@/assets/img/Step4.png">
          </div>
        </div>
      </div>
      <div class="buttons">
        <button @click="clickPrevious" :class="step1 ? 'unactive-button':'active-button'">PREVIOUS</button>
        <button @click="clickNext" :class="step4 ? 'unactive-button':'active-button'">NEXT</button>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Stepper',
  data: () => ({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
  }),
  methods: {
    selectStep(numberStep) {
      this.step1 = false;
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;
      if (numberStep === 1) {
        this.step1 = true;
      } else if (numberStep === 2) {
        this.step2 = true;
      } else if (numberStep === 3) {
        this.step3 = true;
      } else if (numberStep === 4) {
        this.step4 = true;
      }
    },

    clickNext() {
      if (this.step1 === true) {
        this.step1 = false;
        this.step2 = true;
      } else if (this.step2 === true) {
        this.step2 = false;
        this.step3 = true;
      } else if (this.step3 === true) {
        this.step3 = false;
        this.step4 = true;
      }
    },

    clickPrevious() {
      if (this.step4 === true) {
        this.step4 = false;
        this.step3 = true;
      } else if (this.step3 === true) {
        this.step3 = false;
        this.step2 = true;
      } else if (this.step2 === true) {
        this.step2 = false;
        this.step1 = true;
      }
    },
  },
};
</script>

<style scoped>
  button {
    outline: none;
  }
</style>
