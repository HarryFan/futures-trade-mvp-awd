<template>
  <div class="home-view">
    <h2>期貨 K 線圖展示</h2>
    <KLineChart />
  </div>
</template>

<script setup lang="ts">
import KLineChart from '@/components/KLineChart.vue'
</script>

<style scoped>
.home-view {
  padding: 1rem;
}
</style>
