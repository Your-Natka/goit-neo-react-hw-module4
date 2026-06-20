export default function ImageCard({ image, onOpen }) {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onOpen(image)}
      />
    </div>
  );
}
