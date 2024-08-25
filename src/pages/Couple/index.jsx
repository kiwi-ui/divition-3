import { BsInstagram } from 'react-icons/bs';
import style from './style.module.css';
import groom from '../../assets/couple/groom.webp';
import bride from '../../assets/couple/bride.webp';
import bride2 from '../../assets/couple/profile.webp';
import bride3 from '../../assets/couple/g-5crop.webp';
import groom1 from '../../assets/couple/g-1crop.webp';
import groom2 from '../../assets/couple/12.webp';
import fonts from '../../assets/fonts/fonts.module.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slide from '../../assets/animation';

const Couple = () => {
    const bridePhotos = [bride,bride2,bride3];
    const groomPhotos = [groom, groom1, groom2];
    const [currentImg, setCurrentImg] = useState([]);
    const [fade, setFade] = useState();
    
    useEffect(() => {
        setCurrentImg(0);
        const switchImage = async () => {
            // Fade out
            setFade(true);
            await new Promise(resolve => setTimeout(resolve, 4000)); // Adjust timeout to match fade duration

            // Update image
            setCurrentImg((prevIndex) => (prevIndex + 1) % bridePhotos.length);

            // Fade in
            setFade(false);
        };

        const interval = setInterval(switchImage, 5000); // Interval to switch images

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="couple" className={ `text-center position-relative` } >
            {/* <div className={ `bg-light text-black py-5` }>
                <div className="container position-relative" >
                    <div>
                        <u className="fs-2 fw-bold pb-3" style={{zIndex: 100}}>Ar-Rum 21</u>
                    </div>
                    <p className="fs-5 mb-0" style={{zIndex: 100}}>Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir</p>
                </div>
            </div> */}

            <div className="text-black d-flex flex-lg-row flex-column justify-content-center gap-md-3 mt-4">
                <Slide delay={1}>
                    <div className='d-flex flex-column'>
                        <div className={`${ style.details } d-flex flex-row justify-content-start position-relative`}>
                            <img src={ bridePhotos[currentImg] } className={`shadow w-100  ${ fade ? style.third : style.second } ` } alt="bride"/>
                            <span className={ `${ style.rotate90 } ${ style.detailsTag }  ${ style.bgTag } ${fonts.pinyonScript} text-white fs-1 position-absolute start-0 h-100 px-3`}>The Bride</span>

                            <div className={ `${ style.bgTransparent1 } rounded bottom-0 w-75 px-3 py-3 position-absolute ${style.bio}` } style={{ zIndex: 2, left: '3.4rem' }}>
                                <div className='container text-start'>
                                    <p className={ ` ${ fonts.pinyonScript } fw-semibold mb-1 fs-1 `} style={{ letterSpacing:'0.2rem' }}>Yusni Anggara</p>
                                    <p className="fs-4 mb-0 fw-bold">Putri bungsu dari</p>
                                    <p className="mb-2">Bapak mempelai & Ibu mempelai</p>
                                    <a className="btn bg-white" href="https://www.instagram.com/yusnianggara/" target='_blank' rel="noreferrer">
                                        <BsInstagram className="fs-3" style={{color:'rgb(179, 148, 151)'}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>

                <div className='d-flex flex-column' style={{overflowX:'hidden'}}>
                    <Slide delay={1.5}>
                        <div className={ ` ${ style.details2 } d-flex flex-row justify-content-center justify-content-start position-relative` }>
                            <img src={ groomPhotos[currentImg] } className={`shadow w-100 ${ fade ? '' : style.second }`} alt="groom"/>
                            <span className={` ${ style.rotate90 } ${ style.detailsTag } ${ fonts.pinyonScript } ${ style.bgTag } text-white fs-1 position-absolute end-0 h-100 px-3`}>The Groom</span>

                            <div className={` ${ style.bgTransparent1 } rounded bottom-0 w-75 text-center px-4 py-3 position-absolute ${style.bio}`} style={{zIndex: 2, right: '3.1rem'}}>
                                <div className='container text-end'>
                                    <p className={ ` ${ fonts.pinyonScript } fw-semibold mb-1 fs-1 `} style={{ letterSpacing: "0.2rem" }}>Yusni Anggara</p>
                                    <p className="fs-4 mb-0 fw-bold">Putri bungsu dari</p>
                                    <p className=" mb-2">Bapak mempelai & Ibu mempelai</p>
                                    <a className="btn bg-white" href="https://www.instagram.com/yusnianggara/" target='_blank' rel="noreferrer">
                                        <BsInstagram className="fs-3" style={{color:'rgb(179, 148, 151)'}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
  )
}

export default Couple
