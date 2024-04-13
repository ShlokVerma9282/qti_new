import { useContext } from "react";
import { ProjectContext } from "./ProjectContext";

export default function Footer(props) {

    // Destructuring from props and context
    const { project, setProject, toggleAccordion } = useContext(ProjectContext);
    const { elementIndex, formChanges } = props.metadata;
    const { onDiscard, disabled, setDisabled } = props

    const handleComponentSubmit = () => {
        let isValid = true;
        if (elementIndex === 0) {
            if (formChanges.title.trim() === "") {
                window.alert("Project title cannot be empty!");
                isValid = false;
            }
        } else if (elementIndex === 1) {
            if (formChanges.video.website !== "None" && formChanges.video.link.trim() === "") {
                window.alert("Project video url cannot be empty!");
                isValid = false;
            }
        }
        if (isValid) {
            setProject({ ...project, ...formChanges });
            setDisabled(!disabled)
            toggleAccordion(elementIndex);
            toggleAccordion(elementIndex + 1);
        }
    }

    const discardChanges = () => {
        onDiscard();
        toggleAccordion(elementIndex);
    }

    return (
        <div className="flex justify-center bg-white p-3">
            <button className="bg-slate-100 border-2 border-gray-300 
            text-black px-2 py-1.5 rounded-lg mr-4 hover:bg-slate-200"
                onClick={() => discardChanges()}>
                Discard Changes
            </button>
            <button className="bg-blue-500 text-white px-2 
            py-1.5 rounded-lg hover:bg-blue-600"
                onClick={() => handleComponentSubmit()}>
                Save & Next
            </button>
        </div>
    )
}