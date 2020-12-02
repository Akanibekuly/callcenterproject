<template>
    <div id="content">
        <h1 class="center">Login Form {{ language }}</h1>
        <h3 v-show="error"> Uncorrect e-mail or password </h3>
        <form>
            <i class="far fa-user fa-2x"></i> 
            <input class="center " type="text" v-model="email" name="email" placeholder="Email or Username">
            <i class="fas fa-unlock fa-2x"></i>
            <input class="center password" type="password" v-model="password" name="password" placeholder="Password">
            <button class = "center" type="submit" @click.prevent="test">Login</button>
            <div class="center bot">
                <h3 ><a href=""><span>Password Reset</span></a> or <a href=""><span>Sign In</span></a> </h3>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: "LoginForm",
    props: ["language", "error"],
    data(){
        return {
            email:'',
            password: ''
        }
    },
    methods: {
        test(){
            const userCredentials = {
                email: this.email,
                password: this.password
            }
            this.$emit("login-emit", userCredentials)
            this.password ="";
            this.email = "";
        }
    }
}
</script>

<style scoped>

#content {
    position: reletive;
    width: 350px;
    border: 1px solid;
    border-radius: 20px;
}

input {
    width: 250px;
    border-radius: 10px;
    border: 1px gray solid;
    height: 30px;
    position: relative;
    left: 30px;
    display: inline;
    font-size: 20px;
    font-weight: bold;
}

button {
    width: 95%;
    height: 50px;
    display: block;
    border-radius: 10px;
    border: 1px gray solid;
    font-size: 20px;
    font-weight: bold;
}
.center {
    margin: auto;
    padding: 10px;
    margin-bottom: 10px;
}
.bot {
    padding: 5px;
    margin: 0px;
}
h1, h3 {
    text-align: center;
}
.fas {
    display: inline;
    position: relative;
    left: -280px;
    top: 65px;
}
.far {
    display: inline;
    position: relative;
    left: 20px;
    top: 10px;
}
.password {
    position: relative;
    left: 57px;
}
</style>