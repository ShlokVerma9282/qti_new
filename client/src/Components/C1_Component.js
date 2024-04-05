import { useState } from "react";
import { useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import Footer from "./C_All_Footer";
export default function C1(props) {

    // Provide a valid URL for your default image
    const defaultBackgroundImage = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg';

    // Destructuring context
    const { project } = useContext(ProjectContext);

    // States in this component
    const [activeButton, setActiveButton] = useState("button1");
    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState(project.title);
    const [slug, setSlug] = useState(project.slug);
    const [about, setAbout] = useState(project.about);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file.size <= 700 * 430 * 3 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/webp')) {
            setSelectedFile(file);
        } else {
            alert('Please select a file that is 700x430 pixels or smaller and is a JPG, JPEG, PNG, GIF, or WEBP file.');
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.currentTarget.classList.add('border-4', 'border-dashed', 'border-blue-500', 'hover:bg-gray-100');
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.currentTarget.classList.remove('border-4', 'border-dashed', 'border-blue-500', 'hover:bg-gray-100');
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.currentTarget.classList.remove('border-4', 'border-dashed', 'border-blue-500', 'hover:bg-gray-100');
        const file = event.dataTransfer.files[0];
        if (file.size <= 700 * 430 * 3 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/webp')) {
            setSelectedFile(file);
        } else {
            alert('Please select a file that is 700x430 pixels or smaller and is a JPG, JPEG, PNG, GIF, or WEBP file.');
        }
    };

    const handleImageClick = () => {
        console.log('Image clicked');
    };

    return (
        <div className="bg-gray-100 ">
            <div className="container mx-auto p-4">

                {/* Title Input */}
                <div className="mb-4">
                    <label htmlFor="course-title" className="block mb-2 font-bold ">Project Title</label>
                    <input type="text" id="course-title" value={title}
                        className="w-full border-2 border-gray-300 p-2 rounded-lg"
                        placeholder="Enter course title"
                        onChange={(event) => setTitle(event.target.value)} />
                    <p style={{ color: "grey" }}>© Title should be 30 character</p>
                </div>

                {/* Slug Input */}
                <div className="mb-4">
                    <label htmlFor="course-slug" className="block mb-2 font-bold">Project Slug</label>
                    <input type="text" id="course-slug" value={slug}
                        className="w-full border-2 border-gray-300 p-2 rounded-lg"
                        placeholder="Enter course slug"
                        onChange={(event) => setSlug(event.target.value)} />
                    <p style={{ color: "grey" }}>© Permalink:https://yourdomain.com/new-course
                    </p>
                </div>

                {/* About Input */}
                <div className="mb-4">
                    <label htmlFor="course-permalink" className="block mb-2 font-bold">About Project</label>
                    <input type="text" id="course-permalink" value={about}
                        className="w-full h-32  border-2 border-gray-300 p-2 rounded-lg"
                        onChange={(event) => setAbout(event.target.value)} />
                    <p style={{ color: "grey" }}>© HTML or plain text allowed, no emoji This field is used for search, so please be descriptive!</p>
                </div>

                {/* Settings section */}
                <h1 className="text-lg font-bold text-black mt-6">Project Setting</h1>
                <div className="m-5 flex items-center">
                    <div className="flex flex-col px-5 py-4 rounded-lg">
                        <button
                            className={`btn ${activeButton === "button1"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-300 text-black-500 hover:bg-blue-400 hover:text-white"
                                } w-60 h-10 py-2 px-4 rounded-full text-lg font-semibold mb-4`}
                            onClick={() => setActiveButton("button1")}
                        >
                            General
                        </button>
                        <button
                            className={`btn ${activeButton === "button2"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-300 text-black-500 hover:bg-blue-400 hover:text-white"
                                } w-60 h-10 py-2 px-4 text-lg font-semibold rounded-full`}
                            onClick={() => setActiveButton("button2")}
                        >
                            Content Drip
                        </button>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="course-slug" className="block mb-2 font-bold">Project Slug</label>
                        <input type="text" id="course-slug" className="w-full border-2 border-gray-300 p-2 rounded-lg" placeholder="Enter course slug" />
                        <p style={{ color: "grey" }}>© Permalink:https://yourdomain.com/new-course
                        </p>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="course-permalink" className="block mb-2 font-bold">About Project</label>
                        <input type="text" id="course-permalink" className="w-full h-32  border-2 border-gray-300 p-2 rounded-lg" />
                        <p style={{ color: "grey" }}>© HTML or plain text allowed, no emoji This field is used for search, so please be descriptive!</p>
                    </div>
                    <h1 className="text-lg font-bold text-black mt-6">Project Setting</h1>
                    <div className="m-5 flex items-center">
                        <div className="flex flex-col px-5 py-4 rounded-lg">
                            <button
                                className={`btn ${activeButton === "button1"
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-300 text-black-500 hover:bg-blue-400 hover:text-white"
                                    } w-60 h-10 py-2 px-4 rounded-full text-lg font-semibold mb-4`}
                                onClick={() => setActiveButton("button1")}
                            >
                                General
                            </button>
                            <button
                                className={`btn ${activeButton === "button2"
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-300 text-black-500 hover:bg-blue-400 hover:text-white"
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
                                            placeholder="100"
                                        />
                                        <p>Number of students that can enroll in this course. Set 0 for no limits</p>
                                    </div>
                                    <div className="w-1/2 px-4">
                                        <label className="block mb-2 font-bold">Difficulty Level</label>
                                        <select
                                            className="w-full h-10 border-2 border-gray-300 p-2 rounded-lg leading-tight"
                                            id="difficulty-level"
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
                                                            id="public-course-toggle"
                                                            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                                                        />
                                                        <label
                                                            htmlFor="public-course-toggle"
                                                            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                                                        ></label>
                                                    </div>
                                                    <span className="ml-5">Public Project</span>
                                                </div>
                                            </label>
                                            <label className="text-gray-500" htmlFor="public-course">
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
                                                            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
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
                                                Enable Q&A section for your course
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
                                    />
                                    Enable
                                </label>
                                <p>Enable / Disable content drip</p>
                                <div className="mt-6">
                                    <h1 className="text-lg">Content Drip Type</h1>
                                    <h3 className="text-gray-600 mt-3 text-lg">
                                        You can schedule your course content using the above content drip options.
                                    </h3>
                                    <div>
                                        <div>
                                            <input type="radio" id="option1" name="option" value="option1" />
                                            <label htmlFor="option1">Schedule Project Contents By Date</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="option2" name="option" value="option2" />
                                            <label htmlFor="option2">Content Available After X Days From Enrollment</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="option3" name="option" value="option3" />
                                            <label htmlFor="option3">Project Content Available Sequentially</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="option4" name="option" value="option4" />
                                            <label htmlFor="option4">Project Content Unlocked After Finishing Prerequisites</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="mt-6">
                        <h1 className="block mb-2 font-bold text-lg">Project Thumbnail</h1>

                        <div
                            onClick={handleImageClick}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className="w-900 h-400 border-4 border-dashed border-blue-500 hover:bg-gray-100 flex flex-col justify-center items-center cursor-pointer"
                            style={{ height: '400px' }} // Adjust height inline
                        >
                            <div
                                className="flex flex-col justify-center items-center"
                                style={{
                                    backgroundImage: `url(${selectedFile ? URL.createObjectURL(selectedFile) : defaultBackgroundImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    width: '100%',
                                    height: '100%'
                                }}
                            >
                                {selectedFile ? (
                                    <p style={{ color: "grey" }}>Size: 700×430 pixels, File Support: JPG, JPEG, PNG, GIF, WEBP</p>
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
                                        <p className="mt-1 text-sm text-gray-600">Drag & drop your file here or click to select a file</p>
                                        <input
                                            type="file"
                                            accept="image/jpeg,image/png,image/gif,image/webp"
                                            className="hidden"
                                            onChange={handleFileInputChange}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                        <h1 style={{ color: "grey" }}>© Size: 700×430 pixels, File Support: JPG, JPEG, PNG, GIF,</h1>
                    </div>
                    <h1 style={{ color: "gray" }}>© Size: 700×430 pixels, File Support: JPG, JPEG, PNG, GIF,</h1>
                </div>

                <Footer metadata={{ ...props, formChanges: { title, slug, about } }} />

            </div>
        </div>
    );
}