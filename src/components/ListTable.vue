<template>
  <v-container>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="users"
      >
        <template v-slot:item.open="{ item }">
          <v-btn
            :to="{ path: `/user/${item.open}` }"
            icon
          >
            <v-icon>mdi-eye</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListTable',
  data: () => ({
    headers: [
      {
        text: 'Id', align: 'start', filterable: false, value: 'id_dui',
      },
      {
        text: 'DUI', value: 'numero_dui',
      },
      { text: 'Nombre', value: 'displayName' },
      { text: 'Apellido', value: 'displayLastName' },
      { text: 'Género', value: 'genero' },
      { text: 'Edad', value: 'edad' },
      { text: 'Departamento', value: 'departamento' },
      { text: '', value: 'open' },
    ],
    usersList: [],
    usersList2: [
      {
        id: 1,
        dui: '12345678-1',
        firstName: 'Rodrigo Alejandro',
        lastName: 'Alvarenga Pérez',
        gender: 'M',
        salvadorianBy: 'Nacimiento',
        birthDate: '23/04/1998',
        expeditionDate: '25/04/2016',
        expirationDate: '25/04/2024',
        address: 'Urb x',
        town: 'Mejicanos',
        department: 'San Salvador',
      },
      {
        id: 2,
        dui: '87654321-2',
        firstName: 'Marcelo Alexander',
        lastName: 'Martínez Montenegro',
        gender: 'M',
        salvadorianBy: 'Nacimiento',
        birthDate: '26/10/1997',
        expeditionDate: '03/11/2015',
        expirationDate: '02/11/2023',
        address: 'Urb SIIIUUUUUU',
        town: 'San Salvador',
        department: 'San Salvador',
      },
    ],
  }),
  async mounted() {
    try {
      const { data } = await axios.get('https://dui-api.herokuapp.com/dui');
      this.usersList = data;
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
    users() {
      return this.usersList.map((user) => {
        const parsedUser = {
          ...user,
        };
        const parsedDate = this.parseDate(user.fecha_nacimiento);
        Reflect.set(parsedUser, 'edad', this.calculateBirth(parsedDate));
        Reflect.set(parsedUser, 'displayName', user.nombres.split(' ')[0]);
        Reflect.set(parsedUser, 'displayLastName', user.apellidos.split(' ')[0]);
        Reflect.set(parsedUser, 'open', user.id_dui);
        return parsedUser;
      });
    },
  },
  methods: {
    parseDate(date) {
      const dateParts = date.split('/');
      return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
    },
    calculateBirth(date) {
      const currentDate = new Date();
      const calculateYear = currentDate.getFullYear();
      const calculateMonth = currentDate.getMonth();
      const calculateDay = currentDate.getDate();

      const birthYear = date.getFullYear();
      const birthMonth = date.getMonth();
      const birthDay = date.getDate();

      let age = calculateYear - birthYear;
      const ageMonth = calculateMonth - birthMonth;
      const ageDay = calculateDay - birthDay;

      if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
        // eslint-disable-next-line radix
        age = parseInt(age) - 1;
      }
      return age;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
