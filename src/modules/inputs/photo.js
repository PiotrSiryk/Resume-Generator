import React, { useState, useCallback, useEffect, useContext } from "react";
import Cropper from "react-easy-crop";
import ImageUploading from "react-images-uploading";
import { dataContext } from "../../App";

export default function Photo() {
  const context = useContext(dataContext);

  const { canvasRef, language } = context;
  const [image, setImage] = useState();
  const [displayStats, setDisplayStats] = useState();
  const [displayStatsPixels, setDisplayStatsPixels] = useState();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setDisplayStats(croppedArea);
    setDisplayStatsPixels(croppedAreaPixels);
  }, []);
  const onChange = (imageList) => {
    console.log(imageList);
    setImage(imageList);
  };

  useEffect(() => {
    const myImg = new Image();
    if (image) {
      myImg.src = image[0].data_url;
      const ctx = canvasRef.current.getContext("2d");

      if (setDisplayStatsPixels) {
        canvasRef.current.height = 250;
        canvasRef.current.width = 250;
      }
      ctx.drawImage(
        myImg,
        displayStatsPixels.x,
        displayStatsPixels.y,
        displayStatsPixels.width,
        displayStatsPixels.height,
        0,
        0,
        250,
        250
      );
    }
  }, [displayStats, displayStatsPixels]);

  return (
    <div className="add-photo">
      <div>
        <ImageUploading value={image} onChange={onChange} dataURLKey="data_url">
          {({ onImageUpload }) => (
            <div className="upload__image-wrapper">
              <button onClick={onImageUpload} className="add-photo-btn">
                {language.nav.addPhoto}
              </button>
              &nbsp;
            </div>
          )}
        </ImageUploading>
      </div>
      {image && (
        <div className="crop">
          <div className="crop-container">
            <Cropper
              zoomSpeed={0.2}
              cropShape="round"
              image={image[0].data_url}
              crop={crop}
              zoom={zoom}
              aspect={1 / 1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div className="controls"></div>
        </div>
      )}
    </div>
  );
}
