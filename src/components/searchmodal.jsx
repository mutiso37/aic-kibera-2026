export default function SearchModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="search-overlay active">
      <span className="close-search" onClick={onClose}>&times;</span>
      <input type="text" placeholder="Type what you're looking for..." autoFocus />
    </div>
  );
}