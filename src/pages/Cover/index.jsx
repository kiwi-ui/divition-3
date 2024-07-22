import { useParams } from 'react-router-dom';
import profileImage from '../../assets/cover.jpg';
import style from'./style.module.css';
import { BsEnvelopeHeart } from 'react-icons/bs';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cover = ({ hide, setHide, handleLoad, isLoading, setIsLoading }) => {
    
    const { name } = useParams();
    const navigate = useNavigate();
    const hideCover = () => {
        // if (document.readyState === 'complete') {
        //             setIsLoading(false)
        //         }
        navigate(`/${name}/main`)
    }
    // useEffect(() => {    
    //     if (document.readyState === 'complete') {
    //         setIsLoading(false)
    //     } else {
    //         window.addEventListener('load', handleLoad);
    
    //         return () => {
    //             window.removeEventListener('load', handleLoad);
    //         };
    //     }
    // }, [isLoading]);
    return (
        <section className={ `${ style.bgCover } text-white overflow-hidden d-flex flex-column justify-content-between align-items-center text-center py-5` }>
            <div className={`${ style.z10 }`}>
                <p className='fs-4'>Undangan Pernikahan</p>
                <p className={`mb-1 fw-bold ${style.textColorPrimary} `} style={{letterSpacing: '0.2rem', fontSize: '2.4rem'}}>Yusni & Anggara</p>
                <p className='fs-5 mb-0 text-white'>Sabtu, 27 April 2024</p>
            </div>

            <div className={` ${ style.z10 } `}>
                <p className="fs-5 m-0">Kepada yang terhormat</p>
                <p className="fs-5 m-0">Bapak/Ibu/Saudara</p>
                <p className={`fs-1 fw-bold mb-3 ${style.textColorPrimary}`}>{ name }</p>
                <p>di tempat</p>

                <button onClick={ hideCover } className={ `${style.bgButton} rounded-4 px-3 py-1 position-relative start-50 translate-middle-x text-white border-0 d-flex flex-row align-items-center justify-content-center gap-2 shadow`}>
                    <BsEnvelopeHeart />
                    <span className="text-white text-decoration-none fs-5">Buka Undangan</span>
                </button>
            </div>
        </section>
  )
}

export default Cover
