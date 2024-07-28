import headlinePhotos1 from '../../assets/couple/g-1crop.jpg'
import headlinePhotos4 from '../../assets/couple/g-5crop.jpg'
import { GoClockFill } from "react-icons/go";
import style from './style.module.css'
import general from '../../App.module.css'

const MainEvent = () => {
  return (
    <section className="container my-4">
        <div className="d-flex flex-column flex-lg-row gap-5 gap-lg-0 justify-content-center mx-4">
            <div className={ `${ style.roundedTopStart } border border-3 ${style.borderPrimary} border-end-0` }>
                <div className="position-relative mt-1 ms-1">
                    <img src={ headlinePhotos1 } className={`${style.roundedTopStart} w-100`} style={{zIndex: -1 }}/>
                </div>

                <div className="d-flex flex-row ms-1 mb-1">
                    <div className={ `${general.bgPrimary}  fw-bold ${ style.rotate90 } fs-2 text-white text-center` } style={{ letterSpacing: '0.5rem' }}>
                        Ahad
                    </div>

                    <div className="ps-3 w-100 container">
                        <div className="d-flex flex-row align-items-center py-2 w-100">
                            <div className="fs-1 fw-bold w-25 text-center">02</div>
                            
                            <div className="text-center fs-5 w-75">
                                <p className="mb-0">Sabtu</p>
                                <p className="mb-0">Desember</p>
                                <p className="mb-0">2022</p>
                            </div>
                        </div>

                        <div className={`d-flex ${style.borderPrimary} flex-row align-items-center gap-4 pt-3 border border-3 border-black border-end-0 border-start-0 pb-3`}>
                            <GoClockFill className="fs-1"/>
                            <p className="mb-0 fs-4">08.00 - selesai</p>
                        </div>

                        <div className="my-4">
                            <h4 className="mb-3">LOKASI ACARA</h4>
                            <p>
                                Kediaman mempelai wanita
                                Kel. Maharatu, Kec. Marpoyan Damai, Kota Pekanbaru, Riau
                            </p>
                            <div className="d-grid gap-2 col-6 my-3 mx-auto">
                                <button className="btn btn-outline-secondary" type="button">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ `${ style.roundedTopEnd } border border-3 border-black border-start-0` }>
                <div className="position-relative mt-1 me-1">
                    <img src={ headlinePhotos4 } className={`${style.roundedTopEnd} w-100`} style={{zIndex: -1 }}/>
                </div>

                <div className="d-flex flex-row ms-1">
                    <div className={ `bg-dark text-white fw-bold ${ style.rotate90 } fs-2 text-center` }>
                        Ahad
                    </div>

                    <div className="ps-3 w-100 container">
                        <div className="d-flex flex-row align-items-center py-2 w-100">
                            <div className="fs-1 fw-bold w-25 text-center">02</div>
                            
                            <div className="text-center fs-5 w-75">
                                <p className="mb-0">Sabtu</p>
                                <p className="mb-0">Desember</p>
                                <p className="mb-0">2022</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center gap-4 pt-3 border-3 border border-black border-end-0 border-start-0 pb-3">
                            <GoClockFill className="fs-1"/>
                            <p className="mb-0 fs-4">08.00 - selesai</p>
                        </div>

                        <div className="my-4">
                            <h4 className="mb-3">LOKASI ACARA</h4>
                            <p>
                                Kediaman mempelai wanita
                                Kel. Maharatu, Kec. Marpoyan Damai, Kota Pekanbaru, Riau
                            </p>
                            <div className="d-grid gap-2 col-6 my-3 mx-auto">
                                <button className="btn btn-outline-secondary" type="button">Google Maps</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainEvent