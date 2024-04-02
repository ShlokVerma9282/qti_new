import Accordion from "./Accordion";
import Footer from "./ButtonSection";
import { useState } from "react";
import axios from 'axios';

export default function C_COMPONENT() {

    const [project, setProject] = useState({})
    const handleSubmit = () => {
        axios.post("http://localhost:8000/project/create", {
            ...project
        })
            .then((response) => {
                console.log(response);
                setProject({});
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

    return (
        <div className="p-8">
            <Accordion project={project} setProject={setProject} />
            <Footer handleSubmit={handleSubmit} />
        </div>
    )
}