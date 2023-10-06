export default [{
    path: '/products', redirect: '/products-edit'
}, {
    path: "/products-edit",
    component: () => import("../../views/products/products-edit.vue"),
    name: "products-edit",
    meta: {
        optionTitle: '商品管理', // masterTitle: '店内订单',
        title: '商品编辑', key: 'products'
    }
}, {
    path: "/category-edit",
    component: () => import("../../views/products/category-edit.vue"),
    name: "category-edit",
    meta: {
        optionTitle: '商品管理', // masterTitle: '店内订单',
        title: '分类编辑', key: 'products'
    }
}, {
    path: "/specification-edit",
    component: () => import("../../views/products/specification-edit.vue"),
    name: "specification-edit",
    meta: {
        optionTitle: '规格管理',
        title: '规格管理',
        key: 'products'
    }
}

]