export const VideoPlayer = () => {
  return (
    <video className="w-full h-auto max-w-full" controls>
      <source
        src="https://pagedone.io/asset/uploads/1705298724.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};




import React from 'react';

export const YoutubePlayer = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?controls=1&showinfo=0&modestbranding=0&rel=0`;

  return (
    <div className=' bg-white mx-auto lg:w-[1000px] py-6 md:py-10 shadow-lg rounded-[40px] '>
    <div className="relative w-full  mx-auto h-0" style={{ paddingTop: "56.25%" }}>
      <iframe
        src={embedUrl}
        title="Course Video"
        frameBorder="1"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-xl" // Make iframe fill the container
      ></iframe>
    </div>
    </div>
  );
};

export default YoutubePlayer; 
