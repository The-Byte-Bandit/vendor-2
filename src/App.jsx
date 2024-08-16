// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// // import "../node_modules/"

// import {Navigate, BrowserRouter as  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

// import './App.css';
// import Dashboard from './Pages/dashboard.jsx';
// import ComingSoon from './Pages/comingSoon';
// import AddProductPage from './Pages/addProduct.jsx';
// import AddOrdersPage from './Pages/addOrders.jsx';
// import Orders from './Pages/orders.jsx';
// import Products from './Pages/products.jsx';
// import Sales from './Pages/sales.jsx';
// import Support from './Pages/support.jsx';
// import Wallet from './Pages/wallet.jsx';
// import SignUp from "./Pages/signup.jsx";
// import HomeLayout from "./layouts/homeLayout.jsx";
// import DashboardLayout from "./layouts/dashboardLayout.jsx"
// import ProductsLayout from "./layouts/productLayout.jsx";
// import Login from "./Pages/login.jsx";
// import ForgotPassword from "./Pages/forgotpassword.jsx";
// import OrdersLayout from "./layouts/ordersLayout";
// import SalesLayout from "./layouts/salesLayout.jsx";
// import SettingsLayout from "./layouts/settingsLayout.jsx";
// import AccountSettings from "./Pages/accountSettings.jsx";
// import PrivacySettings from "./Pages/privacySettings.jsx";
// import NotificationSettings from "./Pages/notificationSettings.jsx";
// import PaymentSettings from "./Pages/paymentSettings.jsx";

// import SendOtp from "./Pages/sendOTP";
// import ChangePassword from "./Pages/changePassword";
// import WalletLayout from "./layouts/walletLayout";

// // Define the router configuration
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//     <Route path="/" element={<HomeLayout />}>
//       <Route index element={<Navigate to="/home" />} />
//       <Route path="home">
//         <Route index element={<Navigate to="dashboard" />} />
//         <Route exact path="dashboard">
//           <Route element={<DashboardLayout />}> 
//           <Route index element={<Dashboard />} /> 
//           <Route path="add-product" element={<AddProductPage />} />
//           </Route>
//         </Route>



//         <Route exact path="orders">
//           <Route element={<OrdersLayout />}> 
//             <Route index element={<Orders />} /> 
//           <Route path="add-orders" element={<AddOrdersPage />} />
//           </Route>
//         </Route>
        
//         <Route exact path="products">
//           <Route element={<ProductsLayout />}> 
//             <Route index element={<Products />} /> 
//           <Route path="add-product" element={<AddProductPage />} />
//           </Route>
//         </Route>

        
    
//         {/* <Route exact path="settings">
//           <Route element={<SettingsLayout />}> 
//             <Route index element={<Settings />} /> 
//           <Route path="acount-settings" element={<AccountSettings />} />
//           <Route path="payment-settings" element={<PaymentSettings />} />
//           <Route path="notification-settings" element={<NotificationSettings />} />
//           <Route path="privacy-settings" element={<PrivacySettings />} />
//           </Route>
//         </Route> */}

        
//         {/* <Route path="settings"> */}
//           <Route exact path="settings">
//             <Route element={<SettingsLayout />}> 
//               <Route index element={<AccountSettings />} /> 
//               <Route path="acount-settings" element={<AccountSettings />} />
//               <Route path="payment-settings" element={<PaymentSettings />} />
//               <Route path="notification-settings" element={<NotificationSettings />} />
//               <Route path="privacy-settings" element={<PrivacySettings />} />
//             </Route>
//           </Route>


//           <Route exact path="sales">
//             <Route element={<SalesLayout />}> 
//               <Route index element={<Sales />} /> 
//             </Route>
//           </Route>

//           <Route exact path="wallet">
//             <Route element={<WalletLayout />}> 
//               <Route index element={<Wallet />} /> 
//             </Route>
//           </Route>
// {/* 
//         <Route path="sales" element={<Sales />} /> */}
//         {/* <Route path="settings" element={<Settings />} /> */}
//         <Route path="support" element={<Support />} />
//         {/* <Route path="wallet" element={<Wallet />} /> */}
//       </Route>
//     </Route>

//     {/* <Route path="/coming-soon" element={<ComingSoon />} /> */}
//     <Route path="/signup" element={<SignUp />} /> {/* Signup route outside HomeLayout */}
//     <Route path="/forgotpassword" element={<ForgotPassword/>} /> {/* Signup route outside HomeLayout */}
//     <Route path="/changepassword" element={<ChangePassword/>} /> {/* Signup route outside HomeLayout */}
//     <Route path="/login" element={<Login />} /> {/* login route outside HomeLayout */}
//     <Route path="/sendotp" element={<SendOtp/>} /> {/* login route outside HomeLayout */}
//     <Route path="/coming-soon" element={<ComingSoon />} /> {/* Coming soon route outside HomeLayout */}
//     </>
    
//   )
// );

// function App() {
//   return (
//     <div className="max-w-[100%]">
//       <RouterProvider router={router} >

//       </RouterProvider>
//     </div>
    
//   );
// }

// export default App;




import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import Dashboard from './Pages/dashboard.jsx';
import ComingSoon from './Pages/comingSoon';
import AddProductPage from './Pages/addProduct.jsx';
import AddOrdersPage from './Pages/addOrders.jsx';
import Orders from './Pages/orders.jsx';
import Products from './Pages/products.jsx';
import Sales from './Pages/sales.jsx';
import Support from './Pages/support.jsx';
import Wallet from './Pages/wallet.jsx';
import SignUp from "./Pages/signup.jsx";
import HomeLayout from "./layouts/homeLayout.jsx";
import DashboardLayout from "./layouts/dashboardLayout.jsx"
import ProductsLayout from "./layouts/productLayout.jsx";
import Login from "./Pages/login.jsx";
import ForgotPassword from "./Pages/forgotpassword.jsx";
import OrdersLayout from "./layouts/ordersLayout";
import SalesLayout from "./layouts/salesLayout.jsx";
import SettingsLayout from "./layouts/settingsLayout.jsx";
import AccountSettings from "./Pages/accountSettings.jsx";
import PrivacySettings from "./Pages/privacySettings.jsx";
import NotificationSettings from "./Pages/notificationSettings.jsx";
import PaymentSettings from "./Pages/paymentSettings.jsx";
import SendOtp from "./Pages/sendOTP";
import ChangePassword from "./Pages/changePassword";
import WalletLayout from "./layouts/walletLayout";

function App() {
  return (
    <div className="max-w-[100%]">
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home">
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="add-product" element={<AddProductPage />} />
              </Route>
              <Route path="orders" element={<OrdersLayout />}>
                <Route index element={<Orders />} />
                <Route path="add-orders" element={<AddOrdersPage />} />
              </Route>
              <Route path="products" element={<ProductsLayout />}>
                <Route index element={<Products />} />
                <Route path="add-product" element={<AddProductPage />} />
              </Route>
              <Route path="settings" element={<SettingsLayout />}>
                <Route index element={<AccountSettings />} />
                <Route path="account-settings" element={<AccountSettings />} />
                <Route path="payment-settings" element={<PaymentSettings />} />
                <Route path="notification-settings" element={<NotificationSettings />} />
                <Route path="privacy-settings" element={<PrivacySettings />} />
              </Route>
              <Route path="sales" element={<SalesLayout />}>
                <Route index element={<Sales />} />
              </Route>
              <Route path="wallet" element={<WalletLayout />}>
                <Route index element={<Wallet />} />
              </Route>
              <Route path="support" element={<Support />} />
            </Route>
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sendotp" element={<SendOtp />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
