<template>
  <div class="container">
    <h1>Rechnung</h1>
    <button >User-Daten</button>
    <button>Start </button>
    <FlashMessage></FlashMessage>
    <div class="flex-container">
      <table>
        <thead>
          <td>

          </td>
          <td>
            Username
          </td>
          <td>
            Anzahl
          </td>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" name="" id="" checked>
            </td>
            <td> Admin </td>
            <td><i class="material-icons icon-btn" >add</i>  0  <i class="material-icons icon-btn" >remove</i></td>
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
    this.$store.dispatch("");
  },
  computed: {
    systemSettings() {
      return this.$store.getters[""];
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
