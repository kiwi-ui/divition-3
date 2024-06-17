import groom from '../../assets/groom.jpg';
import bride from '../../assets/bride.jpg';
import { BsInstagram } from 'react-icons/bs';
import style from './style.module.css';
import bride2 from '../../assets/profile.jpg';
import bride3 from '../../assets/g-4crop.webp';
import groom1 from '../../assets/g-1crop.webp';
import groom2 from '../../assets/g-5crop.webp';
import { useEffect, useState } from 'react';

const Couple = () => {
    const bridePhotos = [bride,bride2,bride3];
    const groomPhotos = [groom, groom1, groom2];
    const [currentImg, setCurrentImg] = useState([]);
    const [fade, setFade] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true)
            setTimeout(() => {
                setCurrentImg((index) => (index+1) % bridePhotos.length );
                setFade(false);
            }, 3000);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${style.bgColorPrimary} text-center py-5`} id="main">
            <div className="container">
                <div className="text-black">
                    <p className="fw-semibold fs-1 mb-2">Y&A</p>
                    <p className="fs-3">Ar-Rum 21</p>
                    <p className="lead mx-5">Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir</p>
                </div>

                <div className="text-black d-flex flex-lg-row flex-column my-4 ">
                    <div className='d-flex flex-column'>
                        <div className='d-flex flex-row justify-content-lg-center justify-content-start position-relative'>
                            <img src={ bridePhotos[currentImg] } className={`shadow w-50 ${style.roundedTopLeftCornerAside} ${fade ? '' : style.second}`} alt="bride"/>
                            <span className={`${style.rotate90} ${style.roundedBotRightCorner} text-danger fs-2 bg-body `}>The Bride</span>
                        </div>
                        <div className="mt-3 text-lg-center text-start">
                            <p className="fs-2 fw-semibold">Yusni</p>
                            <p className="fs-5 mb-4">Putri dari bapak Ahmad</p>
                            <BsInstagram className="fs-4 fw-lighter"/>
                        </div>
                    </div>

                    <p className="m-4 fs-1 fw-bold my-md-5">&</p>

                    <div className='d-flex flex-column'>
                        <div className={`d-flex flex-row justify-content-lg-center justify-content-end position-relative`}>
                            <span className={` ${style.rotate90} ${style.roundedTopLeftCornerAside} text-danger start-0 fs-2 bg-body `}>The Groom</span>
                            <img src={ groomPhotos[currentImg] }  className={`shadow w-50 ${fade ? '' : style.second} ${style.roundedBotRightCorner}`} alt="groom"/>
                        </div>
                        <div className="mt-3 text-lg-center text-end">
                            <p className="fs-2 fw-semibold">Anggara</p>
                            <p className="fs-5 mb-4">Putri dari bapak Dani</p>
                            <BsInstagram className="fs-4"/>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="m-0 lead text-black">Maka dari itu kami mengharap kehadiran dari bapak/ibu tepatnya pada : </p>
                </div>
            </div>
        </div>
  )
}

export default Couple
