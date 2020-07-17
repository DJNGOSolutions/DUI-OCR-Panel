# DUI-OCR

Este repositorio contiene una Web App que facilita el manejo del envío de archivos y la recepción de datos de un OCR, en este caso esta orientado a DUIs, cuyos caracteres son reconocidos por un programa Python que utiliza _OpenCV_ y _Tesseract_; y maneja una base de datos dummy.

## Procesamientos realizados del proyecto
El proyecto se divide en dos procesamientos principalmente.
1. El envío de imágenes para el escaneo de DUIs y recepción de los caracteres reconocidos en las imágenes.
2. La confirmación, correción y almacenamiento de los datos.

## Preparativos para la ejecución del proyecto

### Setup
```
yarn install
```

### _Compiles_ y _hot-reloads_ para desarrollo
```
yarn serve
```

### _Compiles_ y _minifies_ para producción
```
yarn build
```

### Para correción de archivos
```
yarn lint
```

### Personalización de configuración
Para personalizar tu configuración de Vue.js puede visitar el siguiente [link](https://cli.vuejs.org/config/).
