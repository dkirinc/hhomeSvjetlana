import Button from "./Button";

const Footer = () => {
    return (
        <div className="w-full flex  content-center justify-center items-center   bg-[#F5F1F1]">
            <div className="max-w-[1400px] w-full flex content-center justify-between items-center p-10">
                <h2 className="text-3xl font-light">Rezerviraj svoj termin</h2>
                <Button text="Pošalji Upit" txSize={20} padding={20} type={1} />
            </div>
        </div>
    );
}

export default Footer;