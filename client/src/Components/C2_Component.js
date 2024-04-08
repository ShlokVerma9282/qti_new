import { useState } from "react"

export default function C2() {

    const [selectedWebsite, setSelectedWebsite] = useState('YouTube');
    const websites = ['YouTube', 'Twitch', 'Vimeo']; // Add more websites as needed
    const [drop, setDrop] = useState();
    const [link, setLink] = useState();

    const handleWebsiteChange = (e) => {
        setSelectedWebsite(e.target.value);
    };

    return (
        <div className="bg-gray-100 ">
            <div className="container mx-auto p-4">
                <div className="mb-4">
                    <label htmlFor="website" className="block mb-2">Select Website</label>
                    <select
                        id="website"
                        className="w-full border-2 p-2 border-gray-300 rounded-lg"
                        value={selectedWebsite}
                        onChange={(e) => {
                            handleWebsiteChange(e);
                            setDrop(e.target.value);
                        }}
                    >
                        {websites.map((website) => (
                            <option key={website} value={website}>{website}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-2">
                    <label htmlFor="URL" className="block mb-2 font-bold">Add Video URL</label>
                    <input type="text" id="URL" onChange={(e) => setLink(e.target.value)} className="w-full border-2 border-gray-300 p-2 rounded-lg mb-2" placeholder='Add URL Here' />
                    <p style={{ color: "gray" }}>Example: https://www.{selectedWebsite.toLowerCase()}.com/</p>
                </div>
            </div>
        </div>
    )
}