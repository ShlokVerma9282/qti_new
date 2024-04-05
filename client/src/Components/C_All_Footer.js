import { useContext } from "react";
import { ProjectContext } from "./ProjectContext";

export default function Footer(props) {

    // Destructuring from props and context
    const { project, setProject } = useContext(ProjectContext);
    const { toggleAccordion, elementIndex, formChanges } = props.metadata;


    const handleComponentSubmit = () => {
        setProject({ ...project, ...formChanges });
        toggleAccordion(elementIndex);
        toggleAccordion(elementIndex + 1);
    }

    const discardChanges = () => {
        toggleAccordion(elementIndex);
    }

    return (
        <>
            <button className="mt-2 bg-slate-100 border-2 border-gray-300 
            text-black px-5 py-2 rounded-lg mr-2 hover:bg-slate-200"
                onClick={() => discardChanges()}>
                Discard Changes
            </button>
            <button className="mt-2 bg-blue-500 text-white px-5 
            py-2 rounded-lg hover:bg-blue-600"
                onClick={() => handleComponentSubmit()}>
                Save & Next
            </button>
        </>
    )
}