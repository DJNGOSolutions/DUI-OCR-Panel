<template>
  <v-container>
    <div class=">w-full >flex >flex-col">
      <div class=">font-extrabold >text-3xl >mt-2 >mb-5">Información de: {{ userInfo.nombres }} {{ userInfo.apellidos}}</div>
      <div class=">flex >flex-row >flex-wrap >text-lg">
        <!--Second Row-->
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Número de DUI: </span>{{ userInfo.numero_dui }}</div>
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Género: </span>{{ userInfo.genero }}</div>
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Fecha de nacimiento: </span>{{ userInfo.fecha_nacimiento }}</div>
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Lugar de nacimiento: </span>{{ userInfo.lugar_nacimiento }}</div>
        <!--Second Row-->
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Lugar de expedición: </span>{{ userInfo.lugar_expedicion }}</div>
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Fecha de expedción: </span>{{ userInfo.fecha_expedicion }}</div>
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Fecha de expiración: </span>{{ userInfo.fecha_expiracion }}</div>
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Salvadoreño por: </span>{{ userInfo.salvadorenio_por }}</div>
        <!--Third Row-->
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Dirección: </span>{{ userInfo.residencia }}</div>
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Municipio: </span>{{ userInfo.municipio }}</div>
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Departamento: </span>{{ userInfo.departamento }}</div>
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Código de zona / ZIP: </span>{{ userInfo.codigo_zona }}</div>
        <!--Fourth Row-->
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Trámite: </span>{{ userInfo.tramite }}</div>
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Estado familiar: </span>{{ userInfo.estado_familiar }}</div>
        <div class=">w-3/12 >my-4"><span class=">font-extrabold">Profesión: </span>{{ userInfo.profesion }}</div>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'User',
  data: () => ({
    userInfo: {},
  }),
  async mounted() {
    try {
      const { data } = await axios.get(`https://dui-api.herokuapp.com/dui?id_dui=eq.${this.$route.params.id}`);
      [this.userInfo] = data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
