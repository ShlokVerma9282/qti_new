import { useState } from "react"
import Footer from "./C_All_Footer";
import { useContext } from "react";
import { ProjectContext } from "./ProjectContext";

export default function C2(props) {

    // Destructuring context
    const { project } = useContext(ProjectContext);

    // Add more websites as needed
    const websitesList = ['None', 'YouTube', 'Twitch', 'Vimeo'];

    const [disabled, setDisabled] = useState(project.video !== null);
    const [website, setWebsite] = useState(disabled ? project.video.website : "None");
    const [link, setLink] = useState(project.video === null ? "" : project.video.link);

    return (
        <div className="bg-gray-100 ">
            <div className="container mx-auto p-4">
                <div className="mb-4">
                    <label htmlFor="website" className="block mb-2">Select Website</label>
                    <select
                        id="website"
                        className="w-full border-2 p-2 border-gray-300 rounded-lg"
                        value={website}
                        disabled={disabled}
                        onChange={(e) => {
                            setWebsite(e.target.value);
                        }}
                    >
                        {websitesList.map((siteType) => (
                            <option key={siteType} value={siteType}>{siteType}</option>
                        ))}
                    </select>
                </div>
                {website !== "None" && (
                    <div className="mb-2">
                        <label htmlFor="URL" className="block mb-2 font-bold">Add Video URL{!disabled && <sup className="text-red-500">*</sup>}</label>
                        <input type="text" id="URL" onChange={(e) => setLink(e.target.value)} className="w-full border-2 
                    border-gray-300 p-2 rounded-lg mb-2" value={link} disabled={disabled} />
                        <p style={{ color: "gray" }}>Example: https://www.{website.toLowerCase()}.com/</p>
                    </div>
                )}

                {
                    disabled ? (
                        <button className="mt-2 bg-blue-500 text-white px-5 
                            py-2 rounded-lg hover:bg-blue-600"
                            onClick={() => setDisabled(!disabled)}>
                            Edit
                        </button>
                    ) :
                        (<Footer metadata={{
                            ...props,
                            formChanges: { video: { link, website } }
                        }} />)
                }
            </div>
        </div>
    )
}