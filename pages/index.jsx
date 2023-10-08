import Image from "next/image";
import background from "@/public/home/background-home-desktop.jpg";
import BasicModal from "@/components/ui/modal";
import { useRecoilState } from "recoil";
import { modalState } from "@/states/atom";
import Nav from "@/components/Nav";

export default function Home() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  
  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Image
        src={background}
        alt=""
        className="-z-40 w-screen h-screen absolute"
      />
      <div className="px-10 h-screen z-40 overflow-hidden">
        <Nav />
        <main className=" m-auto max-w-5xl h-full flex items-center justify-between">
          <div className="w-[50%] h-full flex flex-col cursor-default">
            <h1 className="text-[140px] tracking-widest">Space</h1>
            <p className="max-w-lg text-xl">
              Ever wondered how vast space really is? Ever wanted to go to
              sapce? Now is your chance!
            </p>
          </div>
          <div onClick={handleModal} className="cursor-pointer border-2 opacity-80 bg-gradient-to-l active:scale-90 from-yellow-800 to-black hover:opacity-100 transition-all duration-500 border-[#ffc64a70] h-60 w-60 rounded-full flex justify-center items-center">
            <h2
              className="text-4xl tracking-[5px]"
              
            >
              Explore
            </h2>
          </div>
        </main>
        <BasicModal />
      </div>
    </>
  );
}
