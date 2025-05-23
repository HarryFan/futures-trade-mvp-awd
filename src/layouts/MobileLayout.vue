<template>
  <div class="mobile-layout">
    <header class="header">
      <h1>期貨交易 (手機版)</h1>
    </header>
    <main class="main-content">
      <router-view />
    </main>
    <nav class="bottom-nav">
      <router-link to="/" class="nav-item">首頁</router-link>
      <router-link to="/market" class="nav-item">市場</router-link>
      <router-link to="/trade" class="nav-item">交易</router-link>
      <router-link to="/account" class="nav-item">帳戶</router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
.mobile-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
}

.header {
  padding: 1rem;
  background-color: #1976d2;
  color: white;
  text-align: center;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.bottom-nav {
  display: flex;
  justify-content: space-around;
  padding: 0.75rem 0;
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;
}

.nav-item {
  text-decoration: none;
  color: #333;
  padding: 0.5rem;
  text-align: center;
  flex: 1;
}

.nav-item.router-link-active {
  color: #1976d2;
  font-weight: bold;
}
</style>
