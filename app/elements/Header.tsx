import Image from "next/image";
import Logo from "../images/hhs_Logo.svg";
import Button from "./Button";

const Header = () => {
    return (
        <div className="w-full p-6 fixed px-20  left-0 top-0 z-10 bg-white flex items-center justify-between">
            <Image width={314} height={110} src={Logo} alt="logo" />
            <Button text={"REZERVACIJA"} gap={4} txSize={1} />
        </div>
    );
}

export default Header;