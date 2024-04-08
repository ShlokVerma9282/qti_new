import { useContext } from "react";
import { ProjectContext } from "../ProjectContext";
import AccordionHeader from "./AccordionHeader";
import C1 from "../C1_Component";
import C2 from "../C2_Component";
import C3 from "../C3_Component";
import C4 from "../C4_Component";

export default function Accordion() {

    const { activeIndex } = useContext(ProjectContext)

    return (
        <div className="p-3 m-2">
            <div key={0} className="border-2 mb-4 rounded-md">
                <AccordionHeader elementIndex={0} title="Project Info" />
                {activeIndex === 0 && (<C1 elementIndex={0} />)}
            </div>

            <div key={1} className="border-2 mb-4 rounded-md">
                <AccordionHeader elementIndex={1} title="Project Intro Video" />
                {activeIndex === 1 && (<C2 elementIndex={1} />)}
            </div>

            <div key={2} className="border-2 mb-4 rounded-md">
                <AccordionHeader elementIndex={2} title="Project Builder" />
                {activeIndex === 2 && (<C3 elementIndex={2} />)}
            </div>

            <div key={3} className="border-2 mb-4 rounded-md">
                <AccordionHeader elementIndex={3} title="Project Price" />
                {activeIndex === 3 && (<C4 elementIndex={3} />)}
            </div>

            {/* C5 and C6 components to be added*/}
            <div key={4} className="border-2 mb-4 rounded-md">
                <AccordionHeader elementIndex={4} title="Additional Information" />
                {activeIndex === 4 && (
                    <div className="p-4 bg-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi facilisis ligula pulvinar libero dapibus, eget
                        pulvinar mi commodo. Donec ac consectetur ante.
                        Praesent sollicitudin sapien et convallis egestas.
                        Nam non tempus purus. Nullam nec pharetra justo.
                        Donec sit amet efficitur velit. Aliquam pulvinar,
                        turpis a egestas lacinia, dolor mi varius leo,
                        vel lobortis eros ex nec est.
                    </div>
                )}
            </div>

            <div key={5} className="border-2 mb-4 rounded-md">
                <AccordionHeader elementIndex={5} title="Certificate Template" />
                {activeIndex === 5 && (
                    <div className="p-4 bg-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi facilisis ligula pulvinar libero dapibus, eget
                        pulvinar mi commodo. Donec ac consectetur ante.
                        Praesent sollicitudin sapien et convallis egestas.
                        Nam non tempus purus. Nullam nec pharetra justo.
                        Donec sit amet efficitur velit. Aliquam pulvinar,
                        turpis a egestas lacinia, dolor mi varius leo,
                        vel lobortis eros ex nec est.
                    </div>
                )}
            </div>

        </div>
    )
}