import React from "react";
import Modal from "react-modal";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageSrc: string;
  title: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  imageSrc,
  title,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
      overlayClassName="fixed inset-0"
    >
      <div className="relative">
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times; {/* Close button */}
        </button>
        <img
          src={imageSrc}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
