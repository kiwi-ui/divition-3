import groom from '../../assets/groom.jpg';
import bride from '../../assets/bride.jpg';
import { BsInstagram } from 'react-icons/bs';
import style from './style.module.css';
import flower from '../../assets/flower.png';

const Couple = () => {
    return (
        <div className={`${style.bgColorPrimary} text-center py-5`} id="main">
            <div className="container">
                <div className="text-black">
                    <p className="fw-semibold fs-1 mb-2">Y&A</p>
                    <p className="fs-3">Ar-Rum 21</p>
                    <p className="lead mx-5">Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir</p>
                </div>

                <div className="text-black d-flex flex-lg-row flex-column justify-content-around my-4 gap-4 mx-2">
                    <div className={`bride d-flex flex-column align-items-center ${style.bgTransparent1} shadow-lg `}>
                        <div className="rounded-circle w-75 position-relative" style={{zIndex: 2}}>
                            <img src={ bride } className={`shadow `} alt="bride"/>
                            <div className={`rounded-circle shadow p-2 position-relative bg-transparent position-absolute h-100 w-100 `} style={{left: '0.5rem', top:'0.5rem'}} width="100%" alt="bride"></div>
                        </div>
                        {/* <div className={`${style.details} shadow position-relative rounded-3 py-3 px-2 ${style.z10}`}>
                            <img className="position-absolute h-50 translate-middle-x opacity-50" src={flower} alt="flower"/>
                            <p className={`fs-1 fw-bold mb-0 ${style.pengantin}`}>Yusni</p>
                            <p className="fs-5 ">Putri dari Bapak Achmad dan Ibu Rum</p>
                            <button className="border-0 rounded-circle bg-transparent">
                                <a href="https://www.instagram.com/yusnianggara/" target='_blank' rel="noreferrer">
                                    <BsInstagram className='text-black fs-4'/>
                                </a>
                            </button>
                        </div> */}
                    </div>
                    
                    <div className={`groom d-flex flex-column align-items-center ${style.bgTransparent1} py-4 rounded-4 shadow-lg `}>
                        <div className="rounded-circle w-75 position-relative" style={{zIndex: 2}}>
                            <img src={ groom } className={`rounded-circle shadow`} width="100%" alt="groom" />
                            <div className={`rounded-circle shadow p-2 position-relative bg-transparent position-absolute h-100 w-100 border border-white border-2`} style={{left: '0.5rem', top:'0.5rem'}} width="100%" alt="bride"></div>
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
