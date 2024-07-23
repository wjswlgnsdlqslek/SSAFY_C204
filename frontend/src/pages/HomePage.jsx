import { useState } from "react";
import PortalTest from "../components/portal/portalTest";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="px-24">
      <h1 className="text-2xl mb-4">React Portal Example</h1>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Open Modal
      </button>
      <br />
      <br />
      <br />
      <br />
      <div className="p-4">
        <div className="bg-mainBlue text-white p-4 mb-4">
          Main Blue Background
        </div>
        <div className="bg-subBlue text-white p-4 mb-4">
          Sub Blue Background
        </div>
        <div className="bg-btnBlue text-white p-4 mb-4">
          Button Blue Background
        </div>
        <div className="bg-mainOrange text-white p-4 mb-4">
          Main Orange Background
        </div>
        <div className="bg-mainRed text-white p-4 mb-4">
          Main Red Background
        </div>
        <div className="text-mainTxt">Main Text Color</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <PortalTest isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl mb-2">Modal Content</h2>
        <p>This is an example of a modal using React Portal.</p>
      </PortalTest>
    </div>
  );
}

export default HomePage;
