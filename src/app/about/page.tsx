import Button from "components/Button";
import Navbar from "components/Navbar";
import { HiOutlineSlash } from "react-icons/hi2";
import Image from "next/image";
const AboutUs = async () => {
    await new Promise ((resolve) => setTimeout(resolve, 100));
    return (

      <div className=" h-[100vh] w-[100%]">

        <Navbar />

        <div className=" First_section_box h-[27vh] w-[81.4vw] bg-[#CEEDFF] flex flex-row absolute justify-start items-center right-0 top-[167px] rounded-l-[30px] ">

          <div className="First_section_box_obsah flex flex-row justify-around items-center">

            <div className="Box_obsah flex flex-col w-[35vw] gap-3 justify-center relative left-8">

              <div className="First_sectionBox_nadpis text-[30px] font-bold font-Inter">

                <h1 className="SectionBox_nadpis text-[#0F294F] text-[1.2em]">Řešíme inventuru na jedno kliknutí</h1>

              </div>

              <div className="First_sectionBox_text flex relative left-[10px]">

                <p className="SectionBox_text font-poppins text-[0.9375em] w-[38vw]">Pomocí systému RFID čteček a tagů dokážeme neustále sledovat stav všech skladových zásob.</p>

              </div>

              <div className="First_sectionBox_button h-[5vh] w-[11.56vw] bg-[#0F294F] font-Inter text-[1.3em] text-[#CEEDFF] text-center rounded-[54px] flex justify-center items-center">

                <Button label="Jak to funguje?"/>

              </div>

            </div>

            <div className="flex justify-center items-center">

              <HiOutlineSlash className="stroke-[#1D8DCD] text-[12rem]"/>

            </div>

            <div>

              <Image src="/Images/ukazka.svg" alt="logo" width={510} height={100} />
               
            </div>

          </div>

        </div>

      </div>
    );
  }
  export default AboutUs;