function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
  return (
    <div>
      <h2 className="font-bold text-sm mb-8">
        آیا از حذف {resourceName} مطمئن هستید؟
      </h2>
      <div className="flex items-center justify-between gap-x-8">
        <button
          disabled={disabled}
          onClick={onClose}
          className="btn btn--primary flex-1"
        >
          لغو
        </button>
        <button
          disabled={disabled}
          onClick={onConfirm}
          className="btn btn--danger flex-1 py-3"
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
