import React, { useState, useRef, useEffect } from 'react';
import { GoPlus } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';

function Accordion() {
    const [openSection, setOpenSection] = useState(null);
    const contentRef = useRef([]);

    const sections = [
        {
            title: 'SHIPPING & RETURNS',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            id: 0,
        },
        {
            title: 'FEATURES & DETAILS',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            id: 1,
        },
        {
            title: 'OTHER INFORMATION',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            id: 2,
        },
    ];

    const handleSectionClick = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    return (
        <div className="md:w-[780px] w-full">
            {sections.map((section, index) => (
                <div key={index} className="border-b border-[#F0F0F0]">
                    <button
                        onClick={() => handleSectionClick(index)}
                        className="w-full md:py-6 py-2 text-left md:text-base text-sm text-[#262626] md:font-bold font-medium0 bg-white focus:outline-none"
                    >
                        <div className="flex justify-between">
                            <span>{section.title}</span>
                            {openSection === index ? (
                                <RxCross2 className="text-base text-[#262626] font-bold" />
                            ) : (
                                <GoPlus className="text-base text-[#262626]" />
                            )}
                        </div>
                    </button>
                    <div
                        ref={el => contentRef.current[index] = el}
                        className={`overflow-hidden transition-height duration-300 ease-in-out`}
                        style={{
                            maxHeight: openSection === index ? `${contentRef.current[index]?.scrollHeight}px` : '0px',
                        }}
                    >
                        <div className="md:text-base text-sm md:py-5 text-[#767676] leading-[187.5%]">
                            {section.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
