import { useEffect } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
import video from "../../../../../assets/videos/Preview_videos/Short_Video.mp4";

/* eslint-disable react/prop-types */
const Preview_modal = ({ openmodal, setOpenmodal }) => {
  useEffect(() => {
    if (openmodal) {
      document.body.style.overflow = "hidden";
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      document.body.style.backdropBlur = "blur(100px)";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.backgroundColor = "";
      document.body.style.backdropBlur = "none";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.backgroundColor = "";
      document.body.style.backdropFilter = "none";
    };
  }, [openmodal]);

  if (!openmodal) return null;

  return ReactDOM.createPortal(
    <div
      className="flex items-center justify-center z-[1000] fixed top-0 left-0 w-[100%] h-[100%] bg-[rgba(0, 0, 0, 0.5)]"
      // onClick={setOpenmodal(true)}
    >
      <div
        className="bg-white p-[20px] border-[5px] z-[1001]"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h1 className="font-semibold text-xl mb-4">Course Overview</h1>
          <h1 className="font-medium text-lg">Introduction to Web Development</h1>
        </div>
        <ReactPlayer controls={true} width="500px" height="400px" url={video} />
        <button onClick={() => setOpenmodal(false)}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default Preview_modal;
