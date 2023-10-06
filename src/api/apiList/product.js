import axios from "../request";

export default {
    getAllProducts(params) {
        return axios.get('/product/getAllProducts', {params: params})
    },
    editOneProduct(data) {
        return axios.post('/product/editOneProduct', data)
    },
    addOneProduct(data) {
        return axios.post('/product/addOneProduct', data)
    },
    getAllCategory() {
        return axios.get('/product/getAllCategory')
    },
    getAllSpecification() {
        return axios.get('/product/getAllSpecification')
    },
    addOneCategory(data) {
        return axios.post('/product/addOneCategory', data)
    },
    editOneCategory(data) {
        return axios.post('/product/editOneCategory', data)
    },
    delOneCategory(params) {
        return axios.get('/product/delOneCategory', {params: params})
    },
    addOneSpecification(data) {
        return axios.post('/product/addOneSpecification', data)
    },
    editOneSpecification(data) {
        return axios.post('/product/editOneSpecification', data)
    },
    delOneSpecification(params) {
        return axios.get('/product/delOneSpecification', {params: params})
    },
    delOneProduct(params) {
        return axios.get('/product/delOneProduct', {params: params})
    }
}