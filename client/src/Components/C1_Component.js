import { useState } from "react";
import { useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import Footer from "./C_All_Footer";
import Header from "./C_All_Header";
export default function C1() {

    const elementIndex = 0;

    // Destructuring context
    const { project, activeIndex } = useContext(ProjectContext);

    // States in this component
    const [disabled, setDisabled] = useState(false);
    const [activeButton, setActiveButton] = useState("button1");
    const [title, setTitle] = useState(project.title);
    const [about, setAbout] = useState(project.about);
    const [general, setGeneral] = useState(project.setting.general);
    const [contentDrip, setContentDrip] = useState(project.setting.contentDrip);

    // for next phase
    const [selectedFile, setSelectedFile] = useState(null);

    const onDiscard = () => {
        if (project.title.trim() !== '') setDisabled(true);
        setTitle(project.title)
        setAbout(project.about)
        setGeneral(project.setting.general)
        setContentDrip(project.setting.contentDrip)
        setActiveButton("button1");
    }

    // contentDrip types array
    const contentDripTypes = [
        "Schedule Project Contents By Date",
        "Content Available After X Days From Enrollment",
        "Project Content Available Sequentially",
        "Project Content Unlocked After Finishing Prerequisites"
    ]

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            checkImageDimensions(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        // Get the element under the mouse pointer
        const target = document.elementFromPoint(e.clientX, e.clientY);
        // Check if the element is outside the drop area
        if (!target.closest('.drop-area')) {
            setSelectedFile(null); // Reset selected file
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            checkImageDimensions(file);
        }
    };

    const checkImageDimensions = (file) => {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = () => {
            if (image.width === 700 && image.height === 430) {
                setSelectedFile(file);
            } else {
                alert('Image dimensions must be 700x430 pixels.');
            }
        };
    };

    return (
        <>
            <Header elementIndex={elementIndex} title="Project Info"
                disabled={disabled} setDisabled={setDisabled} />

                {console.log("C1 RENDER")}

            {activeIndex === elementIndex && (
                <>
                    <div className="bg-gray-100 ">
                        <div className="container mx-auto p-4">

                            {/* Title Input */}
                            <div className="mb-4">
                                <label htmlFor="course-title" className="block mb-2 font-bold ">
                                    Project Title{!disabled && <sup className="text-red-500">*</sup>}
                                </label>
                                <input type="text" id="course-title" value={title}
                                    className="w-full border-2 border-gray-300 p-2 rounded-lg"
                                    onChange={(event) => setTitle(event.target.value)}
                                    disabled={disabled} />
                                <p style={{ color: "grey" }}>© Title should be 30 character</p>
                            </div>

                            {/* About Input */}
                            <div className="mb-4">
                                <label htmlFor="project-summary" className="block mb-2 font-bold">About Project</label>
                                <textarea rows="3" id="project-summary" className="block p-2.5 w-full text-sm text-gray-900 
                    rounded-lg border-2 border-gray-300 focus:ring-blue-500 
                    focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                    dark:focus:border-blue-500" value={about}
                                    onChange={(event) => setAbout(event.target.value)} disabled={disabled} />
                                <p style={{ color: "grey" }}>© HTML or plain text allowed, no emoji This field is used for search, so please be descriptive!</p>
                            </div>

                            {/* Settings section */}
                            <h1 className="text-lg font-bold text-black mt-6">Project Setting</h1>
                            <div className="m-5 flex items-center">
                                <div className="flex flex-col px-5 py-4 rounded-lg">
                                    <button
                                        className={`btn ${activeButton === "button1"
                                            ? "bg-indigo-500 text-white"
                                            : "bg-gray-300 text-black-500 hover:bg-indigo-400 hover:text-white"
                                            } w-60 h-10 py-2 px-4 rounded-full text-lg font-semibold mb-4`}
                                        onClick={() => setActiveButton("button1")}
                                    >
                                        General
                                    </button>
                                    <button
                                        className={`btn ${activeButton === "button2"
                                            ? "bg-indigo-500 text-white"
                                            : "bg-gray-300 text-black-500 hover:bg-indigo-400 hover:text-white"
                                            } w-60 h-10 py-2 px-4 text-lg font-semibold rounded-full`}
                                        onClick={() => setActiveButton("button2")}
                                    >
                                        Content Drip
                                    </button>
                                </div>

                                {activeButton === "button1" && (
                                    <div className="m-4">
                                        <div className=" -mx-4">
                                            <div className="w-1/2 px-4">
                                                <label className="block mb-2 font-bold">Maximum Students</label>
                                                <input
                                                    type="number"
                                                    className="w-full h-10 border-2 border-gray-300 p-2 rounded-lg leading-tight"
                                                    id="max-students"
                                                    value={general.maxNumber}
                                                    onChange={(e) => setGeneral({ ...general, maxNumber: e.target.value })}
                                                    disabled={disabled}
                                                />
                                                <p>Number of students that can enroll in this Project. Set 0 for no limits</p>
                                            </div>
                                            <div className="w-1/2 px-4">
                                                <label className="block mb-2 font-bold">Difficulty Level</label>
                                                <select
                                                    className="w-full border-2 border-gray-300 p-2 rounded-lg leading-tight"
                                                    id="difficulty-level"
                                                    value={general.difficulty}
                                                    onChange={(e) => setGeneral({ ...general, difficulty: e.target.value })}
                                                    disabled={disabled}
                                                >
                                                    <option value="all-levels">All Levels</option>
                                                    <option value="beginner">Beginner</option>
                                                    <option value="intermediate">Intermediate</option>
                                                    <option value="advanced">Advanced</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="-mx-4">
                                            <div className="w-1/2 px-4">
                                                <div className="w-full">
                                                    <label className="block mb-2 font-bold">
                                                        <div className="flex items-center mt-3">
                                                            <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                                                                <input
                                                                    type="checkbox"
                                                                    name="toggle"
                                                                    id="public-Project-toggle"
                                                                    className="toggle-checkbox absolute block w-6 h-6 
                                                        rounded-full bg-white border-4 appearance-none cursor-pointer"
                                                                    value={general.public}
                                                                    onChange={(e) => setGeneral({ ...general, public: !general.public })}
                                                                    disabled={disabled}
                                                                    checked={general.public}
                                                                />
                                                                <label
                                                                    htmlFor="public-Project-toggle"
                                                                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                                                                ></label>
                                                            </div>
                                                            <span className="ml-5">Public Project</span>
                                                        </div>
                                                    </label>
                                                    <label className="text-gray-500" htmlFor="public-Project">
                                                        No enrollment required.
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="w-1/2 px-4">
                                                <div className="w-full">
                                                    <label className="block mb-2 font-bold">
                                                        <div className="flex items-center mt-3">
                                                            <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                                                                <input
                                                                    type="checkbox"
                                                                    name="toggle"
                                                                    id="enable-q-a-toggle"
                                                                    className="toggle-checkbox absolute block w-6 h-6 rounded-full 
                                                        bg-white border-4 appearance-none cursor-pointer"
                                                                    value={general.qa}
                                                                    onChange={(e) => setGeneral({ ...general, qa: !general.qa })}
                                                                    disabled={disabled}
                                                                    checked={general.qa}
                                                                />
                                                                <label
                                                                    htmlFor="enable-q-a-toggle"
                                                                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                                                                ></label>
                                                            </div>
                                                            <span className="ml-5">Q&A</span>
                                                        </div>
                                                    </label>
                                                    <label className="text-gray-500" htmlFor="enable-q-a">
                                                        Enable Q&A section for your Project
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeButton === "button2" && (
                                    <div className="m-4">
                                        <label className="block mb-2 text-gray-500 text-lg mt-5 ">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-5 w-5 text-gray-500 mr-2"
                                                id="public-course"
                                                value={contentDrip.enabled}
                                                onChange={(e) => setContentDrip({ enabled: !contentDrip.enabled })}
                                                disabled={disabled}
                                                checked={contentDrip.enabled}
                                            />
                                            Enable
                                        </label>
                                        <p>Enable / Disable content drip</p>
                                        {contentDrip.enabled &&
                                            <div className="mt-6">
                                                <h1 className="text-lg">Content Drip Type</h1>
                                                <h3 className="text-gray-600 mt-3 text-lg">
                                                    You can schedule your project content using the above content drip options.
                                                </h3>
                                                <div>
                                                    {contentDripTypes.map((type, index) =>
                                                        <div key={`type${index}`}>
                                                            <input type="radio" name="dripType" value={type}
                                                                onClick={(e) => setContentDrip({ ...contentDrip, dripType: e.target.value })}
                                                                disabled={disabled} />
                                                            <label htmlFor={`type${index}`}> {type}</label>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )}
                            </div>

                            {/* <div className="mt-6">
                            <h1 className="block mb-2 font-bold text-lg">Project Thumbnail</h1>
                            <label htmlFor="fileInput" onDragOver={handleDragOver} onDragEnter={handleDragEnter}
                                onDragLeave={handleDragLeave} onDrop={handleDrop} className="w-900  
                    border-4 border-dashed border-blue-500 hover:bg-gray-100 
                    flex flex-col justify-center items-center cursor-pointer 
                    drop-area" style={{ height: "20rem" }}>
                                <input
                                    type="file"
                                    id="fileInput"
                                    accept="image/jpeg,image/png,image/gif,image/webp"
                                    className="hidden"
                                    onChange={handleFileInputChange}
                                    disabled={disabled}
                                />
                                <div className="flex flex-col justify-center items-center">
                                    {selectedFile ? (
                                        <img
                                            src={URL.createObjectURL(selectedFile)}
                                            alt="Thumbnail"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-10 h-10 text-gray-500"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                />
                                            </svg>
                                            <p className="mt-1 text-sm text-gray-600">Click or drop to upload a file</p>
                                        </>
                                    )}
                                </div>
                            </label>
                            <h1 style={{ color: "grey" }} className="p-2">© Size: 700×430 pixels, File Support: JPG, JPEG, PNG, GIF</h1>
                        </div> */}

                        </div>
                    </div>
                    {
                        !disabled && (
                            <Footer metadata={{
                                elementIndex,
                                formChanges: { title, about, setting: { general, contentDrip } }
                            }}
                                disabled={disabled}
                                setDisabled={setDisabled}
                                onDiscard={onDiscard}
                            />)
                    }
                </>
            )}
        </>
    );
}