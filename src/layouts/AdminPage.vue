<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="">
          </q-avatar>
          Admin Panel
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered elevated>
      <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  { title: "Home", icon: "" },
  { title: "Services", icon: "" },
  { title: "Discord Chat Channel", caption: "chat.quasar.dev", icon: "chat", link: "https://chat.quasar.dev" },
  { title: "Forum", caption: "forum.quasar.dev", icon: "record_voice_over", link: "https://forum.quasar.dev" },
  { title: "Twitter", caption: "@quasarframework", icon: "rss_feed", link: "https://twitter.quasar.dev" },
  { title: "Facebook", caption: "@QuasarFramework", icon: "public", link: "https://facebook.quasar.dev" },
  { title: "Quasar Awesome", caption: "Community Quasar projects", icon: "favorite", link: "https://awesome.quasar.dev" },
];

const leftDrawerOpen = ref(false)


    function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
