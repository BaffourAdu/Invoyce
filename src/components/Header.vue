<template>
    <nav class="navbar navbar-light bg text-light" style="background-color:#842D73">
        <template v-if="user != null">
            <SideNav v-bind:name='user.name' v-bind:company='user.company_name'/>
        </template>
        <span class="navbar-brand mb-0 h1" style="color:white">{{ title }} </span>
        <div class="buttons">
       <a class="btn btn-outline-warning" role="button"><router-link to="login" style="text-decoration:none;color: inherit;">
         Login</router-link></a> &nbsp;
       <a class="btn " style="background-color:#FFC107;" role="button"><router-link to="register" style="text-decoration:none; color:white; ">
         Signup</router-link></a>
        </div>
    </nav>
     
</template>

<script>
import SideNav from './SideNav';

export default {
  name: 'Header',
  props: ['user'],
  components: {
    SideNav
  },
  data () {
    return {
      title: 'Invoyce',
    }
  },
  
};
</script>





