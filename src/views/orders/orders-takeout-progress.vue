<template>
  <PageContainer>
    <i-table border :columns="columns" :data="data" size="large">
      <template #action="{ row, index }">
        <Button type="primary" size="small" style="margin-right: 5px">出餐</Button>
        <Button type="error" size="small">删除</Button>
      </template>
    </i-table>
    <Page :total="100" />
  </PageContainer>
</template>
<script setup>
import { ref } from 'vue'
import PageContainer from '../../components/layout/PageContainer.vue';
const columns = ref([
  {
    title: '桌号',
    key: 'tableNum',
    // width: 120,
    align: 'center'
  },
  {
    title: '菜品数量',
    key: 'quantity',
    // width: 120,
    align: 'center'
  },
  {
    title: '老顾客',
    key: 'isOld',
    // width: 120,
    align: 'center'
  },
  {
    title: '消费金额',
    key: 'price',
    align: 'center'
  },
  {
    title: '操作',
    slot: 'action',
    // width: 150,
    align: 'center'
  }
])

const data = ref([
  {
    tableNum: '1',
    quantity: 18,
    isOld: '是',
    price: 130,
    address: 'New York No. 1 Lake Park',
    date: '2016-10-03'
  },
  {
    ntableNumame: '3',
    quantity: 24,
    isOld: '是',
    price: 230,
    address: 'London No. 1 Lake Park',
    date: '2016-10-01'
  },
  {
    tableNum: '4',
    quantity: 30,
    isOld: '是',
    price: 550,
    address: 'Sydney No. 1 Lake Park',
    date: '2016-10-02'
  },
  {
    tableNum: '5',
    quantity: 26,
    isOld: '否',
    price: 200,
    address: 'Ottawa No. 2 Lake Park',
    date: '2016-10-04'
  }
])
// export default {
//     data () {
//         return {
// columns: [
//     {
//         title: 'Name',
//         key: 'name'
//     },
//     {
//         title: 'Age',
//         key: 'age'
//     },
//     {
//         title: 'Address',
//         key: 'address'
//     }
// ],
// data: [
//     {
//         name: 'John Brown',
//         age: 18,
//         address: 'New York No. 1 Lake Park',
//         date: '2016-10-03'
//     },
//     {
//         name: 'Jim Green',
//         age: 24,
//         address: 'London No. 1 Lake Park',
//         date: '2016-10-01'
//     },
//     {
//         name: 'Joe Black',
//         age: 30,
//         address: 'Sydney No. 1 Lake Park',
//         date: '2016-10-02'
//     },
//     {
//         name: 'Jon Snow',
//         age: 26,
//         address: 'Ottawa No. 2 Lake Park',
//         date: '2016-10-04'
//     }
// ]
//         }
//     }
// }
</script>