import groom from '../../assets/couple/groom.jpg';
import { BsInstagram } from 'react-icons/bs';
import bride from '../../assets/couple/bride.jpg';
import style from './style.module.css';
import bride2 from '../../assets/couple/profile.jpg';
import bride3 from '../../assets/couple/g-5crop.jpg';
import groom1 from '../../assets/couple/g-1crop.jpg';
import groom2 from '../../assets/couple/g-4.jpg';

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
        <div className={ `text-center position-relative` } id="main">
            <div className={`bg-light text-black py-5`}>
                <div className="container position-relative" >
                    <div>
                        <p className="fs-2 fw-semibold" style={{zIndex: 100}}>Ar-Rum 21</p>
                    </div>
                    <p className="fs-5 mb-0" style={{zIndex: 100}}>Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir</p>
                </div>
            </div>

            <div className="text-black d-flex flex-lg-row flex-column justify-content-center gap-md-3">
                <div className='d-flex flex-column'>
                    <div className='d-flex flex-row justify-content-start position-relative'>
                        <img src={ bridePhotos[currentImg] } className={`shadow w-100 ${ style.roundedTopLeftCornerAside } ${fade ? '' : style.second}`} alt="bride"/>
                        <span className={ `${ style.rotate90 } ${ style.bgTag } text-white fs-2 position-absolute start-0 h-100 px-3`}>The Bride</span>
                        
                        <div className={ `${ style.bgTransparent1 } bottom-0 w-75 px-3 py-3 position-absolute ` } style={{ zIndex: 2, left: '3rem' }}>
                            <div className='container text-start'>
                                <p className="fw-semibold mb-1 text-start fs-2" style={{ letterSpacing:'0.2rem' }}>James Blood</p>
                                <p className="fs-4 mb-0 fw-bold">Putri bungsu dari</p>
                                <p className="mb-2">Bapak mempelai & Ibu mempelai</p>
                                <div className="">
                                    <BsInstagram className="fs-3" style={{color:'rgb(179, 148, 151)'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column'>
                    <div className={ `d-flex flex-row justify-content-center justify-content-start position-relative` }>
                        <img src={ groomPhotos[currentImg] } className={`shadow w-100 ${ fade ? '' : style.second }`} alt="groom"/>
                        <span className={` ${ style.rotate90 } ${ style.bgTag } text-white fs-2 position-absolute end-0 h-100 px-3`}>The Groom</span>

                        <div className={` ${ style.bgTransparent1 } bottom-0 w-75 text-center px-4 py-3 position-absolute `} style={{zIndex: 2, right: '3rem'}}>
                            <div className='container text-end'>
                                <p className="fw-semibold mb-1 fs-3" style={{ letterSpacing: "0.2rem" }}>Akhwatiyah</p>
                                <p className="fs-4 mb-0 fw-bold">Putri bungsu dari</p>
                                <p className=" mb-2">Bapak mempelai & Ibu mempelai</p>
                                <div className="">
                                    <BsInstagram className="fs-3" style={{color:'rgb(179, 148, 151)'}}/>
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
  )
}

export default Couple
