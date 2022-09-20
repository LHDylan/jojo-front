<template>
  <v-card>
    <v-subheader>{{ }}</v-subheader>

    <v-list two-line>
      <template>
        <v-list-item>
          <v-list-item-avatar color="grey darken-1">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title></v-list-item-title>

            <v-list-item-subtitle>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider> -->
      </template>
    </v-list>
  </v-card>
</template>

<script>
import axios from 'axios';

const VUE_APP_JOJO_API = 'http://localhost:8000/api/personnages';

export default {
  name: 'AdminCardView',
  data: () => ({
    personnage: [],
  }),
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
