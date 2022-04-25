import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from "./components/Shop";
import Layout from './components/Layout'

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import RequireAuth from "./components/hoc/RequireAuth";
import { AuthProvider } from "./components/hoc/AuthProvider";

function App() {
 
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />

              <Route path="products" element={
                <RequireAuth>
                  <Shop />
                </RequireAuth>
              } />

              <Route path="product/:id" element={
               <RequireAuth>
                 <Product />
               </RequireAuth>
              } />

              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
