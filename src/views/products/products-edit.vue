<script setup>

import PageContainer from "../../components/layout/PageContainer.vue";
import {onMounted, ref} from "vue";
import {Image, Message, Modal} from "view-ui-plus";
import api from "../../api/index.js";
import {optionsLabel} from "../../utils/index.js";

const modalType = ref(null)
const allProductList = ref([])
const allCategoryList = ref([])
const allSpecificationList = ref([])
const editModalIsShow = ref(false)
const editModalData = ref({productName: null, price: null, prePrice: null, categoryId: null, specificationId: null})
onMounted(() => {
  getAllProducts()
  getAllCategoryAndSpecification()
})
const getAllProducts = () => {
  api.getAllProducts().then(res => {
    console.log(res)
    allProductList.value = res.data
  })
}

const getAllCategoryAndSpecification = () => {
  api.getAllCategory().then(res => {
    if (res.data) {
      allCategoryList.value = optionsLabel(res.data)
    }
  })

  api.getAllSpecification().then(res => {
    if (res.data) {
      allSpecificationList.value = optionsLabel(res.data)
      console.log(allSpecificationList.value)
    }
  })
}

const onAddProduct = () => {
  editModalData.value = {}
  modalType.value = 'add'
  editModalIsShow.value = true
}
const onProductEdit = (productObj) => {
  console.log(productObj)
  modalType.value = 'edit'
  editModalData.value = productObj
  editModalIsShow.value = true
}
// editOneProduct
const confirmToEditProduct = () => {
  if (modalType.value === 'edit') {
    api.editOneProduct({
          id: editModalData.value.id,
          productName: editModalData.value.productName,
          price: editModalData.value.price,
          prePrice: editModalData.value.price,
          categoryId: editModalData.value.categoryId,
          specificationId: editModalData.value.specificationId
        }
    )
        .then(res => {
          getAllProducts()
          Message.success('修改成功')
        }).catch(err => {
      Message.success('修改失败')
    })
  } else {
    api.addOneProduct(editModalData.value).then(res => {
      getAllProducts()
      Message.success('添加成功')
    }).catch(err => {
      Message.success('添加失败')
    })
  }

}
const onProductDel = productObj => {
  //
  Modal.confirm({
    title: '警告',
    content: `是否确认删除 '${productObj.productName}'`,
    onOk: () => {
      const {id, productName} = productObj
      api.delOneProduct({id, productName}).then(res => {
        getAllProducts()
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
  <PageContainer :pageTitle="'商品编辑'">
    <template #control>
      <i-Button type="primary" @click="onAddProduct">添加商品</i-Button>
    </template>
    <Spin v-if="!allProductList||allProductList.length<=0"/>
    <!--    <div class="filter-container">-->
    <!--      <div class="filter">-->
    <!--        -->
    <!--      </div>-->
    <!--    </div>-->
    <div v-if="allProductList&&allProductList.length>0" class="products-edit">
      <template v-for="(product, productIndex) in allProductList">
        <!--    <Col span="6">-->
        <div class="product-edit-container">
          <div class="category">{{ product.categoryName }}</div>
          <div class="product-edit-image">
            <img alt="" src="">
          </div>
          <div class="product-edit-name">{{ product.productName }}</div>
          <div class="product-edit-price">￥{{ product.price }} / {{ product.specificationName }}</div>
          <div class="product-edit-control">
            <i-button type="warning" @click="onProductEdit(product)">编辑
            </i-button>
            <i-button type="error" @click="onProductDel(product)">删除</i-button>
          </div>
          <div class="specification"></div>
        </div>
      </template>

      <Modal
          v-model="editModalIsShow"

          :ok-text=" modalType === 'edit' ? '编辑' : '添加' "
          :title=" modalType === 'edit' ? '编辑商品信息' : '添加商品' "
          cancel-text="取消"
          @on-ok="confirmToEditProduct"
          @on-cancel="cancel">
        <i-form :model="editModalData" label-position="center" label-width="90">
          <FormItem label="商品名称" prop="productName" required>
            <i-input v-model="editModalData.productName" clearable placeholder="Enter something..."
                     style="width: 250px;"></i-input>
          </FormItem>
          <FormItem label="商品价格" prop="price" required>
            <i-input v-model="editModalData.price" clearable number placeholder="Enter something..." required
                     style="width: 250px;"
                     type="number"></i-input>
          </FormItem>
          <FormItem label="过去价格" prop="prePrice" required>
            <i-input v-model="editModalData.prePrice" clearable number placeholder="Enter something..."
                     style="width: 250px;"
                     type="number"></i-input>
          </FormItem>
          <FormItem label="商品类别" prop="categoryId" required>
            <Select v-model="editModalData.categoryId" style="width:200px">
              <Option v-for="item in allCategoryList" :key="item.value" :value="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          <FormItem label="商品规格" prop="specificationId" required>
            <Select v-model="editModalData.specificationId" style="width:200px">
              <Option v-for="item in allSpecificationList" :key="item.value" :value="item.value" clearable>{{
                  item.label
                }}
              </Option>
            </Select>
          </FormItem>

          <Upload
              action="//jsonplaceholder.typicode.com/posts/"
              multiple
              type="drag">
            <div style="padding: 20px 0">
              <Icon size="52" style="color: #017139" type="ios-cloud-upload"></Icon>
              <p>拖拽上传新的商品图片</p>
            </div>
          </Upload>
        </i-form>
      </Modal>
    </div>
  </PageContainer>
</template>

<style lang="less" scoped>
.filter {
  border: 1px solid black;
}

.products-edit {
  //background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .product-edit-container {
    background-color: #017139;
    //border: 1px solid black;
    width: 22%;
    border-radius: 10px;
    margin-bottom: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 10px 0;

    position: relative;

    .category {
      height: 23px;
      width: 50px;
      text-align: center;
      line-height: 23px;
      position: absolute;
      font-size: 12px;
      left: 10px;
      top: 10px;
      background-color: #ed4014;
      color: #fff;
      border-radius: 2px;
    }

    .product-edit-image {
      border: 1px solid grey;
      width: 100px;
      height: 100px;
      background-color: #fff;

      image {
        width: 100px;
        height: 100px;
      }
    }

    .product-edit-name {
      color: #ffffff;
      margin: 10px 0;
      font-size: 14px;
    }

    .product-edit-price {
      margin-bottom: 10px;
      color: #fff;
    }

    .product-edit-control {
      width: 150px;
      display: flex;
      justify-content: space-around;
    }

    .specification {
      margin-top: 10px;
      color: black;
      font-weight: bold;
    }
  }
}
</style>