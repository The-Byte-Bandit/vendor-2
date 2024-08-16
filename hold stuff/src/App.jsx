import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/"
import React from 'react'
import {Navigate, BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import SideNav from './components/sideNav';
import './App.css';
import Dashboard from './pages/dashboard';
import ComingSoon from './pages/comingSoon';
import AddProductPage from './pages/addProduct';
import AddOrdersPage from './pages/addOrders';
import Orders from './pages/orders';
import Products from './pages/products';
import Sales from './pages/sales';
import Settings from './pages/settings';
import Support from './pages/support';
import Wallet from './pages/wallet';
import SignUp from "./pages/signup";
import HomeLayout from "./layouts/homeLayout";
import DashboardLayout from "./layouts/dashboardLayout"
import ProductsLayout from "./layouts/productLayout";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotpassword";
import OrdersLayout from "./layouts/ordersLayout";
import SalesLayout from "./layouts/salesLayout";
import SettingsLayout from "./layouts/settingsLayout";
import AccountSettings from "./pages/accountSettings";
import PrivacySettings from "./pages/privacySettings";
import NotificationSettings from "./pages/notificationSettings";
import PaymentSettings from "./pages/paymentSettings";

import SendOtp from "./pages/sendOTP";
import ChangePassword from "./pages/changePassword";
import WalletLayout from "./layouts/walletLayout";

// Define the router configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Navigate to="/home" />} />
      <Route path="home">
        <Route index element={<Navigate to="dashboard" />} />
        <Route exact path="dashboard">
          <Route element={<DashboardLayout />}> 
          <Route index element={<Dashboard />} /> 
          <Route path="add-product" element={<AddProductPage />} />
          </Route>
        </Route>



        <Route exact path="orders">
          <Route element={<OrdersLayout />}> 
            <Route index element={<Orders />} /> 
          <Route path="add-orders" element={<AddOrdersPage />} />
          </Route>
        </Route>
        
        <Route exact path="products">
          <Route element={<ProductsLayout />}> 
            <Route index element={<Products />} /> 
          <Route path="add-product" element={<AddProductPage />} />
          </Route>
        </Route>

        
    
        {/* <Route exact path="settings">
          <Route element={<SettingsLayout />}> 
            <Route index element={<Settings />} /> 
          <Route path="acount-settings" element={<AccountSettings />} />
          <Route path="payment-settings" element={<PaymentSettings />} />
          <Route path="notification-settings" element={<NotificationSettings />} />
          <Route path="privacy-settings" element={<PrivacySettings />} />
          </Route>
        </Route> */}

        
        {/* <Route path="settings"> */}
          <Route exact path="settings">
            <Route element={<SettingsLayout />}> 
              <Route index element={<AccountSettings />} /> 
              <Route path="acount-settings" element={<AccountSettings />} />
              <Route path="payment-settings" element={<PaymentSettings />} />
              <Route path="notification-settings" element={<NotificationSettings />} />
              <Route path="privacy-settings" element={<PrivacySettings />} />
            </Route>
          </Route>


          <Route exact path="sales">
            <Route element={<SalesLayout />}> 
              <Route index element={<Sales />} /> 
            </Route>
          </Route>

          <Route exact path="wallet">
            <Route element={<WalletLayout />}> 
              <Route index element={<Wallet />} /> 
            </Route>
          </Route>
{/* 
        <Route path="sales" element={<Sales />} /> */}
        {/* <Route path="settings" element={<Settings />} /> */}
        <Route path="support" element={<Support />} />
        {/* <Route path="wallet" element={<Wallet />} /> */}
      </Route>
    </Route>

    {/* <Route path="/coming-soon" element={<ComingSoon />} /> */}
    <Route path="/signup" element={<SignUp />} /> {/* Signup route outside HomeLayout */}
    <Route path="/forgotpassword" element={<ForgotPassword/>} /> {/* Signup route outside HomeLayout */}
    <Route path="/changepassword" element={<ChangePassword/>} /> {/* Signup route outside HomeLayout */}
    <Route path="/login" element={<Login />} /> {/* login route outside HomeLayout */}
    <Route path="/sendotp" element={<SendOtp/>} /> {/* login route outside HomeLayout */}
    <Route path="/coming-soon" element={<ComingSoon />} /> {/* Coming soon route outside HomeLayout */}
    </>
    
  )
);

function App() {
  return (
    <div className="max-w-[100%]">
      <RouterProvider router={router} >

      </RouterProvider>
    </div>
    
  );
}

export default App;
