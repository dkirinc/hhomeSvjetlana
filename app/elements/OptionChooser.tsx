import { useContext, useState } from "react";
import { MainContext } from "../assets/Context/MainContext";

type Lang = 'hr' | 'en' | 'deu';

type OptionItem = {
    label: string;
    value: string;
    href?: string;
};

type OptionGroup = {
    id: string;
    items: OptionItem[];
};

const OptionChooser = ({
    option,
    options,
}: {
    option: string;
    options: OptionGroup[];
}) => {

    const { lang, setLang } = useContext(MainContext)

    const [isOpen, setIsOpen] = useState(false);

    const optionSelected = options.find((opt) => opt.id === option);

    if (!optionSelected) {
        return <div>Option group not found.</div>;
    }
    const itemAccSelected = optionSelected?.items.find((item) => item.value === lang)?.label ?? "N/A";



    return (
        <div className=" relative border border-b-2 flex justify-between content-center items-center px-2 py-2  "
            onClick={() => setIsOpen(!isOpen)}>
            <div className="w-full relative flex justify-between content-center items-center ">
                <div className="flex gap-2 content-center items-center justify-center">
                    <p className=" text-wrap text-lightGrey uppercase">{itemAccSelected}</p>
                </div>
            </div>
            <div
                className={`absolute  top-full left-0 mt-4 transform origin-top transition-all duration-300 ease-in-out ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
                    } flex flex-col bg-sand  z-10 shadow-md border text-left p-2 bg-[#E1BE6A]`}
            >
                <ul
                    className="w-full flex flex-col content-center justify-center gap-4 p-2"
                    onClick={(e) => e.stopPropagation()}
                >
                    {optionSelected.items.map((item, idx) => (
                        <li key={idx} className="w-full flex gap-2 content-center items-center justify-start"
                            onClick={() => {

                                setLang(item.value as Lang);
                                setIsOpen(false)
                            }

                            }
                        >
                            <a className=" hover:text-black transition-colors uppercase hover:cursor-pointer hover:underline" href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>);
}

export default OptionChooser;