'use client'

import { useState } from 'react'

interface ButtonProps {
    text: string;
    padding: number;
    txSize: number;
    type: number;
}

const Button = ({ text, padding, txSize, type }: ButtonProps) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex content-center justify-center">
            <button className={`w-full  h-full bg-[#E1BE6A] text-white`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    fontSize: `${txSize}px`,
                    padding: `${padding}px`,
                    color: `${type === 1 ? "white" : "black"}`,
                    background: isHovered
                        ? type === 1
                            ? "#d1a85e"
                            : "#f0f0f0"
                        : type === 1
                            ? "#E1BE6A"
                            : "white",
                }}
            >{text}</button>
        </div>
    );
}

export default Button;