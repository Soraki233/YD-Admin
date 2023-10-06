<template>
  <Menu :open-names="[]" accordion active-name="" theme="primary" @on-open-change="onMenuSelect">
    <MenuItem name="index" to="index">
      <Icon type="ios-home"/>
      首页
    </MenuItem>
    <Submenu name="orders">
      <template #title>
        <Icon type="md-list-box"/>
        订单管理
      </template>
      <MenuGroup title="店内订单">
        <MenuItem name="orders-instore-progress" to="orders-instore-progress">进行中</MenuItem>
        <MenuItem name="orders-instore-completed" to="orders-instore-completed">已完成</MenuItem>
        <MenuItem name="orders-instore-cancelled" to="orders-instore-cancelled">已取消</MenuItem>
      </MenuGroup>
      <MenuGroup title="外卖订单">
        <MenuItem name="2-1">已完成</MenuItem>
        <MenuItem name="2-2">进行中</MenuItem>
        <MenuItem name="1-4">已取消</MenuItem>
      </MenuGroup>
    </Submenu>
    <Submenu name="2">
      <template #title>
        <Icon type="md-cart"/>
        商品管理
      </template>
      <MenuItem name="products-edit" to="products-edit">商品编辑</MenuItem>
      <MenuItem name="category-edit" to="category-edit">分类编辑</MenuItem>
      <MenuItem name="specification-edit" to="specification-edit">规格管理</MenuItem>
    </Submenu>
    <Submenu name="4">
      <template #title>
        <Icon type="ios-albums"/>
        库存管理
      </template>
      <MenuItem name="4-1">Option 9</MenuItem>
      <MenuItem name="4-2">Option 10</MenuItem>
      <MenuItem name="4-3">Option 11</MenuItem>
      <MenuItem name="4-4">Option 12</MenuItem>
    </Submenu>
    <Submenu name="5">
      <template #title>
        <Icon type="md-contacts"/>
        会员管理
      </template>
      <MenuItem name="5-1">Option 9</MenuItem>
      <MenuItem name="5-2">Option 10</MenuItem>
      <MenuItem name="5-3">Option 11</MenuItem>
      <MenuItem name="5-4">Option 12</MenuItem>
    </Submenu>
    <Submenu name="6">
      <template #title>
        <Icon type="logo-usd"/>
        结费和账单管理
      </template>
      <MenuItem name="6-1">Option 9</MenuItem>
      <MenuItem name="6-2">Option 10</MenuItem>
      <MenuItem name="6-3">Option 11</MenuItem>
      <MenuItem name="6-4">Option 12</MenuItem>
    </Submenu>
    <Submenu name="7">
      <template #title>
        <Icon type="md-analytics"/>
        统计看板
      </template>
      <MenuItem name="7-1">Option 9</MenuItem>
      <MenuItem name="7-2">Option 10</MenuItem>
      <MenuItem name="7-3">Option 11</MenuItem>
      <MenuItem name="7-4">Option 12</MenuItem>
    </Submenu>
    <Submenu name="8">
      <template #title>
        <Icon type="md-settings"/>
        系统设置
      </template>
      <MenuItem name="8-1">Option 9</MenuItem>
      <MenuItem name="8-2">Option 10</MenuItem>
      <MenuItem name="8-3">Option 11</MenuItem>
      <MenuItem name="8-4">Option 12</MenuItem>
    </Submenu>
  </Menu>
</template>
<script setup>
// import { useRouter } from 'vue-router'
// const router = useRouter()
// const menuActiveName = ref('index')
// const onMenuSelect = (name) => {
//   menuActiveName.value = name
// }
</script>