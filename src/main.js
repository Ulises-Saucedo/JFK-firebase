import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router/router.js'
import VueKinesis from "vue-kinesis"
import VueRoughNotation from 'vue-rough-notation'
import { initializeApp } from "firebase/app"
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { 
    CoHome, 
    HiArrowSmDown, 
    HiArrowSmUp,
    BiGear,
    BiMotherboard,
    BiLaptop,
    RiFilePaper2Line,
    BiChatLeftDots  ,
    BiArchive,
    BiCamera,
    BiBank,
    BiEnvelopePaper,
    MdFolderspecialOutlined
} from "oh-vue-icons/icons"

addIcons(
    CoHome, 
    HiArrowSmDown, 
    HiArrowSmUp,
    BiGear,
    BiMotherboard,
    BiLaptop,
    RiFilePaper2Line,
    BiChatLeftDots,
    BiArchive,
    BiCamera,
    BiBank,
    BiEnvelopePaper,
    MdFolderspecialOutlined
)

initializeApp(
    {
        apiKey: import.meta.env.VITE_API_KEY,
        authDomain: "jfk-firebase.firebaseapp.com",
        projectId: "jfk-firebase",
        storageBucket: "jfk-firebase.appspot.com",
        messagingSenderId: "35158972095",
        appId: "1:35158972095:web:7048e869f5f8ee9898180a"
    }
)

createApp(App).use(router).use(VueKinesis).use(VueRoughNotation).component("v-icon", OhVueIcon).mount('#app')