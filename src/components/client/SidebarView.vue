<template>
  <v-col cols="2">
    <v-sheet rounded="sm">
      <v-list color="transparent">
        <v-list-item link color="grey lighten-4">
          <v-list-item-content>
            <v-list-item-title>
              Personnages
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>
              personnage {{ n }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-col>
</template>

<script>

export default {
  name: 'SidebarView',

  components: {
  },
};
</script>
