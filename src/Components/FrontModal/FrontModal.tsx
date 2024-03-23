"use client";
import { useState } from "react";
import CreateTaskModal from "../CreateModal/CreateModal";

const FrontModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={handleOpenModal}
      >
        Create Task
      </button>
      <CreateTaskModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default FrontModal;
