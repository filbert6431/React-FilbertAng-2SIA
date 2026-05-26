import PageHeader from "../components/PageHeader";

export default function FiturXyz() {
  const dataIsu = [
    { id: 1, isu: "Integrasi AI di Birokrasi Pemerintah", kategori: "Teknologi", status: "Sedang Berjalan", color: "#3b82f6" },
    { id: 2, isu: "Persiapan Pemilu Serentak 2029", kategori: "Politik", status: "Tahap Awal", color: "#6b7280" },
    { id: 3, isu: "Transisi Energi Hijau & Penutupan PLTU", kategori: "Lingkungan", status: "Kritis", color: "#ef4444" },
    { id: 4, isu: "Pembangunan IKN Fase Lanjutan", kategori: "Infrastruktur", status: "Intensif", color: "#8b5cf6" },
    { id: 5, isu: "Keamanan Data Pribadi Nasional", kategori: "Keamanan Siber", status: "Urgent", color: "#f59e0b" },
    { id: 6, isu: "Ketahanan Pangan Pasca El Niño", kategori: "Ekonomi", status: "Pengawasan", color: "#10b981" },
    { id: 7, isu: "Reformasi Sistem Pendidikan Vokasi", kategori: "Pendidikan", status: "Sosialisasi", color: "#06b6d4" },
    { id: 8, isu: "Stabilitas Rupiah terhadap Mata Uang Global", kategori: "Ekonomi", status: "Fluktuatif", color: "#f43f5e" },
    { id: 9, isu: "Perluasan Akses Starlink di Wilayah 3T", kategori: "Teknologi", status: "Implementasi", color: "#2563eb" },
    { id: 10, isu: "Isu Kesehatan Mental Remaja Digital", kategori: "Sosial", status: "Perhatian Publik", color: "#ec4899" },
  ];

  return (
    <div style={{ padding: "40px", backgroundColor: "#f9fafb", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <PageHeader />
      
      <div style={{ maxWidth: "1000px", margin: "0 auto", backgroundColor: "#ffffff", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", marginBottom: "8px" }}>Daftar Isu Nasional Terkini</h1>
        <p style={{ color: "#6b7280", marginBottom: "24px" }}>Monitoring 10 isu strategis Indonesia tahun 2026.</p>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #f3f4f6" }}>
                <th style={headerStyle}>No</th>
                <th style={headerStyle}>Isu Strategis</th>
                <th style={headerStyle}>Kategori</th>
                <th style={headerStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {dataIsu.map((item, index) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #f3f4f6", transition: "background 0.2s" }} 
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#f9fafb"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}>
                  <td style={cellStyle}>{index + 1}</td>
                  <td style={{ ...cellStyle, fontWeight: "600", color: "#1f2937" }}>{item.isu}</td>
                  <td style={cellStyle}>
                    <span style={kategoriBadge}>{item.kategori}</span>
                  </td>
                  <td style={cellStyle}>
                    <span style={{ 
                      ...statusBadge, 
                      color: item.color, 
                      backgroundColor: `${item.color}15`, 
                      border: `1px solid ${item.color}30` 
                    }}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Objek Style untuk menjaga kerapihan kode
const headerStyle = {
  padding: "12px 16px",
  color: "#4b5563",
  fontSize: "14px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.05em"
};

const cellStyle = {
  padding: "16px",
  fontSize: "15px",
  color: "#4b5563"
};

const kategoriBadge = {
  backgroundColor: "#f3f4f6",
  color: "#374151",
  padding: "4px 10px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "500"
};

const statusBadge = {
  padding: "4px 12px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: "600",
  display: "inline-block",
  whiteSpace: "nowrap"
};