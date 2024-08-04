import general from '../../App.module.css';
import fonts from '../../assets/fonts/fonts.module.css';

const Closing = () => {
  return (
    <footer className={`${general.bgSecondary} h-100 position-relative`} style={{ height: '75vh' }}>
        <div className="container  d-flex flex-column text-center gap-3 py-5 h-100 position-relative">
            <p className="fs-5 m-0 lead">Atas kehadiran dan do’a restu dari Bapak/Ibu/Saudara/i sekalian, kami mengucapkan Terima Kasih.</p>
            <p className="fs-3 m-0 fw-bold">Wassalamu’alaikum Wr. Wb.</p>
            <p className="m-0 fs-3 lead">Kami yang berbahagia <br/>
                <p className={` ${ fonts.pinyonScript } fw-bold mb-0`} style={{ fontSize: '2.5rem'}}>Yusni & Anggara</p> 
            </p>
            
            <div className="border-box mt-3">
                <p className="fw-bold m-0">Made with Love</p>

                <div className="d-flex flex-row border-box justify-content-center align-content-center gap-1" style={{height: "20px"}}>
                    <p className="fw-bold">Divition</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Closing