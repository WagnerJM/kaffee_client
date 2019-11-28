<template>
  <div class="container">
    <FlashMessage></FlashMessage>
    <h1>Rechnung</h1>
    <div class="flex-container">
        <button @click="start">Start</button>
        <table>
            <thead>
                <td></td>
                <td>Username</td>
                <td>Kaffee-Anzahl</td>
            </thead>
            <tbody>
                <tr v-for="(user, i) in this.$store.state.users" :key="i">
                    <td>
                        <input type="checkbox" name="user" :id="user.id" :value="user" v-model="selected">
                    </td>
                    <td>{{user.username}}</td>
                    <td>{{user.coffee_count}}</td>
                </tr>
            </tbody>
        </table>
            {{selected}}
    </div>

  </div>
</template>

<script>
import http from "../../axios-instance";
export default {
    created() {
    this.$store.dispatch("GET_ALL_USER");
  },
  computed: {
     
  },
  
  methods: {
    start() {
        const formData = this.selected;
        console.log(formData);
        
        http.put("/admin/rechnungslauf", formData)
        .then(res =>{
            this.flashMessage.success({
                titel: "Erfolg",
                message: "Der Rechnungslauf wurde erfolgreich erstellt."
            })
        })
        .catch(error => {
          this.flashMessage.error({ titel: "Error", message: error });
        });
    }
  },
  data() {
    return {
        selected: [],
        allSelected: false,
        
    };
  }
};
</script>

<style>
</style>
