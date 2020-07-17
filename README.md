# DUI-OCR

Este repositorio contiene una Web App que facilita el manejo del envío de archivos y la recepción de datos de un OCR, en este caso esta orientado a DUIs, cuyos caracteres son reconocidos por un programa Python que utiliza _OpenCV_ y _Tesseract_; y maneja una base de datos dummy.

## Repositorios asociados
- OCR: https://github.com/DJNGOSolutions/simple-ocr-opencv/tree/master
- Despliegue de RESTful API: https://github.com/DJNGOSolutions/PostgREST-DUI_API

## Procesamientos realizados del proyecto
El proyecto se divide en dos procesamientos principalmente.
1. El envío de imágenes para el escaneo de DUIs y recepción de los caracteres reconocidos en las imágenes.
2. La confirmación, correción y almacenamiento de los datos.

## Funcionalidades de la aplicación
1. La principal funcionalidad de esta aplicación es la de enviar a una API un archivo que contenga la imagen de un DUI para reconocer con OCR los caracteres que posee y estos ser extraídos.
2. Una funcionalidad agregada para garantizar la integridad de los datos es la _edición de datos retornados por la API_, de modo que si el OCR no detectó a la perfección los caracteres del DUI, el usuario puede modificar los datos antes de ser enviados a la base de datos.
3. Los usuarios pueden guardar y consultar los datos de los DUIs ya escaneados.

## Motivaciones para el desarrollo de la aplicación
Muchas entidades en El Salvador necesitan tener almacenados los datos de los DUIs de sus clientes o interesados, de modo que esto llega a tomar cierto tiempo si es realizado manualmente y ya no se diga si se trata de bastantes DUIs. De alguna forma, el conjunto de proyectos busca optimizar los tiempos de espera realizados en esta actividad, de modo que, tanto el tiempo de la entidad como el del cliente o interesado, se haga valer y no sea desperdiciado innecesariamente.
Esta aplicación solo es una base para todas esas entidades que la lleguen a necesaitar y sea adapatada a las necesidades de cada uno.

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
