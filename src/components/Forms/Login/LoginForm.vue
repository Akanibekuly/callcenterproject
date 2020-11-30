<template>
    <div id="content">
        <h1 class="center">Login Form {{ language }}</h1>
        <h3 v-show="error"> Uncorrect e-mail or password </h3>
        <form>
            <input class="center" type="text" v-model="email" name="email" placeholder="Email or Username">
            <input class="center" type="password" v-model="password" name="password" placeholder="Password">
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
    width: 350px;
    border: 1px solid;
    border-radius: 20px;
}

input {
    width: 90%;
    border-radius: 10px;
    border: 1px gray solid;
    height: 30px;
    display: block;
}

button {
    width: 95%;
    height: 50px;
    display: block;
    border-radius: 10px;
    border: 1px gray solid;
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
</style>