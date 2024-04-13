import { useState } from "react";
import { useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import Footer from "./C_All_Footer";
import Header from "./C_All_Header";

export default function C4() {

    const elementIndex = 3;

    // Destructuring context
    const { project, activeIndex } = useContext(ProjectContext);

    const [disabled, setDisabled] = useState(false);
    const [activeTab, setActiveTab] = useState("button1");
    const [price, setPrice] = useState(project.price);
    const [discountedPrice, setDiscountedPrice] = useState(project.discountedPrice);

    const onDiscard = () => {
        //to be handled
    }

    return (
        <>
            <Header elementIndex={elementIndex} title="Project Price"
                disabled={disabled} setDisabled={setDisabled} />

            {activeIndex === elementIndex && (
                <>
                    <div className="bg-gray-100 ">
                        <div className="container mx-auto p-4">
                            <div className="m-5 flex items-center">
                                <div className="flex flex-col px-5 py-4 rounded-lg">
                                    <button
                                        className={`btn ${activeTab === "button1"
                                            ? "bg-indigo-500 text-white"
                                            : "bg-gray-300 text-black-500 hover:bg-indigo-400 hover:text-white"
                                            } w-60 h-10 py-2 px-4 rounded-full text-lg font-semibold mb-4`}
                                        onClick={() => setActiveTab("button1")}
                                        disabled={disabled}
                                    >
                                        Paid
                                    </button>
                                    <button
                                        className={`btn ${activeTab === "button2"
                                            ? "bg-indigo-500 text-white"
                                            : "bg-gray-300 text-black-500 hover:bg-indigo-400 hover:text-white"
                                            } w-60 h-10 py-2 px-4 text-lg font-semibold rounded-full`}
                                        onClick={() => {
                                            setActiveTab("button2");
                                            setPrice(0);
                                            setDiscountedPrice(0);
                                        }}
                                        disabled={disabled}
                                    >
                                        Free
                                    </button>
                                </div>
                                {activeTab === "button1" && (
                                    <div className="m-4">
                                        <div className="m-4">
                                            <label htmlFor="regular-price" className="block font-bold">
                                                Regular Price (₹)
                                            </label>
                                            <input
                                                type="text"
                                                id="regular-price"
                                                className="w-full border-2 border-gray-300 p-2 rounded-lg"
                                                placeholder="₹ Regular Price"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                disabled={disabled}
                                            />
                                            <p className="text-gray-600">© The Project Price Includes Your Author Fee.</p>
                                        </div>
                                        <div className="m-4">
                                            <label htmlFor="discounted-price" className="block mb-2 font-bold">
                                                Discounted Price (₹)
                                            </label>
                                            <input
                                                type="text"
                                                id="discounted-price"
                                                className="w-full border-2 border-gray-300 p-2 rounded-lg"
                                                placeholder="₹ Discounted Price"
                                                value={discountedPrice}
                                                onChange={(e) => setDiscountedPrice(e.target.value)}
                                                disabled={disabled}
                                            />
                                            <p className="text-gray-600">© The Project Price Includes Your Author Fee.</p>
                                        </div>
                                    </div>
                                )}
                                {/* {activeTab === "button2" && <p></p>} */}
                            </div>
                        </div>
                    </div>
                    {
                        !disabled && (
                            <Footer metadata={{
                                elementIndex,
                                formChanges: { price, discountedPrice }
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