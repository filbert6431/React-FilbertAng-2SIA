import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Dashboard Coffee Shop ☕
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* Total Orders */}
        <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow">
          <div>
            <p className="text-gray-500 text-sm">Total Orders</p>
            <h2 className="text-xl font-bold mt-1">75</h2>
          </div>
          <div className="bg-blue-500 text-white p-3 rounded-full text-xl">
            <FaShoppingCart />
          </div>
        </div>

        {/* Total Delivered */}
        <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow">
          <div>
            <p className="text-gray-500 text-sm">Total Delivered</p>
            <h2 className="text-xl font-bold mt-1">175</h2>
          </div>
          <div className="bg-green-500 text-white p-3 rounded-full text-xl">
            <FaTruck />
          </div>
        </div>

        {/* Total Canceled */}
        <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow">
          <div>
            <p className="text-gray-500 text-sm">Total Canceled</p>
            <h2 className="text-xl font-bold mt-1">40</h2>
          </div>
          <div className="bg-red-500 text-white p-3 rounded-full text-xl">
            <FaBan />
          </div>
        </div>

        {/* Total Revenue */}
        <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow">
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <h2 className="text-xl font-bold mt-1">Rp 128.000</h2>
          </div>
          <div className="bg-yellow-500 text-white p-3 rounded-full text-xl">
            <FaDollarSign />
          </div>
        </div>

      </div>
    </div>
  );
}