
export default function PageHeader({ title, breadcrumb, children }) {
    /**
     * KONVERSI BREADCRUMB
     * Mengubah input breadcrumb (string atau array) menjadi array
     * 
     * Contoh:
     * - String:  "Dashboard / Orders / List" → ["Dashboard", "Orders", "List"]
     * - Array:   ["Dashboard", "Orders"] → ["Dashboard", "Orders"] (tetap)
     * - Kosong:  undefined/null → [] (array kosong)
     * 
     * Logika:
     * 1. typeof breadcrumb === 'string' → split('/') dan trim() setiap item
     * 2. Array.isArray(breadcrumb) → gunakan langsung
     * 3. Selain itu → set array kosong
     */
    const breadcrumbArray = typeof breadcrumb === 'string' 
        ? breadcrumb.split('/').map(item => item.trim()) 
        : Array.isArray(breadcrumb) 
        ? breadcrumb 
        : [];

    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    {/**
                     * RENDER BREADCRUMB DENGAN MAP()
                     * 
                     * Contoh breadcrumbArray = ["Dashboard", "Orders", "Details"]
                     * 
                     * Iterasi:
                     * Index 0 → "Dashboard" + separator / (karena 0 < 2)
                     * Index 1 → "Orders" + separator / (karena 1 < 2)
                     * Index 2 → "Details" (NO separator, karena 2 tidak < 2)
                     * 
                     * Hasil: Dashboard / Orders / Details
                     * 
                     * Catatan:
                     * - key={index} untuk React list rendering
                     * - {`breadcrumb-${index}`} membuat ID unik untuk setiap item
                     * - Kondisi separator: index < breadcrumbArray.length - 1
                     *   (hanya tampilkan / jika BUKAN item terakhir)
                     */}
                    {breadcrumbArray.map((item, index) => (
                        <span key={index}>
                            <span id={`breadcrumb-${index}`} className="text-gray-500">
                                {item}
                            </span>
                            {index < breadcrumbArray.length - 1 && (
                                <span id={`breadcrumb-separator-${index}`} className="text-gray-500 mx-1">/</span>
                            )}
                        </span>
                    ))}
                </div>
            </div>
            <div id="action-button">
                {children}
            </div>
        </div>
    );
}