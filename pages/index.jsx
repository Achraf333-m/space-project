import background from "@/public/home/background-home-desktop.jpg";
import BasicModal from "@/components/ui/modal";
import { useRecoilState } from "recoil";
import { modalState } from "@/states/atom";
import Nav from "@/components/Nav";
import Background from "@/components/Background";
import Tab from "@/components/ui/Tab";

export default function Home() {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Tab name={"Home"} />
      <Background background={background} />
      <div className="pageFormat">
        <Nav />
        <main className=" m-auto max-w-5xl h-full flex items-center justify-between">
          <div className="w-[50%] h-full flex flex-col cursor-default">
            <h1 className="text-[140px] tracking-widest font-extralight">Space</h1>
            <p className="max-w-lg text-xl font-extralight">
              Ever wondered how vast space really is? Ever wanted to go to
              sapce? <br /> Now is your chance!
            </p>
          </div>
          <div
            onClick={handleModal}
            className="cursor-pointer border-2 bg-gradient-to-l hover:scale-100 scale-50 hover:shadow-2xl hover:shadow-[#97815092] bg-black transition-all duration-1000 border-[#ffc64a70] h-60 w-60 rounded-full flex justify-center items-center"
          >
            <h2 className="text-4xl tracking-[5px] font-extralight">Explore</h2>
          </div>
        </main>
        <BasicModal />
      </div>
    </>
  );
}
