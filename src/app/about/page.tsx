import Button from "components/Button";
import Navbar from "components/Navbar";
import Feature from "components/Feature"
import { HiOutlineSlash } from "react-icons/hi2";
import Image from "next/image";
const AboutUs = async () => {
    await new Promise ((resolve) => setTimeout(resolve, 100));
    return (

      <div className="h-[500vh] w-[100%]">

      <Navbar />

      <div className=" h-[100vh] w-[100%]">

        {/*-------------------- Section_Box --------------------  1*/}

        <div className=" First_section_box h-[30vh] w-[81.4vw] bg-[#CEEDFF] flex flex-row absolute justify-start items-center right-0 top-[167px] rounded-l-[30px] ">

          <div className="First_section_box_obsah flex flex-row justify-around items-center">

            <div className="Box_obsah flex flex-col w-[35vw] justify-center gap-4 relative left-10">

              <div className="First_sectionBox_nadpis text-[30px] font-bold font-inter">

                <h1 className="SectionBox_nadpis text-[#0F294F] text-[1.1em]">Řešíme inventuru na jedno kliknutí</h1>

              </div>

              <div className="First_sectionBox_text flex relative left-[15px] ">

                <p className="SectionBox_text font-poppins text-[0.9em] w-[38vw]">Pomocí systému RFID čteček a tagů dokážeme neustále sledovat stav všech skladových zásob.</p>

              </div>

              <div className="First_sectionBox_button h-[5vh] w-[11.56vw] bg-[#0F294F] font-inter text-[1.3em] text-[#CEEDFF] text-center rounded-[54px] flex justify-center items-center">

                <Button label="Jak to funguje?" target=""/>

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

        {/*-------------------- Section_Box --------------------  2*/}

       <div className="Second_section_box h-[40vh] w-[81.4vw] bg-[#CEEDFF] flex absolute justify-center items-center left-0 top-[440px] rounded-r-[30px] ">
          {/* Obsah hlavního boxu */}
          <div className="Second_section_box_obsah flex flex-col justify-around h-[30vh] w-[90%]">

            <div className="Second_sectionBox_nadpis text-[30px] font-bold font-inter">

              <h1 className="SectionBox_nadpis_2 text-[#0F294F] text-[1.1em]">Proč byste si měli vybrat nás?</h1>

            </div>

            <div className="Section_box_inf flex flex-col gap-12 w-full justify-start relative left-3">

              <div className="flex flex-row gap-12">

                <Feature number="01" title="Neexistuje na českém trhu" />
                <Feature number="02" title="První firma v inovacích" />
                <Feature number="03" title="Vysoce spolehlivá firma" />

              </div>


              <div className="flex flex-row gap-12 justify-evenly ">

                <div>

                  <Feature number="04" title="Snadné použití" />

                </div>

                <div>

                  <Feature number="05" title="Podpora a zákaznický servis" />
                  
                </div>
                  
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className=" h-[80vh] w-[100%] bg-[#0F294F] justify-center items-center flex flex-col">

        <div className="flex justify-center h-[23vh] w-[100%]">
    
          <h1 className="text-white font-inter font-bold text-center text-[3.5rem]">Co nabízíme?</h1>

        </div>

        <div>

            <div></div>
            <div></div>
            <div></div>

        </div>

      </div>

      <div className="h-[100vh w-[100%] bg-white">


      </div>

    </div>
    );
  }
  export default AboutUs;
