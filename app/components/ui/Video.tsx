import React from "react";

const Video = ({ videoId }: { videoId: string }) => {
  return (
    <iframe
      className="rounded-lg md:w-[660px] 2xl:w-[540px]"
      width="400"
      height="350"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
