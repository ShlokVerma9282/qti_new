export default function AccordionHeader(props) {
    const { toggleAccordion, elementIndex, activeIndex, title } = props;
    // const toggleAccordionIcon = () => {
    //     let toggleIcon = document.getElementById("toggleIcon")
    //     if (null != toggleIcon) {
    //         if (elementIndex === activeIndex) {
    //             toggleIcon.classList.remove("fa-plus");
    //             toggleIcon.classList.add("fa-minus");
    //         } else {
    //             toggleIcon.classList.remove("fa-minus");
    //             toggleIcon.classList.add("fa-plus");
    //         }
    //     }
    // }
    return (
        <button onClick={() => toggleAccordion(elementIndex)} className={`w-full p-4 py-3  
                ${activeIndex !== elementIndex ? "text-gray-800 font-medium text-lg" : "text-blue-700 font-bold text-xl"} 
                text-left bg-slate-50 hover:bg-slate-100 
                hover:rounded-lg transition ease-in-out duration-300`}>
            {title}
            <span className="float-right font-bold text-3xl text-gray-800 me-2">
                {activeIndex !== elementIndex ? "+" : "-"}
            </span>
            {/* <i className="fa-solid fa-plus float-right" id="toggleIcon" /> */}
            {/* {activeIndex !== elementIndex ? <i className="fa fa-plus float-right" id="toggleIcon1"/> :
                <i className="fa-solid fa-minus float-right" id="toggleIcon2"/>} */}
            {/* {toggleAccordionIcon()} */}
        </button>
    )
}