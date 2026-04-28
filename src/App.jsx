import React from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from "./pages/Dashboard";
import { Link, Route, Routes } from "react-router-dom"
import './assets/tailwind.css';

import { useState } from 'react'
import Orders from './pages/orders';
import Customers from './pages/Customers';
import NotFound from './pages/NotFound';
import Error400 from './pages/Error400';
import Error401 from './pages/Error401';
import Error403 from './pages/Error403';
import MainLayout from './layouts/MainLayout';

import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Auth/login';
import Register from './pages/Auth/Register';
import Forgot from './pages/Auth/Forgot';
// import reactLogo from './assets/react.svg' enggak dipakai
// import viteLogo from '/vite.svg' enggak dipakai
// import './App.css'

export default function App() {
  // const [count, setCount] = useState(0) enggak dipakai


  // kalau kita tambahkan comment 1 baris setelah return.. dia langsung error
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/Customers" element={<Customers />} />


        {/* Kalau kita klik selain yang diatas, dia akan menampilkan halaman notFound */}

        <Route path="/Error400" element={<Error400 />} />
        <Route path="/Error401" element={<Error401 />} />
        <Route path="/Error403" element={<Error403 />} />

        {/* Error 404 selalu berada di akhir  */}
        <Route path="*" element={<NotFound />} />

      </Route>

      <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
      </Route>

    </Routes>

  )
}

