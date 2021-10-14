import Vue from 'vue'
import SButton from "./components/s-button.vue";

export default {
    install: function (Vue, options) {
        Vue.component('s-button', SButton)
    }
}