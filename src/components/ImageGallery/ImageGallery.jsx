import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onOpen }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
}
