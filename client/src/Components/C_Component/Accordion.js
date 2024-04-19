import C1 from "../C1_Component";
import C2 from "../C2_Component";
import C3 from "../C3_Component";
import C4 from "../C4_Component";
import C5 from "../C5_Component";
import C6 from "../C6_Component";

export default function Accordion() {

    return (
        <div className="p-3 m-2">
            {console.log("Accordion render")}
            <div key={0} className="border-2 mb-4 rounded-md">
                <C1 />
            </div>

            <div key={1} className="border-2 mb-4 rounded-md">
                <C2 />
            </div>

            <div key={2} className="border-2 mb-4 rounded-md">
                <C3 />
            </div>

            <div key={3} className="border-2 mb-4 rounded-md">
                <C4 />
            </div>

            <div key={4} className="border-2 mb-4 rounded-md">
                <C5 />
            </div>

            <div key={5} className="border-2 mb-4 rounded-md">
                <C6 />
            </div>

        </div>
    )
}