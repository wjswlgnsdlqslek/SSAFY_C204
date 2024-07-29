import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

const ContentDrawer = ({ isOpen, onClose, content }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10">
      <div
        className="fixed inset-0 bg-black bg-opacity-30"
        aria-hidden="true"
      />
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <DialogPanel className="w-screen max-w-md p-4 bg-white">
          <button onClick={onClose} className="absolute top-4 right-4">
            &times;
          </button>
          {content && (
            <div>
              <img src={content.imageUrl} alt="Content" />
              <div className="mt-4">
                <h2 className="text-xl font-bold">{content.title}</h2>
                <p>{content.description}</p>
              </div>
            </div>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ContentDrawer;
