import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router/router.js'
import VueKinesis from "vue-kinesis"
import VueRoughNotation from 'vue-rough-notation'
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

createApp(App).use(router).use(VueKinesis).use(VueRoughNotation).component("v-icon", OhVueIcon).mount('#app')