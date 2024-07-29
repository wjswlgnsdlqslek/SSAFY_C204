import { Button } from "@headlessui/react";
import CustomModal from "../../common/customModal";

function TodoModal({
  title = "Title",
  isOpen,
  children,
  onClose,
  cancelText,
  onSubmit,
  submitText,
  onDelete,
  deleteText,
}) {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="text-center mb-5">{title}</div>
        <div className="text-mainTxt text-sm mb-4">{children}</div>
        <div className="flex gap-4 mt-4">
          {onClose && (
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-mainBlue py-2 px-4 text-sm font-semibold text-white shadow-md shadow-[#ff93ac]/20 transition-colors duration-300 hover:bg-subBlue focus:outline-none"
              onClick={onClose}
            >
              {cancelText || "Cancel"}
            </Button>
          )}
          {onDelete && (
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-mainBlue py-2 px-4 text-sm font-semibold text-white shadow-md shadow-[#ff93ac]/20 transition-colors duration-300 hover:bg-subBlue focus:outline-none"
              onClick={onDelete}
            >
              {deleteText || "Delete"}
            </Button>
          )}
          {onSubmit && (
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-mainBlue py-2 px-4 text-sm font-semibold text-white shadow-md shadow-[#ff93ac]/20 transition-colors duration-300 hover:bg-subBlue focus:outline-none"
              onClick={onSubmit}
            >
              {submitText || "Submit"}
            </Button>
          )}
        </div>
      </div>
    </CustomModal>
  );
}

export default TodoModal;
