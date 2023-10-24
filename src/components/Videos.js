import React, { useRef, useState, useEffect } from "react";
import { HiPlay } from "react-icons/hi2";

const Videos = () => {
  const videoRef = useRef(null);
  const [showIcon, setShowIcon] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setVideoLoaded(true);
      });
    }
  }, []);

  const handlePlay = () => {
    if (videoRef.current && videoLoaded) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch((error) => {
          console.log("Autoplay was prevented:", error);
        });
        setShowIcon(false);
      } else {
        videoRef.current.pause();
        setShowIcon(true);
      }
    }
  };

  return (
    <div className="">
      <div
        onMouseOver={() => setShowIcon(true)}
        onMouseLeave={() => setShowIcon(false)}
        className=" relative"
      >
        <video
          ref={videoRef}
          className="w-full rounded-[20px]"
          controls
          onMouseOver={() => setShowIcon(true)}
          onMouseLeave={() => setShowIcon(false)}
          onPlay={() => setShowIcon(false)}
          onPause={() => setShowIcon(true)}
        >
          <source
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rWFRtEk4Ejrjb627h/videoblocks-2955z_footbtrainmd23_srva8w8qg5__9870921a8972ed851ba0f88dc0e7e0d2__P360.mp4
"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {showIcon && (
          <div
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className=" rounded-[100%] bg-secondary w-16 h-16 ">
              <HiPlay className="text-primary text-[28px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;
