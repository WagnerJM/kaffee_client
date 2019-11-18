<template>
  <div class="container">
    <h1>Admin-Panel</h1>
    <FlashMessage></FlashMessage>
    <div class="card" @click='navigate("/admin/users")' >
        <h2>
        User Management
        </h2>
    </div>
    <div class="card" @click='navigate("/admin/rechnung")'>
        <h2>
        Rechnungslauf
        </h2>
    </div>
    <div class="card" @click='navigate("/admin/kassenbuch")'>
        <h2>
            Kassenbuch
        </h2>
    </div>
    <div class="card" @click='navigate("/admin/system")'>
        <h2>
        System Einstellungen
        </h2>
    </div>
    
  </div>
   
</template>

<script>
import http from "../../axios-instance";
export default {
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
