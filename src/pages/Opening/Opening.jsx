import style from "./style.module.css";
import { useEffect, useState } from "react";
import img1 from '../../assets/vertical1.webp';
import img2 from '../../assets/vertical2.webp';
import img3 from '../../assets/vertical3.webp';
import img4 from '../../assets/vertical4.webp';
import CountDown from "../../components/CountDown";
import AddToCalendar from "../../components/AddToCalendar";
import fonts from '../../assets/fonts/fonts.module.css';

const Opening = () => {
  const bgImg = [img1, img2, img3, img4];
  const [counts, setCounts] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    setInterval(() => {
      setCounts((prevCount) => (prevCount + 1) % bgImg.length);
    }, 6000);
    
  }, []);

  useEffect(() => {
    const cacthScreen = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', cacthScreen)
  return () => {
    window.removeEventListener(cacthScreen)
  }
}, [])

  const backgroundImageStyle = {
    backgroundImage: `url(${bgImg[counts]})`,
    // backgroundImage: `url(${img1})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflowX: 'hidden'
  };

  return ( 
    <section id="opening" className={` vh-100 ${style.bgCover} }  position-relative d-flex align-items-end`} style={ backgroundImageStyle }>
      <div className="container opening py-4" style={{zIndex: 10}}>
        <div className="my-3 text-center  text-white" style={{overflowX:'hidden'}}>
          <p className="mb-2 fs-5">The Wedding Of</p>
          <p className={ ` ${fonts.pinyonScript} mb-3 fw-bold` } style={{fontSize: '2rem'}}>Yusni & Anggara</p>
          <CountDown />
        </div>
        
        <div className="d-flex w-100 justify-content-center align-items-center">
          <AddToCalendar />
        </div>
      </div>
      
    </section>
  );
};

export default Opening;
