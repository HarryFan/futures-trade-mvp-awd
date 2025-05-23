📝 Futures Trading MVP - PRD（Product Requirement Document）

🎯 專案目標

本專案旨在打造一個具備 AWD（Adaptive Web Design）架構的期貨模擬交易平台 MVP，支援桌面與手機裝置自適應顯示。平台將提供使用者友善的 K 線圖瀏覽、常見技術指標查詢與基礎互動功能，作為日後導入下單與數據分析功能的基礎架構。

📌 關鍵功能模組

1. K 線圖顯示模組

採用 klinecharts 套件實作

支援滑動、拖拉與縮放操作

呈現 OHLC（開高低收）與成交量資訊

手機裝置支援全螢幕顯示模式

2. 技術指標模組

提供 MA、MACD、BOLL 等技術指標

支援指標切換、顯示與隱藏功能

提供參數設定區供使用者調整指標參數

3. 裝置導向排版（AWD Layout）

根據裝置螢幕寬度自動切換版型：

Mobile：底部 Tab 導航，單一主區塊展示 K 線圖

Tablet：雙欄排版，圖表與操作功能並列

Desktop：三欄排版，包含商品列表、圖表與功能操作區

Large：四區塊排版，支援高資訊密度顯示

4. 商品選擇與即時資訊區

於側邊或上方展示商品清單與選擇器

實時更新並顯示當前商品的名稱與最新價格

5. 假資料模擬 API（無後端串接）

使用 JSON 模擬商品與圖表資料來源

模擬資料每秒更新一次，測試圖表即時更新能力

🖥️ 技術規格

前端框架：Vue 3 + TypeScript

建構工具：Vite

UI 套件：Vant 4（手機端）、Element Plus（桌面端）

圖表工具：klinecharts

狀態管理：Pinia

路由管理：Vue Router

🔧 專案 Boilerplate 概要

✅ 技術棧

框架：Vue 3 + TypeScript

開發工具：Vite

UI 套件：Vant 4（Mobile）、Element Plus（Desktop）

狀態管理：Pinia

路由管理：Vue Router

裝置偵測：自訂 useDeviceLayout hook（AWD）

圖表套件：klinecharts（可替換為 TradingView lightweight）

📁 專案目錄結構

futures-trade-mvp-awd/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── KLineChart.vue
│   ├── layouts/
│   │   ├── MobileLayout.vue
│   │   ├── TabletLayout.vue
│   │   ├── DesktopLayout.vue
│   │   └── LargeLayout.vue
│   ├── composables/
│   │   └── useDeviceLayout.ts
│   ├── views/
│   │   └── Home.vue
│   ├── App.vue
│   ├── main.ts
│   └── router/
│       └── index.ts
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json

📅 建議開發時程（以 6 月為期）

週次

主要任務內容

第 1 週

建立 Layout 結構、完成 useDeviceLayout hook、建立首頁基本路由

第 2 週

整合 K 線圖模組、實作假資料模擬 API

第 3 週

完成技術指標顯示與參數調整功能、優化各 Layout 樣式

第 4 週

進行錯誤排除、部署上線、撰寫 README 文件與 Demo 測試

✅ MVP 驗收條件



📌 本專案為前端模擬專案，尚未實作實際交易邏輯，僅用於驗證使用者介面與互動流程設計成效。
