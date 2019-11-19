<template>
  <div class="container">
    <h1>Rechnung</h1>
    <button @click="getUserData4Invoice">User-Daten</button>
    <button>Start</button>
    <FlashMessage></FlashMessage>
    <div class="flex-container">
      <table>
        <thead>
          <td>
            Username
          </td>
          <td>
            Anzahl
          </td>
          <td>
            Betrag
          </td>
          <td>

          </td>
        </thead>
        <tbody>
          <tr v-for="(user, i) in this.$store.state.users" :key="i">
            <td> {{user.username}} </td>
            <td><i class="material-icons icon-btn icon-btn-bg" >remove</i> {{user.coffee_count}} <i class="material-icons icon-btn icon-btn-bg" >add</i></td>
          </tr>
        </tbody>
      </table>
      
    </div>
  </div>
</template>

<script>
import http from "../../axios-instance";

export default {
  created() {
    
  },
  name: "system",
  data() {
    return {
      userData: {},
      edit: false,
      editedItem: {
       
      },

      default_settings: {
        
      }
    };
  },
  methods: {
    getUserData4Invoice() {
     http.get("/user").then(res => {
        this.userData = res.data;
        
      });
    },
    addKaffee() {
      
    },
    removeKaffee(){

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
