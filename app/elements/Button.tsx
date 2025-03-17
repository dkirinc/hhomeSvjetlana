interface ButtonProps {
    text: string;
    gap: number;
    txSize: number;
}

const Button = ({ text, gap, txSize }: ButtonProps) => {


    return (
        <div className="flex content-center justify-center">
            <button className={`w-full h-full bg-[#E1BE6A] text-white p-2 text-${txSize}}`}>{text}</button>
        </div>
    );
}

export default Button;