"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MostRead } from "@/components/Constants/media-room/media-room_data.json";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("@/components/media-room/Modal"));

const Page4 = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    img: "",
    title: "",
    dialogDescription: "",
  });

  const openModal = (content: {
    img: string;
    title: string;
    dialogDescription: string;
  }) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="bg-white h-full lg:w-[30%] rounded-2xl font-poppins px-[1rem]">
        <h2 className="text-[#483d73] text-2xl my-4">{MostRead.title}</h2>
        <div className="h-[37rem] overflow-hidden mb-4">
          <div className="overflow-y-auto h-full scrollbar space-y-5 pr-1">
            {MostRead.sections.map((item, index) => (
              <div
                key={index}
                className="flex items-center border-b-2 pb-[1.1rem] space-x-1"
              >
                <div className="w-[65%] relative">
                  <div className="absolute top-0 right-0 text-md hover:bg-[#E6E7E6] rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <circle cx="12" cy="5" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="12" cy="19" r="2" />
                    </svg>
                  </div>
                  <p className="border border-black rounded-md text-center text-sm w-max px-2">
                    {item.filter}
                  </p>
                  <h3 className="font-medium">{item.title}</h3>
                  <button
                    aria-label="Open"
                    onClick={() => openModal(item)}
                    className="flex items-center text-[#483d73] text-sm group bg-[#E6E7E6] hover:bg-black hover:text-white rounded-full pl-2 pr-1"
                  >
                    {item.continueReading}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-4 h-4 ml-2 stroke-black group-hover:stroke-white"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="w-[35%]">
                  <Image
                    className="rounded-xl"
                    width={400}
                    height={400}
                    src={item.img}
                    alt={""}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex lg:flex-row flex-col items-center justify-center lg:space-x-4">
          <Image
            className="lg:w-[50%] rounded-3xl lg:mt-0 mt-6"
            width={400}
            height={400}
            src={modalContent.img}
            alt={modalContent.title}
          />
          <div className="lg:w-[50%] w-full">
            <h2 className="text-xl lg:text-left text-center lg:mt-0 mt-[0.5rem] mb-[0.5rem] text-[#483d73] font-medium font-poppins">
              {modalContent.title}
            </h2>
            <div className="overflow-hidden lg:h-[12rem] lg:pr-4 w-full h-[11rem]">
              <div className="overflow-auto h-full scrollbar-custom scrollbar">
                <p className="font-poppins lg:text-left text-center text-sm">
                  {modalContent.dialogDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Page4;
