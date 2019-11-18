<template>
  <div class="container">
    <h1>User Management</h1>
    <button @click="navigate('/signup')">Neuer User</button>
    <br>
    <br>
    
    <table>
      <thead>
        <th>
          Username          
        </th>
        <th>
          Vorname
        </th>
        <th>
          Nachname
        </th>
        <th>
          E-Mail
        </th>
        <th>
          Admin
        </th>
        <th>
          KeyID
        </th>
        <th>

        </th>
      </thead>
      <tbody>
        <tr v-for="(user, i) in this.$store.state.users" :key="i">
          <td>{{user.username}}</td>
          <td>{{user.vorname}}</td>
          <td>{{user.nachname}}</td>
          <td>{{user.email}}</td>
          <td v-if="user.is_admin"><i class="material-icons" style="color: green;">done</i></td>
          <td v-else><i class="material-icons" style="color: red;">clear</i></td>
          <td>{{user.key_ID}}</td>
          <td><i class="material-icons icon-btn" >edit</i></td>
        </tr>
      </tbody>
    </table>
 
    </div>
 
</template>

<script>
import http from "../../axios-instance";

export default {
  created() {
    this.$store.dispatch("GET_ALL_USER");
  },
  computed: {
    users() {
      return this.$store.getters["allUsers"];
    }
  },
  name: "system",
  data() {
    return {
      edit: false,
      editedItem: {
       
      },

      default_settings: {
        
      }
    };
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
    },
    editItem(settings) {
      this.$modal.show("settings");
      this.editedItem = Object.assign({}, settings);
    },
    save() {
      const formData = {
        system_email: this.editedItem.system_email,
        email_password: this.editedItem.email_password,
        smtp_host: this.editedItem.smtp_host,
        smtp_port: this.editedItem.smtp_port,
        email_tls: this.editedItem.email_tls,
        framesize: this.editedItem.framesize,
        driver_path: this.editedItem.driver_path,
        profile_path: this.editedItem.profile_path
      };
      http
        .put("/system/setting", formData)
        .then(res => {
          this.$store.commit("setSettings", res.data);
          this.flashMessage.success({
            title: "Speichern",
            message: "Einstellungen wurden erfolgreich gespeichert"
          });
        })
        .catch(error => {
          this.flashMessage.error({ titel: "Error", message: error });
        });
      this.$modal.hide("settings");
    }
  }
};
</script>

<style>
</style>
