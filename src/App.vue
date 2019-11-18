<template>
  <div id="app">
    <div class="topnav">
      <a class="active">Kaffee-o-bot</a>

      <router-link class="right active" to="/login" v-if="!this.$store.state.isAuthenticated">Login</router-link>
      <router-link class="right active" to="/admin" v-if="this.$store.state.user.is_admin">Admin</router-link>
      <router-link class="right active" to="/user" v-if="this.$store.state.isAuthenticated">User</router-link>

      
      <router-link class="right active" to="/">Übersicht</router-link>

    </div>

    <router-view></router-view>
    <div class="push"></div>
    <div class="footer">
      <div>&copy; {{ new Date().getFullYear() }} J-M. Wagner</div>
      <div class="right">
        <router-link to="/logout" v-if="this.$store.state.isAuthenticated">logout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
