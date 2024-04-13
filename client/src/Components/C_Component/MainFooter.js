export default function Footer(props) {
    return (
        <div className="p-2 m-4 mt-0 py-0">
            <div className="grid grid-cols-3 gap-4">
                <button className="p-2 rounded-md 
                font-sans font-medium text-lg bg-indigo-100 text-indigo-500">
                    Preview
                    <i className="fa fa-eye pl-2" style={{color: "rgb(99 102 241"}}></i>
                </button>
                <button className="col-span-2 p-2  
                bg-gradient-to-tr from-blue-500 to bg-purple-500 
                text-white rounded-md font-sans font-medium text-lg
                border-2 border-transparent
                hover:border-purple-700"
                onClick={props.handleSubmit}>
                    Create Project 
                    <i className="fa-solid fa-arrow-right pl-2" style={{color: "#fcfcfc"}}></i>
                </button>
            </div>
        </div>
    )
}