<template>
   <h1>Social Login</h1>
   <button @click="loginGoogle">Login With Google</button> 
   <button @click="loginFacebook">Login With Facebook</button>
   <button @click="loginTwitter">Login With Twitter</button>
   <button @click="loginGithub">Login With Github</button>
</template>

<script lang="ts" setup>
    import {GithubAuthProvider, GoogleAuthProvider, signInWithPopup, getAuth, FacebookAuthProvider, TwitterAuthProvider } from '@firebase/auth'

    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const twitterProvider = new TwitterAuthProvider()
    const githutProvider = new GithubAuthProvider()

    const auth = getAuth()

    const loginGoogle = () => {
        signInWithPopup(auth, googleProvider) //va disparar el proceso de indentificacion google
        .then( (result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken;
            alert("Success!") 
        })
        .catch( (error) => {
            alert("Login Failed!")
        })
    }
 
    const loginFacebook = () => {
        signInWithPopup(auth, facebookProvider)
        .then( (result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken;
            alert("Success!") 
        })
        .catch( (error) => {
            alert("Login Failed!")

        })

    }

    const loginTwitter = () => {
        signInWithPopup(auth, twitterProvider)
        .then( (result) => {
            const credential = TwitterAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken;
            alert("Success!") 
        })
        .catch( (error) => {
            alert("Login Failed!")

        })

    }

    const loginGithub = () => {
        signInWithPopup(auth, githutProvider)
        .then( (result) => {
            const credential = GithubAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken;
            alert("Success!") 
        })
        .catch( (error) => {
            alert("Login Failed!")

        })

    }



    
</script>

<style scoped>
</style>