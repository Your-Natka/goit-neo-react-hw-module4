import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.8)',
        },
        content: {
          maxWidth: '900px',
          maxHeight: '90vh',
          margin: 'auto',
          inset: '40px',
          border: 'none',
          padding: '20px',
        },
      }}
    >
      <img
        className={css.modalImage}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </Modal>
  );
}
