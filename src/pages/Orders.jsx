import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/ordersData.json";

export default function Orders() {
    const [orders, setOrders] = useState(ordersData);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        customerName: "",
        status: "Pending",
        totalPrice: "",
        orderDate: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAddOrder = (e) => {
        e.preventDefault();
        if (formData.id && formData.customerName && formData.totalPrice && formData.orderDate) {
            setOrders([...orders, { ...formData, totalPrice: parseInt(formData.totalPrice) }]);
            setFormData({
                id: "",
                customerName: "",
                status: "Pending",
                totalPrice: "",
                orderDate: "",
            });
            setShowForm(false);
        }
    };

    const getStatusBgColor = (status) => {
        switch (status) {
            case "Completed":
                return "bg-emerald-500";
            case "Pending":
                return "bg-amber-500";
            case "Cancelled":
                return "bg-red-500";
            default:
                return "bg-gray-500";
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(amount);
    };

    return (
        <div>
            <PageHeader 
                title="Orders" 
                breadcrumb={["Dashboard", "Orders"]}
            >
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-emerald-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition"
                >
                    + Add Order
                </button>
            </PageHeader>

            {/* Form Section */}
            {showForm && (
                <div className="bg-slate-100 p-5 m-5 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-5 text-slate-800">Add New Order</h2>
                    <form onSubmit={handleAddOrder} className="grid grid-cols-2 gap-5">
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-slate-600 text-sm">Order ID</label>
                            <input
                                type="text"
                                name="id"
                                value={formData.id}
                                onChange={handleInputChange}
                                placeholder="e.g. ORD031"
                                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-slate-600 text-sm">Customer Name</label>
                            <input
                                type="text"
                                name="customerName"
                                value={formData.customerName}
                                onChange={handleInputChange}
                                placeholder="Enter customer name"
                                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-slate-600 text-sm">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-slate-600 text-sm">Total Price</label>
                            <input
                                type="number"
                                name="totalPrice"
                                value={formData.totalPrice}
                                onChange={handleInputChange}
                                placeholder="Enter total price"
                                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col col-span-2">
                            <label className="mb-2 font-semibold text-slate-600 text-sm">Order Date</label>
                            <input
                                type="date"
                                name="orderDate"
                                value={formData.orderDate}
                                onChange={handleInputChange}
                                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                required
                            />
                        </div>

                        <div className="col-span-2 flex gap-3 justify-end">
                            <button type="submit" className="bg-emerald-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-600 transition">
                                Add Order
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="bg-slate-200 text-slate-600 px-6 py-2 rounded-md font-semibold hover:bg-slate-300 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Table Section */}
            <div className="m-5 overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-slate-100 border-b-2 border-slate-200">
                            <th className="px-3 py-3 text-left font-semibold text-slate-600 text-sm">Order ID</th>
                            <th className="px-3 py-3 text-left font-semibold text-slate-600 text-sm">Customer Name</th>
                            <th className="px-3 py-3 text-left font-semibold text-slate-600 text-sm">Status</th>
                            <th className="px-3 py-3 text-left font-semibold text-slate-600 text-sm">Total Price</th>
                            <th className="px-3 py-3 text-left font-semibold text-slate-600 text-sm">Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition">
                                <td className="px-3 py-3 text-slate-800 text-sm">{order.id}</td>
                                <td className="px-3 py-3 text-slate-800 text-sm">{order.customerName}</td>
                                <td className="px-3 py-3 text-slate-800 text-sm">
                                    <span className={`${getStatusBgColor(order.status)} text-white text-xs font-semibold px-3 py-1 rounded-full inline-block`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-3 py-3 text-slate-800 text-sm">{formatCurrency(order.totalPrice)}</td>
                                <td className="px-3 py-3 text-slate-800 text-sm">{order.orderDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}