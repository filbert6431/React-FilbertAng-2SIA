import React from 'react';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Lingkaran Dekorasi Sederhana */}
        <div style={styles.circle}></div>
        
        <h1 style={styles.errorCode}>404</h1>
        
        <h2 style={styles.title}>Waduh! Halamannya Ga Ada</h2>
        
        <p style={styles.description}>
          Sepertinya kamu tersesat atau halaman ini sudah pindah alamat. 
          Jangan panik, mari kita balik ke jalan yang benar.
        </p>

        <div style={styles.buttonGroup}>
          <button 
            onClick={() => window.history.back()} 
            style={styles.buttonSecondary}
          >
            Kembali
          </button>
          
          <button 
            onClick={() => window.location.href = '/'} 
            style={styles.buttonPrimary}
          >
            Ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}

// Styling menggunakan Object (Inline Styles) agar tidak butuh file CSS tambahan
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#1e293b',
    padding: '20px text-center'
  },
  content: {
    textAlign: 'center',
    maxWidth: '450px',
  },
  circle: {
    width: '80px',
    height: '80px',
    backgroundColor: '#e2e8f0',
    borderRadius: '50%',
    margin: '0 auto 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40px',
  },
  errorCode: {
    fontSize: '120px',
    fontWeight: '900',
    margin: '0',
    lineHeight: '1',
    color: '#6366f1', // Warna Indigo
    letterSpacing: '-5px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  description: {
    color: '#64748b',
    lineHeight: '1.6',
    marginTop: '15px',
    marginBottom: '30px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
  },
  buttonPrimary: {
    padding: '12px 24px',
    backgroundColor: '#6366f1',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  buttonSecondary: {
    padding: '12px 24px',
    backgroundColor: 'transparent',
    color: '#475569',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
  }
};