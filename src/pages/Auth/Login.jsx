import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Konsisten gunakan string
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error setiap kali submit

    axios
      .post("https://dummyjson.com/auth/login", { // Endpoint dummyjson yang benar
        username: dataForm.email, // dummyjson menggunakan 'username'
        password: dataForm.password,
      })
      .then((response) => {
        // DummyJSON mengembalikan status 200 jika berhasil
        navigate("/");
      })
      .catch((err) => {
        // Ambil pesan error dari response API atau pesan default
        const message = err.response?.data?.message || "Kredensial tidak valid";
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Komponen UI Error
  const errorInfo = error ? (
    <div className="bg-red-500/10 border border-red-500/50 mb-6 p-4 rounded-2xl flex items-center gap-3 animate-shake">
      <BiErrorAlt className="text-red-500 text-xl shrink-0" />
      <span className="text-red-200 text-sm font-medium">{error}</span>
    </div>
  ) : null;

  // Komponen UI Loading
  const loadingInfo = loading ? (
    <div className="bg-dash-accent/10 border border-dash-accent/50 mb-6 p-4 rounded-2xl flex items-center gap-3">
      <AiOutlineLoading3Quarters className="text-dash-accent animate-spin text-xl shrink-0" />
      <span className="text-dash-accent text-sm font-bold tracking-widest uppercase">Authenticating...</span>
    </div>
  ) : null;

  return (
    <div className="w-full">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-black text-white mb-2 tracking-tight">Sign In</h2>
        <p className="text-gray-500 font-medium">Gunakan akun admin Doge Coffee Anda.</p>
      </div>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Username / Email</label>
          <div className="relative flex items-center group">
            <FaEnvelope className="absolute left-5 text-gray-600 group-focus-within:text-dash-accent transition-colors" />
            <input
              type="text"
              name="email"
              value={dataForm.email}
              onChange={handleChange}
              placeholder="emilys" // Contoh user dummyjson
              className="w-full bg-black/30 border border-white/5 rounded-[24px] py-5 pl-14 pr-6 text-white outline-none focus:ring-4 focus:ring-dash-accent/20 focus:border-dash-accent/50 transition-all placeholder:text-gray-700"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Password</label>
          <div className="relative flex items-center group">
            <FaLock className="absolute left-5 text-gray-600 group-focus-within:text-dash-accent transition-colors" />
            <input
              type="password"
              name="password"
              value={dataForm.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-black/30 border border-white/5 rounded-[24px] py-5 pl-14 pr-6 text-white outline-none focus:ring-4 focus:ring-dash-accent/20 focus:border-dash-accent/50 transition-all placeholder:text-gray-700"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-dash-accent text-[#1A1614] py-5 rounded-[24px] font-black shadow-xl transition-all duration-300 uppercase tracking-[0.2em] 
            ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110 hover:-translate-y-1 active:scale-95'}`}
        >
          {loading ? "Processing..." : "Login to Dashboard"}
        </button>
      </form>
    </div>
  );
}