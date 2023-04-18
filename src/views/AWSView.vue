<template>
   <Authenticator>
        <template v-slot="{user, signOut}">
            <h1>Hello {{ user.email }}</h1>
            <button @click="signOut">Sign out</button>

        </template>
   </Authenticator>
</template>

<script lang="ts" setup>
    import {Authenticator} from '@aws-amplify/ui-vue'
    import '@aws-amplify/ui-vue/styles.css'
</script>

<style scoped>
</style>