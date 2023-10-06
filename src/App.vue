<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Sider from './components/layout/Sider.vue'
</script>

<template>
  <div class="app">
    <div class="sider">
      <div class="logo-container">
        <div class="logo">
          <img src="./assets/image/logo.jpg">
        </div>
      </div>
      <Sider class="layout-sider" hide-trigger width="100%"></Sider>
    </div>
    <div style="width: 100%;">
      <RouterView></RouterView>
    </div>
  </div>
  <!--   <div>
    
  </div> -->
</template>
<style scoped lang="less">
.app {
  background:#eee;
  display: flex;
  // height: 100vh;
  overflow: hidden;

  .sider {
    width: 250px;
    overflow: auto;

    .logo-container {
      background-color: #017139;
      // border: solid 1px black;
      height: 150px;
      // width: 239px;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100px;
          height: 100px;
        }
      }

    }

    .layout-sider {
      height: 100vh;
    }


  }
  .sider::-webkit-scrollbar {
      display: none;
    }
}</style>
