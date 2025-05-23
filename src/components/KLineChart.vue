<template>
  <div class="kline-chart-container" :class="{ 'fullscreen': isFullscreen }">
    <div class="chart-header" v-if="!isFullscreen">
      <h3>{{ currentSymbol }}</h3>
      <div class="chart-actions">
        <button @click="zoomIn">+</button>
        <button @click="zoomOut">-</button>
        <button @click="toggleFullscreen" v-if="isMobile">
          {{ isFullscreen ? '退出全螢幕' : '全螢幕' }}
        </button>
      </div>
    </div>
    <div ref="chartContainer" class="kline-chart"></div>
    <div v-if="loading" class="chart-loading">載入中...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { init, dispose, KLineChart } from 'klinecharts'
import type { KLineData } from 'klinecharts'
import 'klinecharts/dist/klinecharts.css'

// 商品資料
interface Product {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  volume: number
}

// 商品列表
const products: Product[] = [
  { symbol: 'BTCUSDT', name: '比特幣/美元', price: 0, change: 0, changePercent: 0, volume: 0 },
  { symbol: 'ETHUSDT', name: '以太幣/美元', price: 0, change: 0, changePercent: 0, volume: 0 },
  { symbol: 'SOLUSDT', name: 'Solana/美元', price: 0, change: 0, changePercent: 0, volume: 0 }
]

// 當前選擇的商品
const currentProductIndex = ref(0)
const currentSymbol = computed(() => products[currentProductIndex.value].symbol)

const chartContainer = ref<HTMLElement | null>(null)
const chart = ref<KLineChart | null>(null)
const loading = ref(true)
const isFullscreen = ref(false)
const isMobile = ref(window.innerWidth < 768)

// 監聽視窗大小變化
const handleResize = () => {
  isMobile.value = window.innerWidth < 768
  if (!isFullscreen.value && chart.value && chartContainer.value) {
    chart.resize(chartContainer.value.offsetWidth, chartContainer.value.offsetHeight)
  }
}

// 切換全螢幕
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
  if (chart.value && chartContainer.value) {
    // 延遲調整大小以確保 DOM 已更新
    setTimeout(() => {
      chart.value?.resize(chartContainer.value?.offsetWidth, chartContainer.value?.offsetHeight)
      chart.value?.resize()
    }, 100)
  }
}

// 縮放功能
const zoomIn = () => {
  if (chart.value) {
    const range = chart.value.getVisibleRange()
    const newRange = { from: range.from + 10, to: range.to - 10 }
    if (newRange.to - newRange.from > 10) {
      chart.value.setVisibleRange(newRange)
    }
  }
}

const zoomOut = () => {
  if (chart.value) {
    const range = chart.value.getVisibleRange()
    const newRange = { from: range.from - 10, to: range.to + 10 }
    chart.value.setVisibleRange(newRange)
  }
}

// 產生模擬 K 線數據
function generateKLineData(symbol: string, count: number = 100): KLineData[] {
  const basePrice = {
    'BTCUSDT': 60000,
    'ETHUSDT': 3000,
    'SOLUSDT': 150
  }[symbol] || 100

  const volatility = {
    'BTCUSDT': 0.01,
    'ETHUSDT': 0.015,
    'SOLUSDT': 0.02
  }[symbol] || 0.01

  const data: KLineData[] = []
  let price = basePrice
  let timestamp = Date.now() - count * 60 * 1000

  for (let i = 0; i < count; i++) {
    const change = (Math.random() - 0.5) * 2 * volatility * price
    const open = price
    const close = open + change
    const high = Math.max(open, close) * (1 + Math.random() * volatility)
    const low = Math.min(open, close) * (1 - Math.random() * volatility)
    const volume = Math.floor(1000 + Math.random() * 1000)

    data.push({
      timestamp,
      open: Number(open.toFixed(2)),
      high: Number(high.toFixed(2)),
      low: Number(low.toFixed(2)),
      close: Number(close.toFixed(2)),
      volume: Number(volume.toFixed(2))
    })

    timestamp += 60 * 1000
    price = close
  }

  // 更新商品價格資訊
  const product = products.find(p => p.symbol === symbol)
  if (product) {
    const last = data[data.length - 1]
    const prevClose = data[data.length - 2]?.close || last.open
    product.price = last.close
    product.change = last.close - prevClose
    product.changePercent = (product.change / prevClose) * 100
    product.volume = data.reduce((sum, d) => sum + (d.volume || 0), 0)
  }

  return data
}

// 模擬即時更新數據
let updateInterval: number | null = null

function startDataUpdate() {
  if (updateInterval) clearInterval(updateInterval)
  
  updateInterval = window.setInterval(() => {
    if (chart.value) {
      const newData = generateKLineData(currentSymbol.value, 1)[0]
      chart.value.updateData(newData)
    }
  }, 1000)
}

function stopDataUpdate() {
  if (updateInterval) {
    clearInterval(updateInterval)
    updateInterval = null
  }
}

onMounted(() => {
  if (chartContainer.value) {
    // 初始化圖表
    chart.value = init(chartContainer.value, {
      styles: {
        grid: {
          show: true,
          horizontal: {
            show: true,
            size: 1,
            color: '#EDEDED',
            style: 'dashed'
          },
          vertical: {
            show: true,
            size: 1,
            color: '#EDEDED',
            style: 'dashed'
          }
        },
        candle: {
          priceMark: {
            high: {
              show: true
            },
            low: {
              show: true
            }
          },
          tooltip: {
            showRule: 'always',
            showType: 'standard',
            labels: ['時間', '開', '高', '低', '收', '成交量'],
            values: (kLineData: any) => {
              const data = kLineData.current || kLineData
              return [
                { value: new Date(data.timestamp).toLocaleString() },
                { value: data.open.toFixed(2) },
                { value: data.high.toFixed(2) },
                { value: data.low.toFixed(2) },
                { value: data.close.toFixed(2) },
                { value: data.volume.toFixed(2) }
              ]
            }
          }
        }
      }
    })

    // 載入初始數據
    chart.value.applyNewData(generateKLineData(currentSymbol.value))
    loading.value = false
    
    // 開始更新數據
    startDataUpdate()
    
    // 監聽視窗大小變化
    window.addEventListener('resize', handleResize)
  }
})

onBeforeUnmount(() => {
  // 停止數據更新
  stopDataUpdate()
  
  // 移除事件監聽
  window.removeEventListener('resize', handleResize)
  
  // 銷毀圖表
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
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.kline-chart {
  width: 100%;
  height: 100%;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f8f9fa;
}

.chart-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
}

.chart-actions {
  display: flex;
  gap: 8px;
}

.chart-actions button {
  padding: 4px 8px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s;
}

.chart-actions button:hover {
  background: #f0f0f0;
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
  background: rgba(255, 255, 255, 0.8);
  color: #1976d2;
  font-size: 1.2rem;
  z-index: 10;
  backdrop-filter: blur(2px);
}

/* 全螢幕樣式 */
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  border-radius: 0;
  margin: 0;
  padding: 0;
}

.fullscreen .kline-chart {
  height: calc(100% - 41px);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .kline-chart-container {
    height: 300px;
  }
  
  .chart-header {
    padding: 6px 12px;
  }
  
  .chart-header h3 {
    font-size: 0.9rem;
  }
  
  .chart-actions button {
    padding: 3px 6px;
    font-size: 0.75rem;
  }
}
</style>
