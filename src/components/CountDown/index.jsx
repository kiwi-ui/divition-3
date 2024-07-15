import { useEffect, useState } from 'react';
import style from './style.module.css';

const CountDown = () => {
    const [event, setEvent] = useState({
        days : null,
        hours: null,
        minutes:  null,
        seconds:  null
    })
    const [isEventOver, setIsEventOver] = useState(false)

    useEffect(() => {
        const targetDate = new Date('2029-05-01T00:00:00');

        setInterval(() => {
            const currentDate = new Date();
            const timeDifference = targetDate - currentDate;
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            setEvent({days, hours, minutes, seconds})

            if (timeDifference <= 0) {
                return (setIsEventOver((event) => !event));
            }
        }, 1000)

    }, [])
    
    return (
        <section id="date" className={ `border-0` }>
            <div>
                {!isEventOver ? 
                    <div className="row text-white justify-content-center border-box">
                        <div className={` ${ style.bgTransparent } col-2 text-center d-flex align-items-center flex-column rounded-2 shadow`}>
                            <p className="fs-5 pt-1 mx-3 px-2 mb-0">{ event.days }</p>
                            <p className= "m-0 pb-1 ">Hari</p>
                        </div>
                        <div className={` ${ style.bgTransparent } col-2 mx-2 text-center d-flex align-items-center flex-column rounded-2 shadow`} >
                            <p className="fs-5 pt-1 mx-3 px-2 mb-0 gx-3">{ event.hours }</p>
                            <p className= "m-0 pb-1 ">Jam</p>
                        </div>
                        <div className={` ${ style.bgTransparent } col-2 me-2 text-center d-flex align-items-center flex-column rounded-2 shadow`} >
                            <p className="fs-5 pt-1 mx-3 px-2 mb-0">{ event.minutes }</p>
                            <p className= "m-0 pb-1 ">Menit</p>
                        </div>
                        <div className={` ${ style.bgTransparent } col-2 text-center d-flex align-items-center flex-column rounded-2 shadow`} >
                            <p className="fs-5 pt-1 mx-3 px-2 mb-0">{ event.seconds }</p>
                            <p className= "m-0 pb-1 ">Detik</p>
                        </div>
                    </div>
                    :
                    <div>
                        <p>Acara Sudah Selesai</p>
                    </div>
                }

            </div>
        </section>
    )
}

export default CountDown
