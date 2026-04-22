import React from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from "./pages/Dashboard";
import Header from "./layouts/header";
import Sidebar from "./layouts/sidebar";
import { Link, Route, Routes } from "react-router-dom"
import './assets/tailwind.css';

import { useState } from 'react'
import Orders from './pages/orders';
import Customers from './pages/Customers';
import NotFound from './pages/NotFound';
// import reactLogo from './assets/react.svg' enggak dipakai
// import viteLogo from '/vite.svg' enggak dipakai
// import './App.css'

function App() {
  // const [count, setCount] = useState(0) enggak dipakai

  return (
    <div id="app-container" className="bg-pink-200 min-h-screen flex flex-col">

      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />

          {/* <Dashboard /> */}
           <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/Customers" element={<Customers />} />

            {/* Kalau kita klik selain yang diatas, dia akan menampilkan halaman notFound */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
