<template>
  <div class="container">
    <h1>Übersicht</h1>
    <FlashMessage></FlashMessage>
    <table>
      <thead>
        <tr>
        <td>Name</td>
        <td>Anzahl</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,i) in this.$store.state.coffeeCount" :key="i">
          <td>
            {{user.username}}
          </td>
          <td>
            {{user.coffeeCount}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "../axios-instance";
export default {
  created() {
    this.$store.dispatch("GET_COFFEE_COUNT");
  },
  computed: {
    coffeeCount() {
      return this.$store.getters["coffeeCountData"];
    }
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
