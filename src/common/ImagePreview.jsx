import { getImageData } from "./getImageData";

export default function ImagePreview({ image }) {
  const { src, name } = getImageData(image);

  if (!src) return null;

  return (
    <div className="mt-2">
      <img
        src={src}
        alt={name || "preview"}
        className="w-24 h-24 object-cover rounded border"
      />
      {name && (
        <p className="text-xs text-gray-600 mt-1 truncate">{name}</p>
      )}
    </div>
  );
}
