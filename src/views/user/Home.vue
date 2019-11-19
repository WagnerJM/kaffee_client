<template>
  <div class="container">
    <h1>Persönliche Übersicht</h1>
    <FlashMessage></FlashMessage>
    <div class="flex-container row">
    <div class="card">
      <div class="card-container">
        <h2>#Kaffees: {{this.$store.state.user.coffee_count}}</h2>
      </div>
    </div>

    <div class="card">
      <div class="card-container">
        <h2>Betrag: {{ betrag }} €</h2>

      </div>
    </div>

    </div>
    <br>
    <br>
    <hr>
    <h1>Profile Coming soon</h1>
    <button>Edit</button>
    <div class="flex-container">
      <p>Vorname: {{this.$store.state.user.vorname}} </p>
      <p>Nachname: {{this.$store.state.user.nachname}}</p>
    </div>
  </div>
</template>

<script>
import http from "../../axios-instance";
export default {
  computed: {
    betrag() {
      return this.$store.state.user.coffee_count * this.$store.state.system_settings.kaffee_preis
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
