import React from "react";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 modal-background">
      <div className="absolute w-full h-full bg-black opacity-70"></div>
      <div className="relative z-50 max-w-xl mx-4 sm:mx-8">
        <button
          className="absolute top-4 right-4 text-white text-xl rounded-full border-2 border-slate-900 bg-slate-900 shadow-xl px-2"
          onClick={onClose}
        >
          &#215;
        </button>
        <img
          src={imageUrl}
          className="w-full max-h-96 sm:max-h-full border border-white"
          alt="Preview project"
        />
      </div>
    </div>
  );
};

export default ImageModal;
