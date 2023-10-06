<script setup>

import PageContainer from "../../components/layout/PageContainer.vue";
import {onMounted, ref} from "vue";
import api from "../../api/index.js";
import {Message, Modal} from "view-ui-plus";

const specificationTableColumns = ref([{title: 'id', key: 'id', align: 'center'},
  {title: '规格名称', key: 'specificationName', align: 'center'},
  {title: '操作', slot: 'action', align: 'center'}])
const specificationTableData = ref([])
const editModalIsShow = ref(false)
const modalType = ref(null)
const editModalData = ref({specificationName: null})

onMounted(() => {
  getAllSpecification()
})
const getAllSpecification = () => {
  api.getAllSpecification().then(res => {
    specificationTableData.value = res.data
  }).catch(err => {

  })
}

const onSpecificationAdd = () => {
  modalType.value = 'add'
  editModalIsShow.value = true
}
const onSpecificationEdit = (specificationObj) => {
  editModalData.value = specificationObj
  modalType.value = 'edit'
  editModalIsShow.value = true
}
const onModalConfirm = () => {
  if (modalType.value === 'edit') {
    const {id, specificationName} = editModalData.value
    api.editOneSpecification({id, specificationName}).then(res => {
      getAllSpecification()
      Message.success('修改成功')
    }).catch(err => {
      Message.error(err.response.data.message)
    })
  } else {
    const {specificationName} = editModalData.value
    api.addOneSpecification({specificationName}).then(res => {
      getAllSpecification()
      Message.success('添加成功')
    }).catch(err => {
      Message.error(err.response.data.message)
    })
  }
}
const onDelSpecification = (row) => {
  Modal.confirm({
    title: '警告',
    content: `是否确认删除 '${row.specificationName}'`,
    onOk: () => {
      const {id} = row
      api.delOneSpecification({id}).then(res => {
        getAllSpecification()
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
</script>

<template>
  <PageContainer page-title="规格编辑">
    <template #control>
      <i-Button type="primary" @click="onSpecificationAdd()">新增商品规格</i-Button>
    </template>
    <i-table :columns="specificationTableColumns" :data="specificationTableData" border size="large">
      <template #action="{ row, index }">
        <i-Button size="small" style="margin-right: 10px" type="primary" @click="onSpecificationEdit(row)">编辑
        </i-Button>
        <i-Button size="small" type="error" @click="onDelSpecification(row)">删除</i-Button>
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
        <FormItem label="规格名称" prop="productName" required>
          <i-input v-model="editModalData.specificationName" clearable placeholder="Enter something..."
                   style="width: 250px;"></i-input>
        </FormItem>
      </i-form>
    </Modal>
    <!--    <Page :total></Page>-->
  </PageContainer>
</template>

<style lang="less" scoped>

</style>