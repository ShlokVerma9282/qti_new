export default function AccordionHeader(props) {
    const { toggleAccordion, elementIndex, activeIndex, title } = props;
    return (
        <button onClick={() => toggleAccordion(elementIndex)} className="w-full p-4 font-medium font-sans 
                text-gray-800 text-left bg-slate-50 hover:bg-slate-100 hover:rounded-lg transition ease-in-out duration-300 text-lg">
            {title}
            {activeIndex !== elementIndex && <span className="float-right font-bold font-sans text-xl text-gray-800 me-2">
                {/* &#9660; */}
                +
            </span>}
        </button>
    )
}