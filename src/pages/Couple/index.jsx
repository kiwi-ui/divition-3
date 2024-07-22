import groom from '../../assets/groom.jpg';
import bride from '../../assets/bride.jpg';
import { BsInstagram } from 'react-icons/bs';
import style from './style.module.css';
import bride2 from '../../assets/profile.jpg';
import bride3 from '../../assets/g-4crop.webp';
import groom1 from '../../assets/g-1crop.webp';
import groom2 from '../../assets/g-5crop.webp';
import bride2blur from '../../assets/profile-blur.jpg';
import bride3blur from '../../assets/g-4crop-blur.jpg';
import groom1blur from '../../assets/g-1crop-blur.jpg';
import groom2blur from '../../assets/g-5crop-blur.jpg';
import { useEffect, useState } from 'react';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import Placeholder from '../../components/Placeholder';

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
            <div className="">
                <div className="text-black container">
                    <div>
                        <p className="fs-3">Ar-Rum 21</p>
                    </div>
                    <p className="lead mb-5">Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir</p>
                </div>

                <div className="text-black d-flex flex-lg-row flex-column justify-content-center gap-3 my-2">
                        <div className='d-flex flex-column'>
                            <div className='d-flex flex-row justify-content-start position-relative'>
                                <img src={ bridePhotos[currentImg] } className={`shadow w-100 ${ style.roundedTopLeftCornerAside } ${fade ? '' : style.second}`} alt="bride"/>
                                <span className={ `${ style.rotate90 }  text-danger fs-2 bg-body position-absolute start-0 h-100 px-2`}>The Bride</span>
                                
                                <div className={ `${ style.bgTransparent1 } bottom-0 w-75 px-4 py-3 position-absolute ` } style={{ zIndex: 2, left: '3rem' }}>
                                    <div className='container text-start'>
                                        <p className="fw-semibold mb-1 text-start" style={{ fontSize: '2rem' }}>Yusni Anggara</p>
                                        <p className="fs-4 mb-0 fw-bold">Putri bungsu dari</p>
                                        <p className="fs-5 mb-2">Bapak mempelai & Ibu mempelai</p>
                                        <div className="">
                                            <BsInstagram className="fs-4"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex flex-column'>
                            <div className={ `d-flex flex-row justify-content-center justify-content-start position-relative` }>
                                <img src={ groomPhotos[currentImg] } className={`shadow w-100 ${ fade ? '' : style.second }`} alt="groom"/>
                                <span className={` ${ style.rotate90 } text-danger fs-2 bg-body position-absolute end-0 h-100 px-2`}>The Groom</span>
                                
                                <div className={` ${ style.bgTransparent1 } bottom-0 w-75 text-center px-4 py-3 position-absolute `} style={{zIndex: 2, right: '3rem'}}>
                                    <div className='container text-end'>
                                        <p className="fw-semibold mb-1" style={{ fontSize: '2rem' }}>Akhwatiyah</p>
                                        <p className="fs-4 mb-0 fw-bold">Putri bungsu dari</p>
                                        <p className="fs-5 mb-2">Bapak mempelai & Ibu mempelai</p>
                                        <div className="">
                                            <BsInstagram className="fs-4"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                {/* <div className="my-4">
                    <p className="m-0 lead text-black">Maka dari itu kami mengharap kehadiran dari bapak/ibu tepatnya pada : </p>
                </div> */}
            </div>
        </div>
  )
}

export default Couple
