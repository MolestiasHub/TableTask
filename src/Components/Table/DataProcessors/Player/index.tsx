import useOpenClose from "@/hooks/useOpenClose";
import { FC, useCallback, useRef, useState } from "react";
import cn from "./player.module.scss";
import Play from "@/Icons/Play";
import Download from "@/Icons/Download";

interface IPlayer {
  recordTime: string;
  audioId: string;
  partnerId: string
}

const Player: FC<IPlayer> = ({ recordTime,   }) => {
  const [isPlaying, , , toggle] = useOpenClose(false);
  const [, setCurrentTime] = useState(0);
  const [, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const toggleAudio = useCallback(() => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    toggle();
  }, [isPlaying, toggle]);

  return (
    <div className={cn.player}>
      <audio
        ref={audioRef}
        // src={`https://api.skilla.ru/mango/getRecord?record=${audioId}&partnership_id=${partnerId}`}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div className="playerTimer">{recordTime}</div>
      <div className={cn.circle} onClick={toggleAudio}>
        {isPlaying?"":<Play/>}
      </div>
      <div className={cn["player--progress"]}>
        {/* <div
          className="playerProgressBar"
          style={{
            width: `${progressPercent}%`,
          }}
        /> */}
      </div>
      <Download/>
      {/* <div className="playerDeleteBtn">
        <img src={closeIcon} alt="play" width="24" height="24" />
      </div> */}
    </div>
  );
};

export default Player;
