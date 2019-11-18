<template>
  <div class="container">
    <h1>System Test</h1>
    <button @click="editItem(systemSettings)">Edit</button>
    <FlashMessage></FlashMessage>
    <div class="flex-container">
      <h2>E-Mail Einstellungen</h2>
      <div>
        <p>System Email:
          <b>{{systemSettings.sys_email }}</b>
        </p>
        <p>Email Password:
          <b>{{systemSettings.sys_email_pw }}</b>
        </p>
        <p>SMTP Host:
          <b>{{systemSettings.sys_email_host }}</b>
        </p>
        <p>SMTP PORT:
          <b>{{systemSettings.sys_email_port }}</b>
        </p>
        <p>TLS:
          <input v-if="systemSettings.sys_email_tls" type="checkbox" checked>
          <input type="checkbox" v-else>
        </p>
        <hr>
        <p>
          Kaffee Preis:
            <b>
              {{systemSettings.kaffee_preis}}
            </b>
        </p>
        <modal name="settings" height="auto" :adaptive="true">
          <div style="padding: 5%;">
            <h2>Edit</h2>
            <div class="flex-container">
              <label>Kaffee Preis</label>
              <h2>Kaffee</h2>
              <input type="text" v-model="editedItem.kaffee_preis">
              <h2>E-Mail Einstellungen</h2>
              <label>System Email</label>
              <input type="text" v-model="editedItem.sys_email">
              <label>Email Password:</label>
              <input type="text" v-model="editedItem.sys_email_pw">
              <label>SMTP Host</label>
              <input type="text" v-model="editedItem.sys_email_host">
              <label>SMTP Port</label>
              <input type="text" v-model="editedItem.sys_email_port">
              <p>
                TLS:
                <input type="checkbox" v-model="editedItem.sys_email_tls">
              </p>
              <button @click="save">Save</button>
              <hr>
              
            </div>
          </div>
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../axios-instance";

export default {
  created() {
    this.$store.dispatch("GET_SYSTEM_SETTINGS");
  },
  computed: {
    systemSettings() {
      return this.$store.getters["system_settings"];
    }
  },
  name: "system",
  data() {
    return {
      edit: false,
      editedItem: {
        sys_email: "",
        sys_email_pw: "",
        sys_email_host: "",
        sys_email_port: 0,
        sys_email_tls: "",
        kaffee_preis: 0.0
      },

      default_settings: {
        sys_email: "",
        sys_email_pw: "",
        sys_email_host: "",
        sys_email_port: 0,
        sys_email_tls: "",
        kaffee_preis: 0.0
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
        sys_email: this.editedItem.sys_email,
        sys_email_pw: this.editedItem.sys_email_pw,
        sys_email_host: this.editedItem.sys_email_host,
        sys_email_port: this.editedItem.sys_email_port,
        sys_email_tls: this.editedItem.sys_email_tls,
        kaffee_preis: this.editedItem.kaffee_preis,
      };
      http
        .put("/admin/setting", formData)
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
