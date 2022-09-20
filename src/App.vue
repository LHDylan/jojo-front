<template>
  <v-app id="inspire">
    <navbar />
    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
    <footerbar />
  </v-app>
</template>

<script>
import navbar from '@/components/NavbarView.vue';
import footerbar from '@/components/FooterView.vue';

export default {

  name: 'App',
  components: {
    navbar,
    footerbar,
  },
  data: () => ({
  }),
};
</script>
