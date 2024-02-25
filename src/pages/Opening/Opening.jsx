import style from "./style.module.css"
import opening from "../../assets/profile.jpg"

const Opening = () => {
  return (
    <section className={ `${style.bgImgMain} bg-dark-subtle` }>
        <div className="container h-100 py-4">
            <div className="image mx-4 d-flex justify-content-center pb-4">
                <img src={ opening } className="wrounded-pill img-fluid rounded-pill" style={{height: '65vh'}}/>
            </div>

            <div className="my-3 text-center mx-3">
                <h4 className="mb-3">Assalamualaikum Warahmatullahi Wa Barakatuh</h4>
                <p className="fs-5">Tanpa mengurangi rasa hormat <br/> kami bermaksud mengundang Bapak/Ibu/Saudara/i <br/> pada acara resepsi pernikahan anak kami</p>
            </div>
        </div>
    </section>
  )
}

export default Opening
