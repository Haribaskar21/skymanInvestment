import { Dialog } from '@headlessui/react';

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <div className="bg-white p-6 rounded-xl shadow-lg z-50 w-full max-w-md mx-auto">
        <Dialog.Title className="text-lg font-bold mb-4">Confirm Delete</Dialog.Title>
        <p className="mb-6">Are you sure you want to delete this item?</p>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 rounded bg-red-600 text-white">Delete</button>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteConfirmModal;
