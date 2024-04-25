import Accordion from "./Accordion";
import Footer from "./MainFooter";
import { ProjectContext } from "../ProjectContext";
import { useState } from "react";
import axios from 'axios';

export default function C_COMPONENT() {

    const defaultProject = {
        title: "",
        about: "",
        setting: {
            general: {
                public: false,
                qa: false,
                maxNumber: 100,
                difficulty: "all-levels"
            },
            contentDrip: {
                enabled: false
            }
        },
        video: null,
        topics: null,
        price: 0,
        discountedPrice: 0
    }

    //using key prop to forcefully update component tree
    const [key, setKey] = useState(0);

    // Setting project and active accordion item
    const [project, setProject] = useState({ ...defaultProject });
    const [activeIndex, setActiveIndex] = useState(null);

    // Function for toggling active index
    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const createProject = (details) => {

        axios.post("http://localhost:8000/project/create", details)
            .then((response) => {
                setProject({ ...defaultProject });
                setActiveIndex(null);
                setKey(key + 1);
            })
            .catch(error => {
                window.alert("Error occurred while creating project!");
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }

    // Function to get presigned urls and metadata for video upload
    const getVideoMetadata = () => {
        let fileList = project.video.uploads.map((file) => {
            return {
                name: file[0].name,
                type: file[0].type,
                size: file[0].size,
                path: file[0].path
            }
        })

        axios.post("http://localhost:8000/uploads", {
            files: [...fileList]
        })
            .then((response) => {
                let filesMetadata = [...response.data.files];
                if (filesMetadata) {
                    uploadToCloud(filesMetadata);
                }
            })
            .catch(error => {
                window.alert("Error occurred while creating project!");
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }

    const uploadToCloud = (filesMetadata) => {
        let uploadedFiles = [];
        for (let i = 0; i < filesMetadata.length; i++) {
            let formData = new FormData();
            formData.append("file", project.video.uploads[i][0]);
            axios.put(filesMetadata[i]["url"], formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then((response) => {
                    uploadedFiles.push({
                        ...filesMetadata[i], url: null
                    })
                    if (i === filesMetadata.length - 1) {
                        createProject({
                            ...project,
                            video: {
                                ...project.video,
                                uploads: [...uploadedFiles],
                            }
                        });
                    }
                })
                .catch(error => {
                    window.alert("Error occurred while creating project!");
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                })
        }
        return uploadedFiles;
    }

    // function to be called on clicking create-project button
    const handleSubmit = () => {

        if (!project.title || project.title.trim() === "") {
            window.alert("Project title missing!");
        }

        if (project.video !== null && project.video.uploads.length !== 0) {
            getVideoMetadata();
        } else {
            createProject({ ...project });
        }
    }

    return (
        <div className="p-8">
            <ProjectContext.Provider value={{ project, setProject, activeIndex, setActiveIndex, toggleAccordion }}>
                <Accordion key={key} />
                <Footer handleSubmit={handleSubmit} />
            </ProjectContext.Provider>
        </div>
    )
}