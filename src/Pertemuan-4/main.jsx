import { createRoot } from "react-dom/client";
import './tailwind.css';
import "./FrameworkList.jsx"
import FrameworkList from "./FrameworkList.jsx";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter.jsx";


createRoot(document.getElementById("root"))
    .render(
        <div>
            <FrameworkListSearchFilter/>
        </div>
    )