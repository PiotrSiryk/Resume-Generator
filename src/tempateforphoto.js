import React, { useState, useCallback, useEffect, useRef } from "react";
import Cropper from "react-easy-crop";
import "./styles.css";
import ImageUploading from "react-images-uploading";

const App = () => {
  const canvasRef = useRef();
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
    setImage(imageList);
  };

  useEffect(() => {
    const myImg = new Image();
    if (image) {
      myImg.src = image[0].data_url;
      const ctx = canvasRef.current.getContext("2d");

      if (setDisplayStatsPixels) {
        canvasRef.current.height = 300;
        canvasRef.current.width = 300;
      }
      console.log(myImg.width);
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
    <>
      <div>
        <div className="stuff">
          <ImageUploading
            value={image}
            onChange={onChange}
            dataURLKey="data_url"
          >
            {({ onImageUpload }) => (
              <div className="upload__image-wrapper">
                <button onClick={onImageUpload}>Click here</button>
                &nbsp;
              </div>
            )}
          </ImageUploading>
        </div>
      </div>
      {image && (
        <div className="App">
          <div className="crop-container">
            <Cropper
              zoomSpeed={0.2}
              /* cropShape="round" */
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
      {image && displayStats && (
        <div className="display-image">
          <canvas className="my-canvas" ref={canvasRef}></canvas>
        </div>
      )}
    </>
  );
};

export default App;
