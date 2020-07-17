<template>
  <v-container>
    <div class = "stepper">
      <ul class="steps">
        <li @click="selectStep(1)" :class="step1 ? 'active-step':'unactive-step'">Consideraciones</li>
        <li @click="selectStep(2)" :class="step2 ? 'active-step':'unactive-step'">Carga la imagen</li>
        <li @click="selectStep(3)" :class="step3 ? 'active-step':'unactive-step'">Corrección</li>
        <li @click="selectStep(4)" :class="step4 ? 'active-step':'unactive-step'">¡Listo!</li>
      </ul>
      <div id="content-area">
        <div :class="step1 ? 'selected':'unselected'">
          <div class="step">
            <div>
              <ul>
                <li>1. Las imágenes que subas deben de estar guardadas en uno de los siguientes formatos: JPG, JPEG o PNG.</li>
                <li>2. Toma una página de papel y con plumón grueso delinea los bordes de tu DUI en la página y toma la foto de tu DUI posicionado en la silueta que acabas de formar.</li>
                <li>3. Toma la foto de modo que el efecto producido por las tiras reflectivas de tu DUI no sean visibles.</li>
                <li>4. Asegurate que la resolución de la imagen permita entender con facilidad el contenido de esta.</li>
              </ul>
            </div>
            <img src="@/assets/img/Step1.png">
          </div>
        </div>
        <div :class="step2 ? 'selected':'unselected'">
          <div class="step">
            <div class=">flex >flex-col">
              <p class="loader-title">Carga aquí la imagen de tu DUI</p>
              <input type="file" class="inputfile" name="file" @change="onFileSelected" ref="fileInput">
              <label for="file" @click="$refs.fileInput.click()">CHOOSE YOUR FILES</label>
            </div>
            <img src="@/assets/img/Step2.png">
          </div>
        </div>
        <div :class="step3 ? 'selected':'unselected'">
          <div class="step step3">
            <div>
              <p>El resultado del OCR fue el siguiente, siente en la libertad de hacer los ajustes que creas necesarios.</p>
              <p><b>Nota:</b> Una vez de click en el botón <i>SIGUIENTE</i> estará aceptando guardar estos datos en la base de datos.</p>
              <div class="editing">
                <input type="text" placeholder="Apellidos">
                <input type="text" placeholder="Nombres">
                <input type="text" placeholder="Género">
                <input type="text" placeholder="Salvadoreño por">
                <input type="text" placeholder="Fecha de nacimiento">
                <input type="text" placeholder="Lugar de nacimiento">
                <input type="text" placeholder="Fecha de expedición">
                <input type="text" placeholder="Lugar de expedición">
                <input type="text" placeholder="Fecha de expiración">
                <input type="text" placeholder="Número de DUI">
                <input type="text" placeholder="Lugar de residencia">
                <input type="text" placeholder="Trámite">
                <input type="text" placeholder="Municipio">
                <input type="text" placeholder="Departamento">
                <input type="text" placeholder="Código de zona">
                <input type="text" placeholder="Nombre de la madre">
                <input type="text" placeholder="Nombre del padre">
                <input type="text" placeholder="Nombre del cónyuge">
                <input type="text" placeholder="Estado familiar">
                <input type="text" placeholder="Tipo de sangre">
                <input type="text" placeholder="Profesión">
              </div>
            </div>
            <img src="@/assets/img/Step3.png">
          </div>
        </div>
        <div :class="step4 ? 'selected':'unselected'">
          <div class="step">
            <div>
              <p>¡Tu resultado ya ha sido almacenado en la base de datos!</p>
            </div>
            <img src="@/assets/img/Step4.png">
          </div>
        </div>
      </div>
      <div class="buttons">
        <button @click="clickPrevious" :class="step1 ? 'unactive-button':'active-button'">ANTERIOR</button>
        <button @click="clickNext" :class="step4 ? 'unactive-button':'active-button'">SIGUIENTE</button>
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
    selectedFile: null,
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

    onFileSelected(event) {
      const [b] = event.target.files;
      this.selectedFile = b;
    },
  },
};
</script>

<style scoped>
  button {
    outline: none;
  }
</style>
