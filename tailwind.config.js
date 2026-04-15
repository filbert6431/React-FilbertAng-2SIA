/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./Pertemuan-5.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hijau: '#00B074',
        latar: '#f3f4f6',
        teks: '#374151',
        'teks-samping': '#6b7280',
        garis: '#e5e7eb',
        merah: '#ef4444',
        biru: '#3b82f6',
        kuning: '#f59e0b',
      },
      fontFamily: {
        barlow: ['barlow', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      width: {
        90: '360px',
      },
    },
  },
  plugins: [],
}
