//  progress, completed, cancelled
export default [
  {
    path: '/orders',
    redirect: '/orders-instore-progress'
  },
  {
    path: "/orders-instore-progress",
    component: () => import("../../views/orders/orders-instore-progress.vue"),
    name: "orde-instorer-progress",
    meta: {
      optionTitle: '订单管理',
      masterTitle: '店内订单',
      title: '进行中',
      key: 'orders'
    }
  },
  {
    path: "/orders-instore-completed",
    component: () => import("../../views/orders/orders-instore-completed.vue"),
    name: "orders-instore-completed",
    meta: {
      optionTitle: '订单管理',
      masterTitle: '店内订单',
      title: '已完成',
      key: 'orders'
    }
  },
  {
    path: "/orders-instore-cancelled",
    component: () => import("../../views/orders/orders-instore-cancelled.vue"),
    name: "orders-instore-cancelled",
    meta: {
      optionTitle: '订单管理',
      masterTitle: '店内订单',
      title: '已取消',
      key: 'orders'
    }
  },
]