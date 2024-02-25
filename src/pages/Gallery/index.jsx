import { useState } from 'react';
import g1 from '../../assets/img/g-1.webp';
import g2 from '../../assets/img/g-2.webp';
import g3 from '../../assets/img/g-3.webp';
import g4 from '../../assets/img/g-4.webp';
import g5 from '../../assets/img/g-5.webp';
import g6 from '../../assets/img/g-6.webp';
import ModalImage from './ModalImage';
import style from './style.module.css';

const Gallery = () => {
    const galleryImages = [{img: g1},{img: g2},{img: g3},{img: g4},{img: g5},{img: g6}]
    const [isPhotoClicked, setisPhotoClicked] = useState(false)
    const [clickedPhoto, setClickedPhoto] = useState('')
    const showImage = (param) => {
        setisPhotoClicked(!isPhotoClicked);
        setClickedPhoto(param.target.src);
    }

    return (
        <>
            <ModalImage toggle={ isPhotoClicked } setToggle={ setisPhotoClicked } clickedPhoto={ clickedPhoto }/>
            <section id="gallery" className={ `gallery ${style.bgColorPrimary} mt-4 position-relative` }>
                <div className="container py-5 text-black">
                    <div className="text-center w-75 position-relative" style={{transform: "translateX(-50%)", right: "-50%"}}>
                        <p className="fw-bold m-0 fs-1">Gallery</p>
                        <p className="fs-3 pb-3 fs-3" style={{borderBottom :"0.3rem solid #2b2b2b"}}>Momen terbaik terekam abadi</p>
                    </div>  

                    <div className="row">
                        {galleryImages.map((image, index) => 
                            (
                                <div key={index} className="gallery-photos col-6 mb-3 p-1 position-relative shadow-sm">
                                    <img className=" w-100" src={ image.img } alt='prewedding' onClick={ showImage } />
                                </div> 
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery
