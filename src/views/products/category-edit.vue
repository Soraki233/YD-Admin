<script setup>

import PageContainer from "../../components/layout/PageContainer.vue";
import {onMounted, ref} from "vue";
import api from "../../api/index.js";
import {Message, Modal} from "view-ui-plus";

const categoryTableColumns = ref([
  {title: 'id', key: 'id', align: 'center'},
  {title: '分类名称', key: 'categoryName', align: 'center'},
  {title: '操作', slot: 'action', align: 'center'}])
const categoryTableData = ref([])

const editModalIsShow = ref(false)
const modalType = ref(null)
const editModalData = ref({categoryName: null})

const onAddCategory = () => {
  editModalIsShow.value = true
  modalType.value = 'add'
}

const onCategoryEdit = (row) => {
  editModalData.value = row
  editModalIsShow.value = true
  modalType.value = 'edit'
}

const onDelCategory = (row) => {
  //
  Modal.confirm({
    title: '警告',
    content: `是否确认删除 '${row.categoryName}'`,
    onOk: () => {
      const {id} = row
      api.delOneCategory({id}).then(res => {
        getAllCategory()
        Message.success('删除成功');
      }).catch(err => {
        // console.log(err)
        Message.error(err.response.data.message);
      })

    },
    onCancel: () => {

    }
  });

}
const onModalConfirm = () => {
  if (modalType.value === 'add') {
    api.addOneCategory(editModalData.value).then(res => {
      console.log(res)
      getAllCategory()
    })
  } else {
    const {id, categoryName} = editModalData.value
    api.editOneCategory({id, categoryName}).then(res => {
      console.log(res)
      getAllCategory()
    })
  }

}

const getAllCategory = () => {
  api.getAllCategory().then(res => {
    categoryTableData.value = res.data
  })
}
onMounted(() => {
  getAllCategory()
})
</script>

<template>
  <PageContainer :page-title="'分类编辑'">
    <template #control>
      <i-Button type="primary" @click="onAddCategory">新增商品分类</i-Button>
    </template>
    <i-table :columns="categoryTableColumns" :data="categoryTableData" border size="large">
      <template #action="{ row, index }">
        <i-Button size="small" style="margin-right: 10px" type="primary" @click="onCategoryEdit(row)">编辑</i-Button>
        <i-Button size="small" type="error" @click="onDelCategory(row)">删除</i-Button>
      </template>
    </i-table>
    <Page :total="100" style="margin-top: 10px"/>
    <Modal
        v-model="editModalIsShow"
        :model="editModalData"
        :ok-text=" modalType === 'edit' ? '编辑' : '添加' "
        :title=" modalType === 'edit' ? '编辑商品信息' : '添加商品' "
        cancel-text="取消"
        @on-ok="onModalConfirm"
        @on-cancel="cancel">
      <i-form :model="editModalData" label-position="center" label-width="90">
        <FormItem label="分类名称" prop="productName" required>
          <i-input v-model="editModalData.categoryName" clearable placeholder="Enter something..."
                   style="width: 250px;"></i-input>
        </FormItem>
      </i-form>
    </Modal>
  </PageContainer>
</template>

<style lang="less" scoped>

</style>