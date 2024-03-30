export default function AccordionHeader(props) {
    const { toggleAccordion, elementIndex, activeIndex, title } = props;
    return (
        <button onClick={() => toggleAccordion(elementIndex)} className="w-full p-4 font-medium font-sans 
                text-gray-800 text-left bg-sky-200 hover:bg-sky-300 transition ease-in-out duration-300">
            {title}
            <span className={`float-right transform ${activeIndex === elementIndex ?
                'rotate-180' : 'rotate-0'}  transition-transform duration-300`}>
                &#9660;
            </span>
        </button>
    )
}