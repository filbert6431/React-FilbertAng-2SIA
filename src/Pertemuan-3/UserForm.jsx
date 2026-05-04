import InputField from "./Components/InputField";

export default function UserForm() {
  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">

      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="">Tambah User</h2>

        <label className="block text-gray-700 font-medium">Nama</label>
        <InputField 
          type="nama"
          placeholder="Masukkan Nama"
          className=""
        />
        <label className="block text-gray-700 font-medium">Email</label>
        <InputField
          type="email"
          placeholder="Masukkan Email"
          className=""
        />
        <label className="block text-gray-700 font-medium">Tanggal Lahir</label>
        <InputField
          type="date"
          placeholder="Masukkan Tanggal Lahir"
          className=""
        />
        <button className="w-full bg-green-500 text-white p-2 rounded">
          Simpan
        </button>
      </div>
    </div>
  );
}
