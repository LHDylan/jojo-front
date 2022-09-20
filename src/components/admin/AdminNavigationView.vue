<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-sheet class="pa-4">
      <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

      <div>Dashboard</div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item v-for="[icon, text] in links" :key="icon" link>
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationView',
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
  }),
};
</script>

<style scoped>
/* head navigation */
.v-navigation-drawer__content .theme--light.v-sheet {
  background-color: #3b4c68 !important;
  color: #fff;
}

/* background */
.v-navigation-drawer__content {
  background-color: #3b4c68 !important
}

/* text color */
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #fff;
}

/* icon */
.theme--light.v-icon {
  color: #fff;
}
</style>
