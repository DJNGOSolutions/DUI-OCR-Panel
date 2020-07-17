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
              <input
                id="file"
                type="file"
                class="inputfile"
                name="file"
                ref="fileInput"
                @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
              >
              <label @click="$refs.fileInput.click()">CHOOSE YOUR FILES</label>
            </div>
            <img src="@/assets/img/Step2.png">
          </div>
        </div>
        <div :class="step3 ? 'selected':'unselected'">
          <div class="step step3">
            <div>
              <v-dialog v-model="dialog" persistent max-width="700">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    text
                    class=">mb-3"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span>Dev Options</span>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline"></v-card-title>
                  <v-card-text>
                    <div v-if="uploadedFiles && uploadedFiles.length > 0" class=">flex >flex-col">
                      <div class=">flex >my-2">
                        <div class=">font-extrabold >text-lg">Eficiencia: </div>
                        <div class=">text-lg">{{ uploadedFiles[0].confidence.toFixed(2) }}%</div>
                      </div>
                      <div class=">flex >flex-col >my-2 >text-lg">
                        <div class=">font-extrabold">Texto que devuelve el OCR:</div>
                        <div>{{ uploadedFiles[0].text }}</div>
                      </div>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">Cerrar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <p>El resultado del OCR fue el siguiente, siente en la libertad de hacer los ajustes que creas necesarios.</p>
              <p><b>Nota:</b> Una vez de click en el botón <i>SIGUIENTE</i> estará aceptando guardar estos datos en la base de datos.</p>
              <div class="editing">
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Apellidos</span>
                  <input v-model="form.apellidos" type="text" placeholder="Apellidos">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Nombres</span>
                  <input v-model="form.nombres" type="text" placeholder="Nombres">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Género</span>
                  <input v-model="form.genero" type="text" placeholder="Género">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Salvadoreño por</span>
                  <input v-model="form.salvadorenio_por" type="text" placeholder="Salvadoreño por">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Fecha de nacimiento</span>
                  <input v-model="form.fecha_nacimiento" type="text" placeholder="Fecha de nacimiento">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Lugar de nacimiento</span>
                  <input v-model="form.lugar_nacimiento" type="text" placeholder="Lugar de nacimiento">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Fecha de expedición</span>
                  <input v-model="form.fecha_expedicion" type="text" placeholder="Fecha de expedición">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Lugar de expedición</span>
                  <input v-model="form.lugar_expedicion" type="text" placeholder="Lugar de expedición">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Fecha de expiración</span>
                  <input v-model="form.fecha_expiracion" type="text" placeholder="Fecha de expiración">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Número de DUI</span>
                  <input v-model="form.numero_dui" type="text" placeholder="Número de DUI">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Lugar de residencia</span>
                  <input v-model="form.residencia" type="text" placeholder="Lugar de residencia">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Trámite</span>
                  <input v-model="form.tramite" type="text" placeholder="Trámite">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Municipio</span>
                  <input v-model="form.municipio" type="text" placeholder="Municipio">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Departamento</span>
                  <input v-model="form.departamento" type="text" placeholder="Departamento">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Código de zona</span>
                  <input v-model="form.codigo_zona" type="text" placeholder="Código de zona">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Estado familiar</span>
                  <input v-model="form.estado_familiar" type="text" placeholder="Estado familiar">
                </label>
                <label class=">flex >flex-col >px-4">
                  <span class=">font-bold >ml-2 >my-2">Profesión</span>
                  <input v-model="form.profesion" type="text" placeholder="Profesión">
                </label>
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
        <button @click="clickNext" :class="step4 || nextDisabled ? 'unactive-button':'active-button'">SIGUIENTE</button>
      </div>
    </div>
    <v-overlay :value="isFileUploading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-overlay :value="savingLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import axios from 'axios';

const STATUS_INITIAL = 0; const STATUS_SAVING = 1; const STATUS_SUCCESS = 2; const
  STATUS_FAILED = 3;

export default {
  name: 'Stepper',
  data: () => ({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    dialog: false,
    selectedFile: null,
    uploadedFiles: [],
    uploadError: null,
    uploadFieldName: 'file',
    isFileUploading: false,
    savingLoading: false,
    form: {
      apellidos: '',
      nombres: '',
      genero: '',
      salvadorenio_por: '',
      fecha_nacimiento: '',
      lugar_nacimiento: '',
      fecha_expiracion: '',
      lugar_expedicion: '',
      fecha_expedicion: '',
      numero_dui: '',
      residencia: '',
      tramite: '',
      municipio: '',
      departamento: '',
      codigo_zona: '',
      estado_familiar: '',
      profesion: '',
    },
  }),
  computed: {
    nextDisabled() {
      return this.step2 && this.uploadedFiles && this.uploadedFiles.length === 0;
    },
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    },
  },
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

    async clickNext() {
      if (this.step1 === true) {
        this.step1 = false;
        this.step2 = true;
      } else if (this.step2 === true) {
        this.step2 = false;
        this.step3 = true;
      } else if (this.step3 === true) {
        await this.saveForm();
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
    async saveForm() {
      try {
        this.savingLoading = true;
        await axios.post('https://dui-api.herokuapp.com/dui', this.form);
        this.savingLoading = false;
        this.step3 = false;
        this.step4 = true;
      } catch (e) {
        console.log(e);
      } finally {
        this.savingLoading = false;
      }
    },
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;
      this.isFileUploading = true;
      this.upload(formData)
        .then((x) => {
          this.uploadedFiles = [].concat(x);
          if (x && Object.entries(x).length > 0) {
            this.form.fecha_nacimiento = x.data.birthDate;
            this.form.fecha_expiracion = x.data.expirationData;
            this.form.nombres = x.data.firstName;
            this.form.genero = x.data.gender;
            this.form.fecha_expedicion = x.data.issuanceDate;
            this.form.lugar_expedicion = x.data.issuancePlace;
            this.form.apellidos = x.data.lastName;
            this.form.lugar_nacimiento = x.data.placeOfBirth;
            this.form.salvadorenio_por = x.data.salvadorian;
            this.form.numero_dui = x.data.uid;
          }
          this.currentStatus = STATUS_SUCCESS;
          this.isFileUploading = false;
        })
        .catch((err) => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
          this.isFileUploading = false;
        });
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      // append the files to FormData
      Array
        .from(Array(fileList.length).keys())
        // eslint-disable-next-line array-callback-return
        .map((x) => {
          formData.append(fieldName, fileList[x], fileList[x].name);
        });

      // save it
      this.save(formData);
    },
    async upload(formData) {
      // eslint-disable-next-line no-useless-catch
      try {
        const { data } = await axios.post('http://localhost:5002/upload', formData);
        return data;
      } catch (e) {
        throw e;
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
