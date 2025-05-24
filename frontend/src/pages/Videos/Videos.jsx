import React from "react";
import "../../styles/Videos.css";

const Videos = () => {
  return (
    <div className="videos">
      <iframe
        width="100%"
        height="215"
        src="https://www.youtube.com/embed/aAVGyRMS3gE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        width="100%"
        height="215"
        src="https://www.youtube.com/embed/pEkG-ma1YJ8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        width="100%"
        height="215"
        src="https://www.youtube.com/embed/2xp22IYL2uU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        width="100%"
        height="215"
        src="https://www.youtube.com/embed/T-lRbuy4XtA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Videos;
