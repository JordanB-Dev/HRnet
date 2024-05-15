export default function Modal({ open, onClose, children, styleBox, styleBtn }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/10 z-50' : 'invisible'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styleBox} rounded-xl shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <button
          onClick={onClose}
          className={` ${styleBtn} absolute top-1 right-1 p-1 rounded-lg`}
        >
          X
        </button>
        {children}
      </div>
    </div>
  )
}
