<template>
  <div id="app" class="center grid ">
    <vs-row justify="center">
      <vs-col w="12">
        <app-header></app-header>
        <router-view />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: { appHeader: Header }
};
</script>

<style></style>
