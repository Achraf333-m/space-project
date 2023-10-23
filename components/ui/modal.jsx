import { modalState } from "@/states/atom";
import MuiModal from "@mui/material/Modal";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import Mars from "@/public/destination/image-mars.png";
import Moon from "@/public/destination/image-moon.png";
import Europa from "@/public/destination/image-europa.png";
import Titan from "@/public/destination/image-titan.png";
import { Zoom } from "@mui/material";
import CardContainer from "./CardContainer";

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleModal = () => {
    setShowModal(false);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleModal}
      className="max-w-5xl py-4 px-10 md:!p-10 m-auto !top-40 !flex !flex-col !items-center transition-all !duration-500"
    >
      <>
        <Zoom in={showModal} {...(showModal ? { timeout: 1000 } : {})}>
          <div className="space-y-2 md:space-y-16 text-center w-full">
            <h2 className="text-4xl tracking-wider font-extralight">
              Choose your destination
            </h2>
            <div className="flex space-x-4 justify-center w-full font-extralight">
              
              <CardContainer image={Mars} name={"Mars"} />
              
            </div>
            <Link href="/destinations" className="block max-w-sm m-auto">
              <button className="btn">
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
