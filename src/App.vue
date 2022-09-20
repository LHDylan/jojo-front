<template>
  <v-app id="inspire">
    <navbar />
    <v-main>
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

<style>
/* header */
.v-application .white {
  background-color: #3b4c68 !important
}

/* main */
.v-main__wrap {
  /* background-color: #ededed !important */
  background-color: #010100 !important
}

/* footer */
footer {
  background-color: #3b4c68 !important
}
</style>
