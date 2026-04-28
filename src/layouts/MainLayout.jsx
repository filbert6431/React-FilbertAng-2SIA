import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";


export default function MainLayout() {
return(

<div id="app-container" className="bg-pink-200 min-h-screen flex flex-col">

      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />

          
            <Outlet/>
        </div>
      </div>
    </div>

)

}