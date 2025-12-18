export const getImageData = (image) => {
  if (!image) {
    return { src: null, name: "" };
  }

  // Backend image URL
  if (typeof image === "string") {
    return {
      src: image,
      name: image.split("/").pop()?.split("?")[0] || "",
    };
  }

  // New uploaded File
  if (typeof window !== "undefined" && image instanceof File) {
    return {
      src: URL.createObjectURL(image),
      name: image.name,
    };
  }

  return { src: null, name: "" };
};
