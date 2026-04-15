import React from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from "./pages/dashboard";
import Header from "./layouts/header";
import Sidebar from "./layouts/sidebar";
import './assets/tailwind.css';

createRoot(document.getElementById('root'))
.render(
  <div id="app-container" className="bg-pink-200 min-h-screen flex flex-col">

    <div id="layout-wrapper" className="flex flex-row flex-1">
          <Sidebar />
      <div id="main-content" className="flex-1 p-4">
        <Header/>
        <Dashboard />
      </div>
    </div>
  </div>
)
