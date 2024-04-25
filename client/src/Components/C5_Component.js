import { useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import Header from "./Sub_Components/C_All_Header";

export default function C5() {

    const elementIndex = 4;

    // Destructuring context
    const { activeIndex } = useContext(ProjectContext);

    return (
        <>
            <Header elementIndex={elementIndex} title="Additional Information"
                disabled={false} />

            {activeIndex === elementIndex && (
                <>
                    <div className="bg-gray-100 ">
                        <div className="container mx-auto">
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
                        </div>
                    </div>
                </>
            )}
        </>
    )
}