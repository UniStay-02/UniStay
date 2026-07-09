import { useState } from "react";

const ImageGallery = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div>
        <img
          src={selectedImage}
          alt={name}
          className="w-full h-[450px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${name} ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            className={`h-28 w-full object-cover rounded-lg cursor-pointer transition duration-300 ${
              selectedImage === image
                ? "ring-4 ring-orange-500"
                : "hover:scale-105"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;