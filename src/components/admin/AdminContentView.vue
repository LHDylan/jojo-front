<template>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col v-for="number in numbers" :key="number" cols="12">
        <cardView />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cardView from '@/components/admin/AdminCardView.vue';
import axios from 'axios';

const VUE_APP_JOJO_API = 'http://localhost:8000/api/personnages';

export default {
  name: 'AdminContentView',
  components: {
    cardView,
  },
  data: () => ({
    // personnages: [],
    numbers: 10,
  }),
  computed: {
  },
  methods: {
    async fetchAllPersonnages() {
      const AllPersonnages = await axios.get(VUE_APP_JOJO_API);
      console.log(AllPersonnages);
      this.personnages = AllPersonnages.data;
    },
  },
  async created() {
    await this.fetchAllPersonnages();
  },
};
</script>
