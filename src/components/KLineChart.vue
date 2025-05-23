<template>
  <div class="kline-chart-container">
    <div ref="chartContainer" class="kline-chart"></div>
    <div v-if="loading" class="chart-loading">載入中...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { init, dispose, KLineData } from 'klinecharts'
import 'klinecharts/dist/klinecharts.css'

const chartContainer = ref<HTMLElement | null>(null)
const chart = ref<any>(null)
const loading = ref(true)

// 假資料產生
function mockKLineData(): KLineData[] {
  const data: KLineData[] = []
  let base = 17000
  let timestamp = Date.now() - 100 * 60 * 1000
  for (let i = 0; i < 100; i++) {
    const open = base + Math.random() * 40 - 20
    const close = open + Math.random() * 20 - 10
    const high = Math.max(open, close) + Math.random() * 10
    const low = Math.min(open, close) - Math.random() * 10
    const volume = Math.floor(Math.random() * 1000) + 500
    data.push({
      timestamp,
      open,
      high,
      low,
      close,
      volume
    })
    timestamp += 60 * 1000
    base = close
  }
  return data
}

onMounted(() => {
  if (chartContainer.value) {
    chart.value = init(chartContainer.value)
    chart.value.applyNewData(mockKLineData())
    loading.value = false
  }
})

onBeforeUnmount(() => {
  if (chart.value && chartContainer.value) {
    dispose(chartContainer.value)
  }
})
</script>

<style scoped>
.kline-chart-container {
  width: 100%;
  height: 400px;
  position: relative;
}
.kline-chart {
  width: 100%;
  height: 100%;
}
.chart-loading {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.7);
  color: #1976d2;
  font-size: 1.2rem;
  z-index: 10;
}
</style>
