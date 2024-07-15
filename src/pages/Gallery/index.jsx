import { useState } from 'react';
import g1 from '../../assets/g-1.webp';
import g2 from '../../assets/g-2.webp';
import g3 from '../../assets/g-3.webp';
import g4 from '../../assets/g-4.webp';
import g5 from '../../assets/g-7.webp';
import g6 from '../../assets/g-6.webp';
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
                    <div className="">
                        <p className="mb-0 p-0 fs-1 mt-2" style={{marginLeft:'-0.5rem'}}>Momen</p>
                        <div className="border border-1 border-black position-absolute ms-5" style={{ marginTop: '-0.6rem', width: '78%' }}></div>
                        <p className={`mb-0 position-absolute fs-1 ms-5 ${style.alexBrush}`} style={{ marginTop: '-1.4rem' }}>Bahagia</p>
                    </div>  
                    <div className="mt-5 mb-4">
                        <p className="mb-0 h3 text-center">Jika aku mendapatkan bunga setiap kali aku memikirkanmu, aku bisa selamanya berjalan di hamparan taman bunga</p>
                    </div>
                    <div className="row">
                        { galleryImages.map((image, index) => 
                            (
                                <div key={index} className="gallery-photos col-6 mb-3 p-1 position-relative shadow-sm">
                                    <img className="w-100" src={ image.img } alt='prewedding' onClick={ showImage } />
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
