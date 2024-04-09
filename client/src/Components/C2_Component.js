import { useState } from "react"
import Footer from "./C_All_Footer";
import { useContext } from "react";
import { ProjectContext } from "./ProjectContext";

export default function C2(props) {

    // Destructuring context
    const { project } = useContext(ProjectContext);

    // Add more websites as needed
    const websitesList = ['YouTube', 'Twitch', 'Vimeo'];

    const [website, setWebsite] = useState(project.video.website);
    const [link, setLink] = useState(project.video.link);

    return (
        <div className="bg-gray-100 ">
            <div className="container mx-auto p-4">
                <div className="mb-4">
                    <label htmlFor="website" className="block mb-2">Select Website</label>
                    <select
                        id="website"
                        className="w-full border-2 p-2 border-gray-300 rounded-lg"
                        value={website}
                        onChange={(e) => {
                            setWebsite(e.target.value);
                        }}
                    >
                        {websitesList.map((siteType) => (
                            <option key={siteType} value={siteType}>{siteType}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-2">
                    <label htmlFor="URL" className="block mb-2 font-bold">Add Video URL</label>
                    <input type="text" id="URL" onChange={(e) => setLink(e.target.value)} className="w-full border-2 
                    border-gray-300 p-2 rounded-lg mb-2" value={link} />
                    <p style={{ color: "gray" }}>Example: https://www.{website.toLowerCase()}.com/</p>
                </div>

                <Footer metadata={{ ...props, formChanges: { video: { link, website } } }} />

            </div>
        </div>
    )
}