import Image from "next/image";
import Logo from "../images/hhs_Logo.svg";
import Button from "./Button";

const Header = () => {
    return (
        <div className="w-full absolute left-0 top-0 z-10 bg-white flex  content-center justify-center items-center ">
            <div className="max-w-[1800px] w-full  flex content-center justify-between items-center p-10">
                <Image width={314} height={110} src={Logo} alt="logo" />
                <Button text={"REZERVACIJA"} padding={10} txSize={20} type={1} />

            </div>
        </div>

    );
}

export default Header;