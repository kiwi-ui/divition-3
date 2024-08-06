import { useState, useEffect, useRef } from 'react';
import { BsPlayCircleFill, BsPauseCircleFill} from 'react-icons/bs';
import songFile from '../../assets/music/bungaAbadi.mp3';
import style from './style.module.css';
import general from '../../App.module.css';
const Music = () => {
    const audioRef = useRef(new Audio(songFile));   
    const [isPlaying, setIsPlaying] = useState();

    const toggleSong = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    };

    useEffect(() => {
        const audio = audioRef.current;

        const handleEnded = () => {
            audio.currentTime = 0;
            audio.play();
        };

        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    return (
        <div className={ `position-fixed text-center text-white end-0 me-3 mt-3 top-0 ${ style.z10 }` } onClick={ toggleSong }>
            <button className={`d-flex align-items-center justify-items-center m-0 my-3 mx-1 position-relative bg-transparent rounded-circle border-0 ${general.colorPrimary}`}>
                { !isPlaying ? <BsPauseCircleFill className="bg-transparent rounded-circle text-color-primary fs-1"/> : <BsPlayCircleFill className="fbg-transparent rounded-circle text-color-primary fs-1"/> }
            </button>
        </div>
    );
};

export default Music;
