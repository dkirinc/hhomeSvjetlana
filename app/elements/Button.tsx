interface ButtonProps {
    text: string;
    padding: number;
    txSize: number;
}

const Button = ({ text, padding, txSize }: ButtonProps) => {


    return (
        <div className="flex content-center justify-center">
            <button className={`w-full  h-full bg-[#E1BE6A] text-white`}
                style={{
                    fontSize: `${txSize}px`,
                    padding: `${padding}px`
                }}
            >{text}</button>
        </div>
    );
}

export default Button;