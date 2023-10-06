let BASE_URL

if (import.meta.env.VITE_NAME === 'development') {
    // 开发环境
    BASE_URL = '/api'
    console.log('dev')
} else if (import.meta.env.VITE_NAME === 'production') {
    // 生产环境
    BASE_URL = 'http://43.138.37.14:8808'
}
console.log(BASE_URL, 'v')
export {BASE_URL}