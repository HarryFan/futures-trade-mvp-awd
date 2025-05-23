<template>
  <div class="large-layout">
    <header class="header">
      <div class="header-content">
        <h1>期貨交易系統 - 專業版</h1>
        <div class="header-actions">
          <div class="market-hours">
            <span>交易時段: 08:45 - 13:45</span>
            <span class="market-status open">交易中</span>
          </div>
          <div class="user-menu">
            <span class="username">使用者名稱</span>
            <button class="btn-logout">登出</button>
          </div>
        </div>
      </div>
    </header>
    <div class="content-wrapper">
      <aside class="left-sidebar">
        <div class="watchlist">
          <h3>自選商品</h3>
          <div class="watchlist-items">
            <div class="watchlist-item active">
              <span class="symbol">TX</span>
              <span class="price up">17,245</span>
              <span class="change">+125</span>
            </div>
            <div class="watchlist-item">
              <span class="symbol">TE</span>
              <span class="price down">890</span>
              <span class="change negative">-5.5</span>
            </div>
            <div class="watchlist-item">
              <span class="symbol">TF</span>
              <span class="price up">1,785</span>
              <span class="change">+8</span>
            </div>
          </div>
        </div>
        <div class="quick-actions">
          <button class="btn-quick">閃電下單</button>
          <button class="btn-quick">條件單</button>
          <button class="btn-quick">策略下單</button>
        </div>
      </aside>
      <main class="main-content">
        <router-view />
      </main>
      <aside class="right-sidebar">
        <div class="order-panel">
          <h3>下單面板</h3>
          <div class="tabs">
            <button class="tab active">限價單</button>
            <button class="tab">市價單</button>
            <button class="tab">停損單</button>
          </div>
          <div class="order-form">
            <div class="form-group">
              <label>買/賣</label>
              <div class="btn-group">
                <button class="btn-buy active">買進</button>
                <button class="btn-sell">賣出</button>
              </div>
            </div>
            <div class="form-group">
              <label>價格</label>
              <div class="input-with-actions">
                <input type="number" value="17245" />
                <div class="price-actions">
                  <button>+</button>
                  <button>-</button>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>數量</label>
              <div class="quantity-selector">
                <button>-</button>
                <input type="number" value="1" min="1" />
                <button>+</button>
              </div>
            </div>
            <div class="form-group">
              <label>倉別</label>
              <select>
                <option>新倉</option>
                <option>平倉</option>
                <option>當沖</option>
              </select>
            </div>
            <button class="btn-submit">下單</button>
          </div>
        </div>
        <div class="position-summary">
          <h3>部位摘要</h3>
          <div class="position-empty">
            <p>目前沒有未平倉部位</p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
.large-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
  background-color: #f0f2f5;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.header {
  background-color: #1a237e;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.header-content {
  max-width: 1800px;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  color: white;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.market-hours {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
}

.market-status {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.market-status.open {
  background-color: #4caf50;
  color: white;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.username {
  font-weight: 500;
}

.btn-logout {
  padding: 0.4rem 1rem;
  background-color: #3949ab;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-logout:hover {
  background-color: #303f9f;
}

.content-wrapper {
  display: flex;
  flex: 1;
  overflow: hidden;
  max-width: 1800px;
  margin: 0 auto;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
}

.left-sidebar {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.watchlist {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.watchlist h3 {
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  margin: 0;
  border-bottom: 1px solid #eee;
  background-color: #f8f9fa;
}

.watchlist-items {
  padding: 0.5rem 0;
}

.watchlist-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.watchlist-item:hover {
  background-color: #f8f9fa;
}

.watchlist-item.active {
  background-color: #e3f2fd;
}

.symbol {
  font-weight: 500;
  color: #333;
}

.price {
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
}

.price.up {
  color: #f44336;
}

.price.down {
  color: #4caf50;
}

.change {
  font-size: 0.85rem;
  font-family: 'Roboto Mono', monospace;
}

.change.negative {
  color: #4caf50;
}

.quick-actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.btn-quick {
  padding: 0.6rem 0.5rem;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-quick:hover {
  background-color: #f5f5f5;
  border-color: #bdbdbd;
}

.main-content {
  flex: 1;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.right-sidebar {
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.order-panel {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.order-panel h3 {
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  margin: 0;
  border-bottom: 1px solid #eee;
  background-color: #f8f9fa;
}

.tabs {
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 0 0.5rem;
}

.tab {
  flex: 1;
  padding: 0.75rem 0.5rem;
  text-align: center;
  font-size: 0.85rem;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  color: #666;
}

.tab.active {
  color: #1a73e8;
  border-bottom-color: #1a73e8;
  font-weight: 500;
}

.order-form {
  padding: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: #555;
}

.btn-group {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.btn-buy,
.btn-sell {
  flex: 1;
  padding: 0.5rem;
  border: none;
  background: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-buy {
  color: #f44336;
}

.btn-sell {
  color: #4caf50;
}

.btn-buy.active {
  background-color: #ffebee;
}

.btn-sell.active {
  background-color: #e8f5e9;
}

.input-with-actions {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.input-with-actions input {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: none;
  font-size: 1rem;
  text-align: right;
}

.price-actions {
  display: flex;
  flex-direction: column;
  border-left: 1px solid #eee;
}

.price-actions button {
  flex: 1;
  padding: 0 0.5rem;
  background: white;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: #666;
}

.price-actions button:hover {
  background-color: #f5f5f5;
}

.quantity-selector {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.quantity-selector button {
  width: 36px;
  background: #f5f5f5;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.quantity-selector button:hover {
  background: #e0e0e0;
}

.quantity-selector input {
  flex: 1;
  padding: 0.5rem;
  border: none;
  text-align: center;
  font-size: 1rem;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}

select {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: white;
  cursor: pointer;
}

.btn-submit {
  width: 100%;
  padding: 0.75rem;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 0.5rem;
}

.btn-submit:hover {
  background-color: #1557b0;
}

.position-summary {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.position-summary h3 {
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  margin: 0;
  border-bottom: 1px solid #eee;
  background-color: #f8f9fa;
}

.position-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 0.9rem;
  padding: 2rem 1rem;
  text-align: center;
}
</style>
