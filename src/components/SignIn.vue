<template>
        
<div>
    <Header />

    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <form id="signIn" style="margin-top:100px; text-align:left">
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email"  placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <button type="submit"  class="btn" style="float:right;background-color:#842D73;color:#ffffff">Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import Header from "./Header";
import axios from "axios";

export default {
  name: "SignIn",
  components: {
    Header
  },
  data() {
    return {
      model: {
        email: "",
        password: "",
      },
      loading: "",
      status: ""
    };
  },
  methods: {
    login() {
        const formData = new FormData();

        formData.append("email", this.model.email);
        formData.append("password", this.model.password);

        this.loading = "Signing in";
       
        // Post to server
        axios.post("http://invoyce-api.herokuapp.com/login", formData).then(res => {
            
            // Post a status message
            this.loading = "";

            if (res.data.status == true) {
                // now send the user to the next route
                this.$router.push({
                    name: "Dashboard",
                    params: { user: res.data.user }
                });
            } else {
                this.status = res.data.message;
            }
        });
    }
  }
};
</script>

<style>
label{
    font-size: 20px;
}
</style>