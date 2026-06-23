import css from './ImageCard.module.css';

export default function ImageCard({ image, onOpen }) {
  return (
    <div className={css.card}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onOpen(image)}
      />
    </div>
  );
}
