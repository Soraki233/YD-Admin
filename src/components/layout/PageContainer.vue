<script setup>
const props = defineProps({
  pageTitle: String
})
</script>
<template>
  <div class="page-container">
    <Card style="width:100%">
      <template #title>
        <div class="title">
          <Icon type="ios-film-outline" class="title-icon"></Icon>
          <span class="main-title">{{ props.pageTitle }}</span>
        </div>

      </template>
      <template #extra>
        <slot name="control"></slot>
      </template>
      <slot></slot>
    </Card>
    <!-- <template v-if="props.pageTitle">

    </template>
    <slot name="pageTitle" v-else></slot> -->
  </div>
</template>
<style lang="less">
.page-container {
  //background:#eee;
  .title {

    .title-icon {
      font-size: 20px;
      font-weight: blod;
    }
    .main-title {
      font-size: 18px;
    }
  }

}
</style>