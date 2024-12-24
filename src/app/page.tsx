// src/app/home/page.tsx
import Navbar from "components/Navbar";
import Button from "../components/Button";
import Image from "next/image";
const HomePage = async () =>{

  await new Promise ((resolve) => setTimeout(resolve, 100));

  return (

    <div className="HomePageBody bg-[url('/images/inventura.svg')] h-[90vh] bg-cover">

      <Navbar />

      <div className="flex flex-col justify-center items-center text-center text-white h-[50vh]">

         <h1 className="text-[62px] font-bold font-Poppins">Inventura na jedno kliknutí</h1>

          <div className="flex flex-col relative top-[41px] justify-center items-center h-[112px] ">

            <p className="text_home text-[21px] max-w-[580px] font-roboto leading-tight tracking-normal">

                Co kdybyste nemuseli kvůli inventuře na dlouhé dny zavírat, ztrácet tím čas a peníze, a zárověň měli jistotu, že se nikdy nepřepočítáte? S Tagify budete mít inventuru hotovou na jedno kliknutí, bez nákladných odstávek a bez starostí.      

            </p>

          </div>

      </div>

      <div>

      <Button label="Jak to funguje?" />

      </div>

    </div>

  );
}

export default HomePage;
