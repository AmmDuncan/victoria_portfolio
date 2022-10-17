// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            emailJsKey: process.env.VUE_APP_EMAIL_JS_KEY
        }
    }
})
