import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, RotateCw } from 'lucide-react';

const AudioPlayer = ({ src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  
  const audioRef = useRef(null);

  // Format time in M:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const skip = (amount) => {
    audioRef.current.currentTime += amount;
  };

  const changeSpeed = () => {
    const rates = [1, 1.5, 2];
    const nextRate = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
    audioRef.current.playbackRate = nextRate;
    setPlaybackRate(nextRate);
  };

  return (
    <div className='mx-auto container sm:container md:container xl:max-w-[1230px] border-y border-gray-200 py-4 my-12 '>
    <div className="w-full max-w-3xl   bg-white px-2">
      <h3 className="text-[20px] md:text-[24px] font-[400] text-[#282529] mb-6 leading-[14px] tracking-[0]">Listen to this audio</h3>
      
      <div className="flex items-start gap-4">
        {/* Hidden Audio Element */}

        <div className=' w-full flex items-center gap-4'>
                  <audio
          ref={audioRef}
          src={src}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />

        {/* Play/Pause Button */}
        <button 
          onClick={togglePlay}
          className="w-10 h-10 flex items-center justify-center bg-[#EC1E24] rounded-full text-white hover:bg-[#d61a20] transition-colors flex-shrink-0"
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </button>

        {/* Progress Bar & Time */}
        <div className="flex-grow flex flex-col gap-1">
          <div className="flex items-center gap-2 group">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-[2px] bg-gray-300 appearance-none cursor-pointer accent-black"
              style={{
                background: `linear-gradient(to right, #000 ${ (currentTime / duration) * 100}%, #e5e7eb ${ (currentTime / duration) * 100}%)`
              }}
            />
          </div>
          <span className="text-[12px] text-gray-600 font-medium">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
        </div>
  

        {/* Speed Control */}
        <button 
          onClick={changeSpeed}
          className="text-[13px] font-bold text-gray-500 hover:text-black w-8"
        >
          {playbackRate}X
        </button>

        {/* Skip Back 5s */}
        <button onClick={() => skip(-5)} className="relative text-gray-500 hover:text-black transition-colors">
          <RotateCcw size={22} strokeWidth={1.5} />
          <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold mt-0.5">5</span>
        </button>

        {/* Skip Forward 5s */}
        <button onClick={() => skip(5)} className="relative text-gray-500 hover:text-black transition-colors">
          <RotateCw size={22} strokeWidth={1.5} />
          <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold mt-0.5">5</span>
        </button>
      </div>

      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          height: 8px;
          width: 8px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
        }
      `}</style>
    </div>
    </div>
  );
};

export default AudioPlayer;