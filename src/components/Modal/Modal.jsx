import React from 'react'

export const Modal = ({isOpen, onClose, children}) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50" onClick={handleOverlayClick}></div>
          <div className="modal-content bg-white p-6 rounded-lg z-50 relative">
            <button
              className="modal-close-button absolute top-0 right-0 m-3 text-gray-600 hover:text-gray-800"
              onClick={onClose}
            >
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
