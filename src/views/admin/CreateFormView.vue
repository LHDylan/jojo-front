<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <v-container>
    <navigationView />
    <v-form>
      <v-row>
        <v-col cols="6" md="4">
          <v-text-field v-model="personnage.name" type="text" label="name" required></v-text-field>
        </v-col>

        <v-col cols="6" md="4">
          <v-text-field v-model="personnage.stand" type="text" label="stand">
          </v-text-field>
        </v-col>

        <v-col cols="3" md="3">
          <v-text-field v-model="personnage.birthday" type="date" label="birthday">
          </v-text-field>
        </v-col>

        <v-col cols="2" md="2">
          <v-text-field v-model="personnage.gender" type="text" label="gender" required>
          </v-text-field>
        </v-col>

        <v-col cols="3" md="3">
          <v-text-field v-model="personnage.weight" type="number" label="weight" required>
          </v-text-field>
        </v-col>

        <v-col cols="3" md="3">
          <v-text-field v-model="personnage.height" type="number" label="height" required>
          </v-text-field>
        </v-col>

        <v-col cols="6" md="3">
          <v-text-field v-model="personnage.anime" type="text" label="anime" required>
          </v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="personnage.description" type="textarea" label="desciption" required>
          </v-text-field>
        </v-col>

        <v-col>
          <v-btn @click='handleSaveBtn' type="button">Add a new challenger !</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import navigationView from '@/components/admin/AdminNavigationView.vue';
import axios from 'axios';

const VUE_APP_JOJO_API = 'http://localhost:8000/api/personnages';
console.warn(VUE_APP_JOJO_API);

export default {
  name: 'CreateFormView',
  data: () => ({
    onEdit: false,
    personnage: {
      name: '',
      stand: '',
      birthday: '',
      gender: '',
      weight: 0,
      height: 0,
      anime: '',
      description: '',
    },
  }),
  components: {
    navigationView,
  },
  methods: {
    async handleSaveBtn() {
      if (this.onEdit) {
        // > je vais faire mon PUT sur mon api
        await this.editOnePersonnage();
      } else {
        // > je vais faire mon POST sur mon api
        await this.createNewPersonnage();
      }
    },
    async createNewPersonnage() {
      console.warn('ici en create');
      this.personnage.height = Number(this.personnage.height);
      this.personnage.weight = Number(this.personnage.weight);
      await axios.post(VUE_APP_JOJO_API, this.personnage, {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      });
    },
    async editOnePersonnage() {
      // console.warn('ici en edit');
      console.log(this.personnage);
    },
  },
};
</script>

<style scoped>
.v-form {
  color: #fff !important;
}
</style>
