import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import "bootstrap/dist/js/bootstrap.js"
import { initializeApp } from "firebase/app"

import {Amplify} from 'aws-amplify'
import awsExports from './aws-exports'

import Emitter from 'tiny-emitter'


Amplify.configure(awsExports)


const firebaseConfig = {
    apiKey: "AIzaSyDVCJdV3FbftdUw1Qczr_aTd_XypYRXWJs",
    authDomain: "curso-vue-a4783.firebaseapp.com",
    projectId: "curso-vue-a4783",
    storageBucket: "curso-vue-a4783.appspot.com",
    messagingSenderId: "704932575438",
    appId: "1:704932575438:web:e0c94d2eaebfdecd61789f",
    measurementId: "G-71QQJQ36Q9"
  };

    initializeApp(firebaseConfig);

    const app = createApp(App)

    app.config.globalProperties.$msalInstance = {}
    app.config.globalProperties.$emitter =new Emitter.TinyEmitter()

    createApp(App).use(router).mount('#app')


