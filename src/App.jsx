import React from 'react';
import { createRoot } from 'react-dom/client';
import { Link, Route, Routes } from "react-router-dom"
import './assets/tailwind.css';
import { Suspense } from 'react';
import Loading from './components/loading';

// import reactLogo from './assets/react.svg' enggak dipakai
// import viteLogo from '/vite.svg' enggak dipakai
// import './App.css'

export default function App() {
  // const [count, setCount] = useState(0) enggak dipakai

  // react lazy digunakan agar misalnya saat akses halaman login
  // dia tidak ngeload halaman Orders / Customers

const MainLayout = React.lazy(() => import("./layouts/MainLayout")) 
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customers"))

const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Login = React.lazy(() => import("./pages/Auth/Login"))
const Register = React.lazy(() => import("./pages/Auth/Register"))
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"))


const Error400 = React.lazy(() => import("./pages/Error400"))
const Error401 = React.lazy(() => import("./pages/Error401"))
const Error403 = React.lazy(() => import("./pages/Error403"))
const NotFound = React.lazy(() => import("./pages/NotFound"))


  // kalau kita tambahkan comment 1 baris setelah return.. dia langsung error
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>

  )
}

