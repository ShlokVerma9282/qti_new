import { useContext } from "react";
import { ProjectContext } from "../ProjectContext";

export default function Header(props) {

    // Get title and elementIndex from props
    const { elementIndex, title, disabled, setDisabled } = props;

    // Get activeIndex and toggle function from context
    const { toggleAccordion, activeIndex } = useContext(ProjectContext);
    
    const enableEditing = (e) => {
        e.stopPropagation();
        setDisabled(!disabled);
    } 
    return (
        <div onClick={() => toggleAccordion(elementIndex)} className={`w-full p-2
                ${activeIndex !== elementIndex ? "text-gray-800 font-medium text-lg" : "text-blue-700 font-bold text-xl"} 
                text-left bg-slate-50 hover:bg-slate-100 
                hover:rounded-lg hover:cursor-pointer transition ease-in-out duration-300`}>
            <span className="p-2">{title}</span>
            <span className="float-right font-extrabold text-gray-800 me-2">
                {activeIndex !== elementIndex ? "+" : disabled ? (
                    <>
                        <button className="bg-violet-500 me-2 text-sm font-medium text-white px-5 
                            py-2 rounded-lg hover:bg-violet-600"
                            onClick={enableEditing}>
                            Edit
                        </button>
                        <button className="bg-gray-500 text-sm font-medium text-white px-5 
                            py-2 rounded-lg hover:bg-gray-600">
                            Close
                        </button>
                    </>) : "-"}
            </span>
        </div>
    )
}