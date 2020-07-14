<template>
  <div class="about">
    <div class="about-container">
      <div class="titulo">
        <span>Tecnologías utilizadas</span>
      </div>
      <ul>
        <li>
          <div>
            Reconocimiento de caracteres de imágenes
            <div class="ocr-images1">
              <a href="https://opencv.org/"><img src="@/assets/img/OpenCV.png"></a>
              <a href="https://www.python.org/"><img src="@/assets/img/Python.png"></a>
              <a href="https://opensource.google/projects/tesseract"><img src="@/assets/img/Tesseract.png"></a>
            </div>
          </div>
        </li>
        <li>
          <div>
            Aplicación web
            <div class="ocr-images2">
              <span></span>
              <a href="https://vuejs.org/"><img src="@/assets/img/Vue.png"></a>
              <span></span>
            </div>
          </div>
        </li>
        <li>
          <div>
            Base de datos
            <div class="ocr-images3">
              <span></span>
              <a href="https://www.postgresql.org/"><img src="@/assets/img/PostgreSQL.png"></a>
              <span></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul > li > div {
  font-weight: 700;
  text-transform: uppercase;
}
</style>
