import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    base: './',
    server: {
        host: '0.0.0.0',
        port: 3000,
        open: true,
        // https:true,
        // cors: true,
        proxy: {
            '/api': {
                // target: 'http://43.138.37.14:8808',
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                math: 'always',
                rewriteUrls: 'all'
            }
        }
    }
})
