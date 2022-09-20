<template>
  <v-container>
    <navigationView />
    <contentView />
  </v-container>
</template>

<script>
import navigationView from '@/components/admin/AdminNavigationView.vue';
import contentView from '@/components/admin/AdminContentView.vue';

export default {

  name: 'DashboardView',
  components: {
    navigationView,
    contentView,
  },
  data: () => ({
  }),
};
</script>
