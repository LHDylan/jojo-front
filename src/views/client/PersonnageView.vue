<template>
  <v-container>
    <v-row>
      <sidebar />

      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <!--  -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import sidebar from '@/components/client/SidebarView.vue';

export default {
  name: 'PersonnageView',

  components: {
    sidebar,
  },
};
</script>
