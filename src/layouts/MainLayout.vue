<template>
  <q-layout view="hHh lpR fFr">
    <q-header elevated>
      <q-toolbar class="bg-white q-px-xl">
        <q-avater>
          <img src="../assets/images/logo/ToothArtLogo.svg" alt="brand-logo" width="60">
        </q-avater>
        <q-toolbar-title class="dark text-primary">Tooth Art Dental Clinic</q-toolbar-title>
        <q-section class="row wrap justify-evenly items-center content-center q-gutter-sm relative-position q-m-md"
          v-if="!$q.screen.lt.md"
        >
          <q-btn-toggle
          class="q-m-md text-primary"
          v-model="model"
          unelevated
          flat
          spread
          :options="[
            {label: 'Home', value: 'home'},
            {label: 'Service', value: 'service'},
            {label: 'Contact', value: 'contact'},
            {label: 'About', value: 'about'}
            ]"

        />

        <q-btn
        class="q-m-md text-white bg-primary"
        style="width: 8em;"
        rounded
        label="Login"></q-btn>
        </q-section>


        <!-- Menu button only visible on smaller screens -->
        <q-btn
          v-if="$q.screen.lt.md"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <!-- Drawer is hidden on larger screens -->
    <q-drawer v-if="$q.screen.lt.md" v-model="rightDrawerOpen" show-if-above bordered side="right">
      <q-list v-show="rightDrawerOpen">
        <q-item-label header>Menu</q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container style="background: linear-gradient(45deg, #fff, #f97316)">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";  // Import Quasar composable for screen breakpoints
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const $q = useQuasar();  // Use Quasar screen breakpoints

const linksList = [
  { title: "Home", icon: "home" },
  { title: "Services", icon: "" },
  { title: "Discord Chat Channel", caption: "chat.quasar.dev", icon: "chat", link: "https://chat.quasar.dev" },
  { title: "Forum", caption: "forum.quasar.dev", icon: "record_voice_over", link: "https://forum.quasar.dev" },
  { title: "Twitter", caption: "@quasarframework", icon: "rss_feed", link: "https://twitter.quasar.dev" },
  { title: "Facebook", caption: "@QuasarFramework", icon: "public", link: "https://facebook.quasar.dev" },
  { title: "Quasar Awesome", caption: "Community Quasar projects", icon: "favorite", link: "https://awesome.quasar.dev" },
];

const rightDrawerOpen = ref(false);

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
console.log($q);
</script>
