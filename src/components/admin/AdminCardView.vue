<template>
  <v-card>
    <v-subheader>{{ }}</v-subheader>

    <v-list two-line>
      <template>
        <v-list-item>
          <v-list-item-avatar color="grey darken-1">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-row>
              <v-col cols="6">
                <v-list-item-title>name : {{personnage.name}}</v-list-item-title>
                <v-list-item-title>stand : {{personnage.stand}}</v-list-item-title>
                <v-list-item-title>birthday : {{personnage.birthday}}</v-list-item-title>
              </v-col>
              <v-col cols="6">
                <v-list-item-title>gender : {{personnage.gender}}</v-list-item-title>
                <v-list-item-title>weight : {{personnage.weight}} kg</v-list-item-title>
                <v-list-item-title>height : {{personnage.height}} cm</v-list-item-title>
              </v-col>
            </v-row>
            <v-list-item>
              {{personnage.anime}}
            </v-list-item>
            <v-list-item>
              {{personnage.description}}
            </v-list-item>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider> -->
      </template>
    </v-list>
  </v-card>
</template>

<script>
// import axios from 'axios';

// const VUE_APP_JOJO_API = 'http://localhost:8000/api/personnages';

export default {
  name: 'AdminCardView',
  props: {
    personnage: {
      type: Object,
    },
  },
  data: () => ({
    // personnage: [],
  }),
};
</script>

<style scoped>
.v-list-item__title {
  color: #000000;
}
</style>
