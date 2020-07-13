<template>
  <v-container>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="users"
      >
        <template v-slot:item.open>
          <v-btn icon>
            <v-icon>mdi-eye</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ListTable',
  data: () => ({
    headers: [
      {
        text: 'ID', align: 'start', filterable: false, value: 'id',
      },
      { text: 'DUI', value: 'dui' },
      { text: 'Nombre', value: 'displayName' },
      { text: 'Apellido', value: 'displayLastName' },
      { text: 'Género', value: 'gender' },
      { text: 'Edad', value: 'age' },
      { text: 'Departamento', value: 'department' },
      { text: '', value: 'open' },
    ],
    usersList: [
      {
        id: 1,
        dui: '05695779-2',
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
        dui: '05610209-6',
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
  computed: {
    users() {
      return this.usersList.map((user) => {
        const parsedUser = {
          ...user,
        };
        const parsedDate = this.parseDate(user.birthDate);
        Reflect.set(parsedUser, 'age', this.calculateBirth(parsedDate));
        Reflect.set(parsedUser, 'displayName', user.firstName.split(' ')[0]);
        Reflect.set(parsedUser, 'displayLastName', user.lastName.split(' ')[0]);
        Reflect.set(parsedUser, 'open', user.id);
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
