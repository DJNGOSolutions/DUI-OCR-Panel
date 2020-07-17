<template>
  <div>
    <v-app-bar
      app
      elevate-on-scroll
      color="primary"
      dark
    >
      <v-btn icon @click="drawer = true">
        <v-icon dark>mdi-menu</v-icon>
      </v-btn>
      <div class="d-flex align-center">
        <v-img
          class="shrink mt-1 >cursor-pointer"
          contain
          min-width="100"
          :src="require('@/assets/img/logo.png')"
          width="100"
          @click="$router.push('/')"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
        class="mr-2"
      >
        <span>Sobre nosotros</span>
      </v-btn>
      <v-btn
        href="https://github.com/DJNGOSolutions/DUI-OCR-Panel"
        target="_blank"
        text
      >
        <span class="mr-2">Manual de uso</span>
        <!--<v-icon>mdi-open-in-new</v-icon>-->
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list
        nav
        dense
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    drawer: false,
    items: [
      { title: 'Home', icon: 'mdi-view-dashboard', route: '/' },
      { title: 'Listado', icon: 'mdi-image', route: '/list' },
      { title: 'About', icon: 'mdi-help-box', route: '/about' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
  span {
    font-family: Lato;
  }
</style>
