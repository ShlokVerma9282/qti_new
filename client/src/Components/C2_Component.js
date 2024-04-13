import { useState } from "react"
import { useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import Footer from "./C_All_Footer";
import Header from "./C_All_Header";

export default function C2() {

    const elementIndex = 1;

    // Destructuring context
    const { project, activeIndex } = useContext(ProjectContext);

    // Add more websites as needed
    const websitesList = ['None', 'YouTube', 'Twitch', 'Vimeo'];

    const [disabled, setDisabled] = useState(false);
    const [website, setWebsite] = useState(disabled ? project.video.website : "None");
    const [link, setLink] = useState(project.video === null ? "" : project.video.link);

    const onDiscard = () => {
        if (project.video !== null) setDisabled(true);
        setWebsite(disabled ? project.video.website : "None")
        setLink(project.video === null ? "" : project.video.link)
    }

    return (
        <>
            <Header elementIndex={elementIndex} title="Project Intro Video"
                disabled={disabled} setDisabled={setDisabled} />

            {activeIndex === elementIndex && (
                <>
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
                        </div>
                    </div>
                    {
                        !disabled && (
                            <Footer metadata={{
                                elementIndex,
                                formChanges: { video: { link, website } }
                            }}
                                disabled={disabled}
                                setDisabled={setDisabled}
                                onDiscard={onDiscard}
                            />)
                    }
                </>
            )}
        </>
    )
}