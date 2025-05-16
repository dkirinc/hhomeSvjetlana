'use client'

import { useEffect, useState } from 'react'
import { IoMailOutline } from "react-icons/io5";

interface ButtonProps {
    text: string;
    padding: number;
    txSize: number;
    type: number;
    reservation?: boolean;
    onClick?: () => void;
}

const Button = ({ text, padding, txSize, type, reservation = false, onClick }: ButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768); // Mobile breakpoint

        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile); // Listen for resize

        return () => window.removeEventListener('resize', checkMobile); // Cleanup
    }, []);

    return (
        <div className="flex content-center justify-center">
            <button
                className="w-full h-full bg-[#E1BE6A] text-white"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onClick}
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
            >
                {reservation && isMobile ? <IoMailOutline size={txSize * 2} /> : text}
            </button>
        </div>
    );
};

export default Button;
