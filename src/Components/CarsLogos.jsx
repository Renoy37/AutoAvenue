import React, { useState } from 'react';
import { TbBrandVolkswagen } from "react-icons/tb";
import { SiBmw, SiToyota, SiAlfaromeo, SiSubaru, SiMercedes, SiMazda, SiHonda, SiFord, SiChevrolet, SiNissan, SiHyundai, SiKia } from "react-icons/si";
import { FcNext, FcPrevious } from "react-icons/fc";

export const CarLogos = () => {
    const logos = [
        <TbBrandVolkswagen key="vw" />,
        <SiBmw key="bmw" />,
        <SiToyota key="toyota" />,
        <SiAlfaromeo key="alfaromeo" />,
        <SiSubaru key="subaru" />,
        <SiMercedes key="mercedes" />,
        <SiMazda key="mazda" />,
        <SiHonda key="honda" />,
        <SiFord key="ford" />,
        <SiChevrolet key="chevrolet" />,
        <SiNissan key="nissan" />,
        <SiHyundai key="hyundai" />,
        <SiKia key="kia" />
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;

    const next = () => {
        if (currentIndex + itemsPerPage < logos.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const prev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center mt-20">
                <div className="flex items-center justify-between w-full max-w-3xl mb-4">
                    <button 
                        onClick={prev} 
                        className={`bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} 
                        disabled={currentIndex === 0}
                        aria-label="Previous"
                    >
                        <FcPrevious />
                    </button>
                    <div className="flex flex-wrap justify-center gap-4">
                        {logos.slice(currentIndex, currentIndex + itemsPerPage).map((Logo) => (
                            <div key={Logo.key} className="bg-gray-300 rounded-md p-1 flex justify-center items-center w-16 h-16">
                                {Logo}
                            </div>
                        ))}
                    </div>
                    <button 
                        onClick={next} 
                        className={`bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300 ${currentIndex + itemsPerPage >= logos.length ? 'opacity-50 cursor-not-allowed' : ''}`} 
                        disabled={currentIndex + itemsPerPage >= logos.length}
                        aria-label="Next"
                    >
                        <FcNext />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default CarLogos;
