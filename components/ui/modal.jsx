import { modalState } from "@/states/atom";
import MuiModal from "@mui/material/Modal";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import Mars from "@/public/destination/image-mars.png";
import Moon from "@/public/destination/image-moon.png";
import { Zoom } from "@mui/material";




function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleModal = () => {
    setShowModal(false);
  };

  return (
    <MuiModal
    open={showModal}
    onClose={handleModal}
    className="max-w-5xl m-auto !top-40 !flex !flex-col !items-center transition-all !duration-500"
    
    >

      <>
    <Zoom in={showModal} {...(showModal ? { timeout: 1000 } : {})}>
        <div className="space-y-16 text-center w-full">
          <h2 className="text-4xl font-light tracking-wider">Choose your destination</h2>
          <div className="flex space-x-4 justify-center w-full">
            <div className="flex flex-col justify-center items-center w-full space-y-8">
              <Image src={Moon} className="destinationCard" />
              <h2 className="text-lg font-light">The Moon</h2>
            </div>
            <div className="flex flex-col justify-center items-center w-full space-y-8">
              <Image src={Mars} className="destinationCard" />
              <h2 className="text-lg font-light">Mars</h2>
            </div>
          </div>
          <Link href="/destinations" className="block">
            <button className="rounded-md hover:brightness-110 active:scale-90 transition-all bg-yellow-800 text-white px-8 py-2">
              See more destinations!
            </button>
          </Link>
        </div>
    </Zoom>
      </>

    </MuiModal>
    
  );
}


export default Modal;



