import { useState } from "react";
import Modal from "@/ui/modal";
import Button from "@/ui/button";

export default function withConfirmation(Component) {
  return function WrappedComponent({
    children,
    renderItem = () => {},
    onConfirm = () => {},
  }) {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    return (
      <>
        <div onClick={() => setShowConfirmModal(true)}>{children}</div>
        <Modal
          isOpen={showConfirmModal}
          close={() => setShowConfirmModal(false)}>
          <div className="text-gray-800">
            Are you sure you want to delete this?
          </div>
          <div>{renderItem()}</div>

          <Button
            onClick={() => {
              onConfirm();
              setShowConfirmModal(false);
            }}>
            Yes
          </Button>
          <Button onClick={() => setShowConfirmModal(false)}>No</Button>
        </Modal>
      </>
    );
  };
}
