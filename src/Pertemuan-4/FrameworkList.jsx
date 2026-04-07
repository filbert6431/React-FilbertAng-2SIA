import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen ">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Framework Explorer
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2 ">
        {frameworkData.map((item) => (
          <div  
          
            key={item.id} 
            className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div classname ="hover:rotate-2">
              <div className="flex justify-between items-start mb-2 ">
                <h2 className="text-xl font-bold text-gray-800 tracking-tight">
                  {item.name}
                </h2>
                <span className="text-sm font-medium text-gray-400">
                  {item.details.releaseYear}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>
              
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Developed by
                </p>
                <p className="text-sm text-gray-700 font-medium italic">
                  {item.details.developer}
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-indigo-50 text-indigo-600 px-3 py-1 text-[10px] font-bold uppercase rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={item.details.officialWebsite}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2 px-4 bg-gray-900 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}