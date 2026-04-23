import React from 'react';

export default function Error400() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Error Image */}
        <img 
          src={new URL('../assets/error401.png', import.meta.url).href} 
          alt="Error 400" 
          style={styles.image}
        />
        
        <h1 style={styles.errorCode}>400</h1>
        
        <h2 style={styles.title}>Permintaan Tidak Valid</h2>
        
        <p style={styles.description}>
          Request yang kamu kirim tidak dapat diproses. Mungkin ada kesalahan data atau parameter yang dikirim. 
          Silakan cek kembali dan coba lagi.
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

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#1e293b',
    padding: '20px',
  },
  content: {
    textAlign: 'center',
    maxWidth: '450px',
  },
  image: {
    width: '200px',
    height: '200px',
    marginBottom: '20px',
    objectFit: 'contain',
  },
  errorCode: {
    fontSize: '120px',
    fontWeight: '900',
    margin: '0',
    lineHeight: '1',
    color: '#f97316', // Warna Orange
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
    backgroundColor: '#f97316',
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
