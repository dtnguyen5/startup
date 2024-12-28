// src/app/home/page.tsx
import Navbar from "components/Navbar";
import Button from "../components/Button";
import Image from "next/image";
const HomePage = async () =>{

  await new Promise ((resolve) => setTimeout(resolve, 100));

  return (

    <div className="HomePageBody bg-[url('/images/inventura.svg')] h-[90vh] w-[100%] bg-cover">

      <Navbar />

      <div className="flex flex-col justify-center items-center text-center text-white h-[48vh]">

         <h1 className="text-[62px] font-bold font-Poppins">Inventura na jedno kliknutí</h1>

          <div className="flex flex-col relative top-[41px] justify-center items-center h-[112px] ">

            <p className="text_home text-[21px] max-w-[550px] font-roboto leading-tight tracking-normal"> {/*leading-tight - mezery mezi radky, tracking-normal - mezery mezi pismeny */}

                Co kdybyste nemuseli kvůli inventuře na dlouhé dny zavírat, ztrácet tím čas a peníze, a zárověň měli jistotu, že se nikdy nepřepočítáte? S Tagify budete mít inventuru hotovou na jedno kliknutí, bez nákladných odstávek a bez starostí.      

            </p>

          </div>

      </div>

      <div className="flex flex-col text-[0F294F] text-[32px] font-Inter h-[18vh] items-center">

        <div className=" buttons h-[8vh] w-[15.16vw] flex items-center justify-center text-center bg-white text-[#0F294F] text-[28px] font-Inter rounded-full mb-4">

          <Button label="Jak to funguje?"/>

        </div>

        <div className=" buttons h-[8vh] w-[14.69vw] flex items-center justify-center text-center bg-white text-[#0F294F] text-[28px] font-Inter rounded-full">

          <Button label={<><span className="mr-5">Zjistit více</span>&nbsp;<span className="font-bold">↓</span></>} />

        </div>

      </div>

    </div>

  );
}

export default HomePage;
