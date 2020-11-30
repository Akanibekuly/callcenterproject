<template>
  <div>
    <LoginForm class="center" :error= "error" :language= "language" v-on:login-emit="login"/>
  </div>
</template>

<script>
import LoginForm from './LoginForm'
export default {
    name: "mainLoginForm",
    components: {
        LoginForm
    },
    data() {
        return {
            language: "En",
            user: {
                email: "",
                password: ""
            }, 
            error: false
        }
    },
    methods: {
        login(user){
            console.log(user);
            this.error = true
            console.log(this.error)
        }
    }
}
</script>

<style>
.center {
  margin: auto;
  padding: 10px;
}
</style>
