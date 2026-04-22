export default function TailWindCSS(){
    return(
         <div classname = "space-y-15">
                <h1 class= "border m-4 "> Balajr TailWind CSS</h1>
                <button className ="bg-blue-500 text-yellow-200 px-4 py-2 mx-4 rounded shadow-lg">
                     Click Me
                </button>
{/* 
                <Spacing
                    title="Card"
                    content="ABCDEFG"
                />

                <Typography/>

                <BorderRadius/>
                <BackgroundColors/>
                <FlexboxGrid/>

                <ShadowEffects/> */}

                <DesignSpecCard title="Card Component" content="Spesifikasi desain untuk komponen kartu.">
                </DesignSpecCard>
         </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-10">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1>logout</h1>
        </nav>
    )
}

function Spacing( props ){
    return (
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">{props.title}</h2>
            <p className="mt-2 text-gray-600">{props.content}</p>
        </div>
    )
}
function Typography(){
    return (
        <div class = "p-4 m-4">
            <h1 className="text-3xl font-bold text-blue-400">Tailwind Typography</h1>
            <p className="text-gray-500 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-l-lg ml-4"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-blue-500 text-white p-6 m-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-blue-200 shadow-md p-6 m-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}

// minta GPT dari pak Fikri
const DesignSpecCard = ({ title, content, children }) => {
  return (
    <div className="design-spec-container" style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
      {/* Bagian Header */}
      <header className="spec-header" style={{ marginBottom: '16px', borderBottom: '2px solid #f0f0f0', paddingBottom: '8px' }}>
        <Spacing title={title} content={content} />
        <Typography variant="h3">{title} Specification</Typography>
      </header>

      {/* Bagian Visual Properties */}
      <section className="spec-body" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div className="layout-group">
          <FlexboxGrid />
        </div>

        <div className="style-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <BorderRadius />
          <BackgroundColors />
        </div>

        <div className="effects-group">
          <ShadowEffects />
        </div>
      </section>

      {/* Slot untuk Preview atau Konten Tambahan */}
      <footer className="spec-footer" style={{ marginTop: '20px' }}>
        {children}
      </footer>
    </div>
  );
};