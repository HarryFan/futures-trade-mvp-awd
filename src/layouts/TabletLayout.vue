<template>
  <div class="tablet-layout">
    <aside class="sidebar">
      <h2>商品列表</h2>
      <ul>
        <li>台指期</li>
        <li>電子期</li>
        <li>金融期</li>
      </ul>
    </aside>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
.tablet-layout {
  display: flex;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
}

.sidebar {
  width: 200px;
  background-color: #f5f5f5;
  padding: 1rem;
  border-right: 1px solid #e0e0e0;
}

.sidebar h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.2s;
}

.sidebar li:hover {
  color: #1976d2;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}
</style>
