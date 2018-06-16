 <template>
 
 <div>
    <Header />
    
    <div class="container " style="margin-top:100px;">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-5">
                <form style="text-align:left">
                    <div class="form-group">
                        <label for="Name">Name</label>
                        <input type="text" class="form-control" id="name"  placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="Email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <label for="company_name">Company Name</label>
                        <input type="text" class="form-control" id="company_name" placeholder="Password">
                    </div>
                    <div class="row form-group">
                        <div class="col-md-6">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password">
                        </div>

                        <div class="col-md-6">
                            <label for="confirm-password">Confirm Password</label>
                            <input type="password" class="form-control" id="repeat_password" placeholder="Password">
                        </div>

                    </div>
                    
                    <button type="submit" class="btn" style="float:right;background-color:#842D73;color:#ffffff">Submit</button>
                </form>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
 </div>
 </template>

<script>
import Header from "./Header";
import axios from "axios";

export default {
name: "SignUp",
components: {
    Header
},
data() {
    return {
      model: {
        name: "",
        email: "",
        password: "",
        c_password: "",
        company_name: ""
      },
      loading: "",
      status: ""
    };
},
methods: {
    validate() {
      // checks to ensure passwords match
      if( this.model.password != this.model.c_password){
        return false;
      }
      return true;
    },
    register() {
        const formData = new FormData();
        let valid = this.validate();

        if (valid) {
            formData.append("name", this.model.name);
            formData.append("email", this.model.email);
            formData.append("company_name", this.model.company_name);
            formData.append("password", this.model.password);

            this.loading = "Registering you, please wait";

            // Post to server
            axios.post("http://invoyce-api.herokuapp.com/register", formData).then(res => {

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
        } else {
            alert("Passwords do not match");
        }
    },
}
}
</script>




 
 