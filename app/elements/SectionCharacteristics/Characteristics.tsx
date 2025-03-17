import React from "react";

interface CharasteristicsProps {
    text: string;
}

const Characteristics: React.FC<CharasteristicsProps> = ({ text }) => {
    return (
        <div className="w-full flex items-center gap-2 font-light">
            <div className="w-3 h-3 bg-[#C0BFBF] rounded-full"></div>
            <p>{text}</p>
        </div>
    );
}

export default Characteristics;