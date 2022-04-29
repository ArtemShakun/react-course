// react 
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Provider } from 'react-redux';
// store
import store from './store/index';
// react components
import Layout from './components/Layout'

// page
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
 
  return (
      <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<HomePage />} />
              <Route path="products" element={<ShopPage />} />
              <Route path="product/:id" element={<ProductPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </Provider>
  );
}

export default App;
