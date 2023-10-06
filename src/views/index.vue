<template>
  <div class="index">
    <Row style="background:#eee;padding:20px">
      <Col span="24">
      <Card :bordered="false">
        <template #title><span class="card-title">数据总览</span></template>
        <Row gutter="10">
          <Col span="6">
          <div class="data-show-container" @click="onDataShowClick('/orders')">
            <div class="data-show">
              <div class="data-icon">
                <Icon type="logo-usd" style="color: #FF4967;" />
              </div>
              <div class="data">
                <div class="quantity">999,99</div>
                <div class="title">今日营业额</div>
              </div>
            </div>
          </div>
          </Col>
          <Col span="6">
          <div class="data-show-container">
            <div class="data-show">
              <div class="data-icon">
                <Icon type="ios-list-box" style="color: #5EDBFF;" />
              </div>
              <div class="data">
                <div class="quantity">24</div>
                <div class="title">订单数量</div>
              </div>
            </div>
          </div>
          </Col>
          <!-- #x -->
          <Col span="6">
          <div class="data-show-container">
            <div class="data-show">
              <div class="data-icon">
                <Icon type="ios-grid" style="color: #59CD62;" />
              </div>
              <div class="data">
                <div class="quantity">3</div>
                <div class="title">库存预警</div>
              </div>
            </div>
          </div>
          </Col>
          <Col span="6">
          <div class="data-show-container">
            <div class="data-show">
              <div class="data-icon">
                <Icon type="md-contacts" style="color: #8997FA;" />
              </div>
              <div class="data">
                <div class="quantity">200</div>
                <div class="title">会员人数</div>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </Card>
      </Col>
    </Row>
    <Row style="background:#eee;padding:20px" gutter="10">
      <Col span="12">
      <Card :bordered="false">
        <template #title>
          <span class="card-title" style="height: 400px;">酒品销量</span>
          <div id="beer-sales-volume-chats" style="height: 400px;"></div>
        </template>
      </Card>
      </Col>
      <Col span="12">
      <Card :bordered="false">
        <template #title>
          <span class="card-title">菜品销量</span>
          <div id="draw-foods-sales-volume-chats" style="height: 400px;"></div>
        </template>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import * as echarts from 'echarts';

const router = useRouter()
onMounted(() => {
  drawBeerSalesVolumeChats()
  drawFoodsSalesVolumeChats()
})

const onDataShowClick = (url) => {
  router.push(url)
}

const drawBeerSalesVolumeChats = () => {
  const chartDom = document.getElementById('beer-sales-volume-chats');
  const myChart = echarts.init(chartDom);
  let option;

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['德式', '比利时', '浑浊', '小麦王', '欧尼酱', '蜜桃', '哈密瓜'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '销售量',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
        itemStyle: {
          normal: {
            color: ' #2D8CF0'
          }
        }

        // 
      }
    ]
  };

  option && myChart.setOption(option);
}
const drawFoodsSalesVolumeChats = () => {
  const chartDom = document.getElementById('draw-foods-sales-volume-chats');
  const myChart = echarts.init(chartDom);
  let option;

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['小汉堡', '薯条', '鸡翅', '芥末花生', '麻辣锅底', '牛肉卷', '牛肉丸'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '销售量',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
        itemStyle: {
          normal: {
            color: ' #FFD700'
          }
        }
      }
    ]
  };

  option && myChart.setOption(option);
}
</script>
<style lang="less">
.index {
  overflow-x: hidden;

  .card-title {
    font-weight: bold;
    color: black;
    // font-size: 20px;
  }

  .data-show-container {
    cursor: pointer;
    color: #303133;

    .data-show {
      align-items: center;
      // justify-content: s;
      display: flex;
      // width: 500px;
      height: 100px;

      .data-icon {
        margin-left: 15px;
        font-size: 40px;
      }

      .data {
        margin-left: 20px;

        .title {
          font-size: 12px;
          // font-weight: bold;
        }

        .quantity {
          font-size: 25px;
          font-weight: 700;

        }
      }
    }
  }
}
</style>