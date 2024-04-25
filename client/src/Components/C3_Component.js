import { useState } from "react";
import { useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import Footer from "./Sub_Components/C_All_Footer";
import Header from "./Sub_Components/C_All_Header";

export default function C3() {

    const elementIndex = 2;

    // Destructuring context
    const { project, activeIndex } = useContext(ProjectContext);

    const [disabled, setDisabled] = useState(false);
    const [showAdd, setShowAdd] = useState(false); // State to manage visibility of Add component
    const [editIndex, setEditIndex] = useState(null); // State to track the index of the topic being edited
    const [topicName, setTopicName] = useState('');
    const [topicSummary, setTopicSummary] = useState('');
    const [topics, setTopics] = useState(project.topics !== null ? [...project.topics] : []); // State to store submitted topics

    const onDiscard = () => {
        if (project.topics !== null) setDisabled(true);
        setShowAdd(false)
        setEditIndex(null)
        setTopicName('')
        setTopicSummary('')
        setTopics(project.topics !== null ? [...project.topics] : [])
    }

    const handleCancelChanges = () => {
        setTopicName('');
        setTopicSummary('');
        setShowAdd(false);
        setEditIndex(null);
    }

    const handleSubmission = () => {
        // Validate topic name and summary
        if (topicName.trim() === '' || topicSummary.trim() === '') {
            alert('Please enter both topic name and summary.');
            return;
        }

        if (editIndex !== null) {
            const updatedTopics = topics.map(topic => {
                if (topic.id === editIndex) {
                    return {
                        id: editIndex,
                        name: topicName,
                        summary: topicSummary
                    }
                } else return topic;
            })
            setTopics(updatedTopics);
            setEditIndex(null);
        } else {
            let id = topics.length === 0 ? 0 : topics[topics.length - 1].id + 1;
            setTopics([...topics, {
                id: id,
                name: topicName,
                summary: topicSummary
            }])
        }

        // Clear input fields after submission
        setTopicName('');
        setTopicSummary('');

        // Hide Add component after submission
        setShowAdd(false);
    };

    const handleDeleteTopic = (id) => {
        const updatedTopics = topics.filter((topic) => {
            return topic.id !== id;
        });
        setTopics(updatedTopics);
    }

    const handleEditTopic = ({ id, name, summary }) => {
        setTopicName(name);
        setTopicSummary(summary);
        setEditIndex(id);
        setShowAdd(true);
    };

    return (
        <>
            <Header elementIndex={elementIndex} title="Project Builder"
                disabled={disabled} setDisabled={setDisabled} />

            {activeIndex === elementIndex && (
                <>
                    <div className="bg-gray-100">
                        <div className="container mx-auto p-4">
                            {!disabled && (
                                <div className="mb-3">
                                    {/* Button to toggle visibility of Add component */}
                                    <button onClick={() => setShowAdd(!showAdd)} className="bg-gradient-to-tr 
                    from-blue-500 to bg-purple-500 text-white px-3 py-1 rounded-lg">
                                        {showAdd ? 'Hide Topic Editor' : 'Add New Topic'}
                                    </button>
                                </div>
                            )}
                            {/* Render Add component based on state */}
                            {showAdd && (
                                <div>
                                    <div className="container mx-auto py-4">
                                        <div className="bg-white rounded-xl shadow-md p-6">
                                            <div className="flex justify-between items-center mb-4">
                                                <h1 className="text-xl font-bold text-black">{editIndex !== null ? "Edit" : "Add"} Topic</h1>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="topic-title" className="block mb-2 font-medium ">Topic Name<sup className="text-red-500">*</sup></label>
                                                <input
                                                    type="text"
                                                    id="topic-title"
                                                    className="w-full border-2 border-gray-300 p-2 rounded-lg"
                                                    value={topicName}
                                                    onChange={(e) => setTopicName(e.target.value)}
                                                />
                                                <p style={{ color: "grey" }}>© Topic titles are displayed publicly wherever required. Each topic may contain one or more lessons, quiz and assignments.</p>
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="topic-summary" className="block mb-2 font-medium">Topic Summary<sup className="text-red-500">*</sup></label>
                                                <textarea rows="3" id="topic-summary" className="block p-2.5 w-full text-sm 
                                    text-gray-900 rounded-lg border-2 border-gray-300 focus:ring-blue-500 
                                    focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                    dark:placeholder-gray-400 dark:text-white 
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500" value={topicSummary}
                                                    onChange={(e) => setTopicSummary(e.target.value)} />
                                                <p style={{ color: "grey" }}>© Add a summary of short text to prepare students for the activities for the topic.</p>
                                            </div>
                                            <div className="flex justify-end"> {/* Added flex container for alignment */}
                                                <button className="bg-gray-100 text-gray border-2 border-gray-300 px-5 py-2 rounded-lg mr-2" onClick={handleCancelChanges}>Cancel</button>
                                                <button className="bg-indigo-500 text-white px-5 py-2 rounded-lg" onClick={handleSubmission}>Save Topic</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Display submitted topics */}
                            {topics.length > 0 && (
                                <div className="grid grid-cols-5 mt-4 mb-2">
                                    <div className="border-y-2 p-2 border-gray-200 font-medium bg-indigo-100">Topic</div>
                                    <div className="col-span-3 p-2 border-y-2 border-gray-200 font-medium bg-indigo-100">Summary</div>
                                    <div className="border-y-2 border-gray-200 p-2 bg-indigo-100"></div>
                                    {
                                        topics.map((topic) =>
                                            <>
                                                <div className="border-y-2 p-2 border-gray-200">{topic.name}</div>
                                                <div className="col-span-3 p-2 border-y-2 border-gray-200">{topic.summary}</div>
                                                <div className="border-y-2 border-gray-200 p-3 flex flex-row-reverse ">
                                                    {!disabled && <>
                                                        <button className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
                                                            onClick={() => handleDeleteTopic(topic.id)}>
                                                            Delete
                                                        </button>
                                                        <button className="ml-2 bg-indigo-500 text-white px-3 py-1 rounded"
                                                            onClick={() => handleEditTopic(topic)}>
                                                            Edit
                                                        </button>
                                                    </>}
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            )}

                        </div>
                    </div>
                    {
                        !disabled && topics.length > 0 && (
                            <Footer metadata={{
                                elementIndex,
                                formChanges: { topics }
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