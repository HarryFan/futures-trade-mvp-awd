<script setup lang="ts">
import { computed } from 'vue'
import { useDeviceLayout } from './composables/useDeviceLayout'
import MobileLayout from './layouts/MobileLayout.vue'
import TabletLayout from './layouts/TabletLayout.vue'
import DesktopLayout from './layouts/DesktopLayout.vue'
import LargeLayout from './layouts/LargeLayout.vue'

const { deviceType } = useDeviceLayout()

const layoutComponent = computed(() => {
  switch (deviceType.value) {
    case 'mobile': return MobileLayout
    case 'tablet': return TabletLayout
    case 'desktop': return DesktopLayout
    case 'large': return LargeLayout
    default: return MobileLayout
  }
})
</script>

<template>
  <component :is="layoutComponent" />
</template>

<style>
:root {
  --primary-color: #1976d2;
  --secondary-color: #424242;
  --success-color: #4caf50;
  --danger-color: #f44336;
  --warning-color: #ff9800;
  --info-color: #2196f3;
  --light-bg: #f5f5f5;
  --border-color: #e0e0e0;
  --text-primary: #212121;
  --text-secondary: #757575;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  height: 100%;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-primary);
  background-color: #f9f9f9;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

button {
  cursor: pointer;
  font-family: inherit;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.text-success {
  color: var(--success-color);
}

.text-danger {
  color: var(--danger-color);
}

.text-warning {
  color: var(--warning-color);
}

.text-info {
  color: var(--info-color);
}

/* 響應式工具類 */
.hide-on-mobile {
  @media (max-width: 640px) {
    display: none !important;
  }
}

.hide-on-tablet {
  @media (min-width: 641px) and (max-width: 1024px) {
    display: none !important;
  }
}

.hide-on-desktop {
  @media (min-width: 1025px) {
    display: none !important;
  }
}
</style>


</style>
