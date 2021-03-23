import "./imageGallery.scss";
import ReactGallery from "react-image-gallery";
import { useEffect, useState } from "react";
import { fetchImgs } from "./../../utils/fetchData";
const ImageGallery = ({ specificGallery, large }) => {
  const [images, setImages] = useState([]);
  const galleryCMSId = 27;

  useEffect(() => {
    const fetchGallery = async () => {
      setImages(await fetchImgs(galleryCMSId));
    };
    fetchGallery();
  }, []);

  return (
    <ReactGallery
      items={specificGallery ? specificGallery : images}
      className={large ? "image-gallery large-gallery" : "image-gallery"}
    />
  );
};

export default ImageGallery;
