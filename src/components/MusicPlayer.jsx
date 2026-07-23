import { useEffect, useRef, useState } from "react";
// import { FaPause, FaPlay } from "react-icons/fa";
import "../styles/MusicPlayer.css";

export default function MusicPlayer({ started }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (started && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          console.log("Autoplay blocked.");
        });
    }
  }, [started]);

  // const toggleMusic = () => {
  //   if (!audioRef.current) return;

  //   if (playing) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play();
  //   }

  //   setPlaying(!playing);
  // };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/background.mp3" type="audio/mpeg" />
      </audio>

      <div className="music-player">
        {/* <button onClick={toggleMusic}>
          {playing ? <FaPause /> : <FaPlay />}
        </button> */}

        <span>{playing ? "Music Playing" : "Play Music"}</span>
      </div>
    </>
  );
}