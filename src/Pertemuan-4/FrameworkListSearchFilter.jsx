import frameworkData from "./framework.json";
import { useState } from "react";

export default function frameworkListSearchFilter() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("");



    /*Inisialisasi DataForm*/

    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
        /*Tambah state lain beserta default value*/
    });
     
    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const _selectedTag = dataForm.selectedTag.toLowerCase();

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };
    // deklarasi logic untuk search dan filter

    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name.toLowerCase().includes(_searchTerm) ||
            framework.description.toLowerCase().includes(_searchTerm) ||
            framework.details.developer.toLowerCase().includes(_searchTerm);



        const matchesTag = dataForm.selectedTag ? framework.tags.includes(dataForm.selectedTag) : true;

        return matchesSearch && matchesTag;
    });

    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ];


    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen ">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                Framework Explorer
            </h1>
            ...
            <input
                type="text"
                placeholder="Search framework..."
                value ={dataForm.searchTerm}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                name="searchTerm"
                onChange={handleChange}

            />

            <select
                name="selectedTag"
                value={dataForm.selectedTag}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={handleChange}

            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>

            <div className="grid gap-6 md:grid-cols-2 ">
                {filteredFrameworks.map((item) => (
                    <div

                        key={item.id}
                        className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div classname="hover:rotate-2">
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