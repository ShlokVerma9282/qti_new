import { useState, useCallback } from "react"
import { useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import Dropzone from "./Sub_Components/Dropzone";
import Footer from "./Sub_Components/C_All_Footer";
import Header from "./Sub_Components/C_All_Header";

export default function C2() {

    const elementIndex = 1;

    // Destructuring context
    const { project, activeIndex } = useContext(ProjectContext);

    // Add more websites as needed
    const websitesList = ['None', 'YouTube', 'Twitch', 'Vimeo'];

    const [disabled, setDisabled] = useState(false);
    const [website, setWebsite] = useState(project.video === null ? "None" : project.video.website);
    const [link, setLink] = useState(project.video === null ? "" : project.video.link);
    const [uploads, setUploads] = useState(project.video === null ? [] : project.video.uploads);


    const onDiscard = () => {
        if (project.video !== null) setDisabled(true);
        setWebsite(disabled ? project.video.website : "None")
        setLink(project.video === null ? "" : project.video.link)
        setUploads(project.video === null ? [] : project.video.uploads);
    }

    const onDrop = useCallback((acceptedFiles) => {
        setUploads((prevState) => [
            ...prevState,
            acceptedFiles,
        ]);
    }, []);

    const removeVideo = (id) => {
        let fileList = [...uploads];
        fileList.splice(id, 1);
        setUploads(fileList);
    }

    return (
        <>
            <Header elementIndex={elementIndex} title="Project Intro Video"
                disabled={disabled} setDisabled={setDisabled} />

            {activeIndex === elementIndex && (
                <>
                    <div className="bg-gray-100 ">
                        <div className="container mx-auto p-4 bg-slate-50">

                            {/* Video references from website */}
                            <div className="mb-6">
                                <p className="block mb-2 font-bold ">
                                    Upload from Link
                                </p>
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
                                {website !== "None" && (
                                    <div className="my-2">
                                        <label htmlFor="URL" className="block mb-2">Add Video URL{!disabled && <sup className="text-red-500">*</sup>}</label>
                                        <input type="text" id="URL" onChange={(e) => setLink(e.target.value)} className="w-full border-2 
                    border-gray-300 p-2 rounded-lg mb-2" value={link} disabled={disabled} />
                                        <p style={{ color: "gray" }}>Example: https://www.{website.toLowerCase()}.com/</p>
                                    </div>
                                )}
                            </div>

                            {/* Video upload section */}
                            {/* Video size and type check to be added */}
                            <div className="mb-4">
                                <p className="block mb-2 font-bold ">
                                    Upload from Device
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div><Dropzone disabled={disabled} onDrop={onDrop} /></div>
                                    <div className="border-2 border-gray-200 rounded-lg">
                                        {
                                            uploads.length === 0 ? (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <p className="text-gray-700">No files uploaded</p>
                                                </div>
                                            ) : (
                                                <div className="w-full p-4">
                                                    <p className="font-medium px-2">Accepted Files</p>
                                                    <ul className="mt-2 w-full text-sm font-medium text-gray-900 bg-white 
                                                    border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        {
                                                            uploads.map((file, index) => (
                                                                <li key={`video-${index}`} className={`w-full px-4 py-2 border-b border-gray-200 
                                                                dark:border-gray-600 ${!disabled && "hover:bg-gray-100"}`}>
                                                                    <div className="flex justify-between">
                                                                        <p className="text-gray-600">{file[0].name}</p>
                                                                        {!disabled && (
                                                                            <button className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
                                                                                onClick={() => removeVideo(index)}>
                                                                                Delete
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        !disabled && (
                            <Footer metadata={{
                                elementIndex,
                                formChanges: { video: { link, website, uploads } }
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