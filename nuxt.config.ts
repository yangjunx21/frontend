// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.sass',
        'assets/css/main.css'
    ],
    // https://nuxt.com/blog/going-full-static#too-long-to-read
    ssr: false,
    modules: [
        'nuxt-vitest',
        '@element-plus/nuxt'
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        // https://vitejs.dev/config/server-options.html
        server: {
            strictPort: true,
            proxy: {
                '/api': {
                    target: 'http://talegine-production.up.railway.app',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        }
    },
})
