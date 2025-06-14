import useOpenClose from "@/hooks/useOpenClose";
import { FC, useCallback, useRef, useState } from "react";
import cn from "./player.module.scss";
import Play from "@/Icons/Play";
import Download from "@/Icons/Download";
import callLengthToString from "@/helpers/callLengthToString";
import Pause from "@/Icons/Pause";

interface IPlayer {
  recordTime: number;
  audioId: string;
  partnerId: string;
  isFirst?: boolean;
}

const Player: FC<IPlayer> = ({ recordTime, audioId, partnerId, isFirst }) => {
  const [isPlaying, start, stop] = useOpenClose(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [url, setUrl] = useState("");

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const toggleAudio = useCallback(() => {
    if (!audioId && !partnerId) return;
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        // https://www.w3schools.com/HTML/horse.ogg
        if (!audioRef.current.src) {
          fetch(
            isFirst
              ? `https://cdn.freesound.org/previews/127/127149_667113-lq.mp3`
              : `https://api.skilla.ru/mango/getRecord?record=${audioId}&partnership_id=${partnerId}`
          )
            .then((response) => response.blob())
            .then((blob) => URL.createObjectURL(blob))
            .then((data) => {
              audioRef.current?.setAttribute("src", `${data}`);
              audioRef.current?.addEventListener("loadedmetadata", function () {
                audioRef.current?.play(); // Start playing once audio is loaded
              });
            });
          return;
        }
        audioRef.current?.play();
      }
    }
  }, [audioId, isFirst, isPlaying, partnerId]);

  const download = useCallback(() => {
    window.open(
      isFirst
        ? `https://cdn.freesound.org/previews/127/127149_667113-lq.mp3`
        : `https://api.skilla.ru/mango/getRecord?record=${audioId}&partnership_id=${partnerId}`
    );
  }, [audioId, isFirst, partnerId]);
  return recordTime || isFirst ? (
    <>
      <div className={cn.player}>
        <audio
          onPlay={start}
          onPause={stop}
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
        />
        <div className={cn["player--timer"]}>
          {callLengthToString(recordTime)}
        </div>
        <div className={cn[(partnerId&&audioId) || isFirst?"circle":"circle--disabled"]} onClick={toggleAudio}>
          {isPlaying ? <Pause /> : <Play />}
        </div>
        <div className={cn["player--progress"]}>
          <div
            style={{
              width: audioRef.current
                ? `${(currentTime / audioRef.current?.duration) * 100}%`
                : "",
            }}
            className={cn[(partnerId&&audioId) || isFirst?"player--progress--point":"player--progress--point--disabled"]}
          />
        </div>
        {(partnerId&&audioId) || isFirst?<Download onClick={download} />: <Download className={cn.disabled} />}
        {/* <div className="playerDeleteBtn">
        <img src={closeIcon} alt="play" width="24" height="24" />
      </div> */}
      </div>
      <div>{callLengthToString(recordTime)}</div>
    </>
  ) : <div></div>;
};

export default Player;
