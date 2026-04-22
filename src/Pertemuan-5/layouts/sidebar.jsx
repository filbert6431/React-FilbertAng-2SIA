import { BsPeople } from "react-icons/bs"; 
import { TbDashboardOff } from "react-icons/tb"; 
import { FaClipboardList } from "react-icons/fa"; 
import { HiAcademicCap } from "react-icons/hi";

export default function Sidebar() {
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <HiAcademicCap className="text-7xl"/>
                <span id="logo-title" className="font-poppins text-[48px] text-gray-900">
		                Sedap <b id="logo-dot" className="text-hijau">.</b>
		            </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3 ">
                    <li>
	                    <div id="menu-1" className="hover:text-hijau flex cursor-pointer items-center
                         rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                        <TbDashboardOff className="text-xl mr-2 "/>
                         Dashboard</div>
	                  </li>
                    <li>
	                    <div id="menu-2" className="hover:text-hijau flex cursor-pointer items-center
                         rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold space-x-2">
                           <FaClipboardList  className="text-xl mr-2"/>
                           
                            Orders</div>
	                  </li>
	                  <li>
	                    <div id="menu-3" className="hover:text-hijau flex cursor-pointer items-center 
                        rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <BsPeople className="text-xl mr-2"/> 
                            Customers</div>
	                  </li>
                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3
                                                      bg-white rounded-md space-x-2" >
                            <span className="text-gray-600 flex items-center">Add Menus</span>
                        </div>
                    </div>
                    <img id="footer-avatar" className = "text-gray-600 flex items-center" src="<FaClipboardList />https://avatar.iran.liara.run/public/28" />
                </div>
                <span id="footer-brand" className="text-gray-600 flex items-center">Sedap Restaurant Admin Dashboard</span>
                <p id="footer-copyright" className="text-gray-600 flex items-center">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}
