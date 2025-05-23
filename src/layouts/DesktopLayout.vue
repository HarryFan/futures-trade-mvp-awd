<template>
  <div class="desktop-layout">
    <header class="header">
      <h1>期貨交易系統</h1>
      <div class="user-menu">
        <span>使用者名稱</span>
        <button>登出</button>
      </div>
    </header>
    <div class="content-wrapper">
      <aside class="sidebar">
        <h2>商品列表</h2>
        <ul>
          <li>台指期</li>
          <li>電子期</li>
          <li>金融期</li>
          <li>小型台指期</li>
          <li>台指選擇權</li>
        </ul>
      </aside>
      <main class="main-content">
        <router-view />
      </main>
      <aside class="order-panel">
        <h3>下單面板</h3>
        <div class="order-form">
          <div class="form-group">
            <label>買/賣</label>
            <select>
              <option>買進</option>
              <option>賣出</option>
            </select>
          </div>
          <div class="form-group">
            <label>價格</label>
            <input type="number" />
          </div>
          <div class="form-group">
            <label>數量</label>
            <input type="number" value="1" min="1" />
          </div>
          <button class="submit-btn">下單</button>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
.desktop-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background-color: #1976d2;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-menu button {
  padding: 0.25rem 0.75rem;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.content-wrapper {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  width: 220px;
  background-color: #f9f9f9;
  padding: 1.5rem 1rem;
  border-right: 1px solid #e0e0e0;
  overflow-y: auto;
}

.sidebar h2 {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #333;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 0.65rem 0.75rem;
  margin: 0.25rem 0;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
}

.sidebar li:hover {
  background-color: #e3f2fd;
  color: #1976d2;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background-color: #fff;
}

.order-panel {
  width: 280px;
  background-color: #f5f7fa;
  padding: 1.5rem 1rem;
  border-left: 1px solid #e0e0e0;
  overflow-y: auto;
}

.order-panel h3 {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #333;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e0e0e0;
}

.order-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  color: #555;
}

.form-group select,
.form-group input {
  padding: 0.5rem 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.submit-btn {
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #43a047;
}
</style>
