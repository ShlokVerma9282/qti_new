import React, { useState, useEffect, useRef } from 'react';
import './Accordion.css';
import Chevron from './chevron.svg';

export default function Accordion() {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const accordionRefs = useRef([]);

    useEffect(() => {
        accordionRefs.current = accordionRefs.current.slice(0, accordionRefs.current.length);
    }, []);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className="accordion">
            <div>
                <button
                    onClick={() => toggleAccordion(0)}
                    className="accordion-visible"
                >
                    <span>Accordion Item 1</span>
                    <img
                        className={activeAccordion === 0 ? 'active' : ''}
                        src={Chevron}
                        alt=" "
                    />
                </button>

                <div
                    className={
                        activeAccordion === 0
                            ? 'accordion-toggle animated'
                            : 'accordion-toggle'
                    }
                    style={{
                        height:
                            activeAccordion === 0
                                ? `${accordionRefs.current[0]?.scrollHeight}px`
                                : '0px',
                    }}
                    ref={(el) => (accordionRefs.current[0] = el)}
                >
                    <p>
                        Content for Accordion Item 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit quae maiores sunt ducimus est dolorem perspiciatis earum corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel quo eligendi ipsam.
                    </p>
                </div>
            </div>

            <div>
                <button
                    onClick={() => toggleAccordion(1)}
                    className="accordion-visible"
                >
                    <span>Accordion Item 2</span>
                    <img
                        className={activeAccordion === 1 ? 'active' : ''}
                        src={Chevron}
                        alt=""
                    />
                </button>

                <div
                    className={
                        activeAccordion === 1
                            ? 'accordion-toggle animated'
                            : 'accordion-toggle'
                    }
                    style={{
                        height:
                            activeAccordion === 1
                                ? `${accordionRefs.current[1]?.scrollHeight}px`
                                : '0px',
                    }}
                    ref={(el) => (accordionRefs.current[1] = el)}
                >
                    <p>
                        Content for Accordion Item 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit quae maiores sunt ducimus est dolorem perspiciatis earum corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel quo eligendi ipsam.
                    </p>
                </div>
            </div>
            
        </div>
    );
}
