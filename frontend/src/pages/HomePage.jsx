import { useState } from "react";
import PortalTest from "../components/portal/portalTest";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className=" p-4">
      <h1 className="text-2xl mb-4">React Portal Example</h1>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Open Modal
      </button>
      <PortalTest isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl mb-2">Modal Content</h2>
        <p>This is an example of a modal using React Portal.</p>
      </PortalTest>
    </div>
  );
}

export default HomePage;
