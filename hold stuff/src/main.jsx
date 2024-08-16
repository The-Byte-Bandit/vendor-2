import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import navReducer from '../src/features/sideNav.js'
import dashboardReducer from './features/dashboard.js'
import productItemsReducer from './features/products.js'
import orderItemsReducer from './features/orders.js'
import salesPageItemsReducer from './features/sales.js'
import walletPageItemsReducer from './features/wallet.js'
import transactionReducer from './features/transaction.js'
import userProfileReducer from './features/userProfile.js'
import businessDetailsReducer from './features/businessDetails.js'
import paymentSettingsReducer from './features/paymentSettings.js'
import sessionReducer from './features/privacy&security.js'


const store = configureStore({
  reducer: {
    nav: navReducer,
    dashboard:dashboardReducer,
    products: productItemsReducer,
    orders: orderItemsReducer,
    sales: salesPageItemsReducer,
    wallet: walletPageItemsReducer,
    userProfile: userProfileReducer,
    transactionDetails: transactionReducer,
    businessDetails: businessDetailsReducer,
    paymentSettings: paymentSettingsReducer,
    sessions: sessionReducer,
}
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
)
