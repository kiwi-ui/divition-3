import { useEffect, useState } from 'react';
import style from './style.module.css';
import Slide from '../../assets/animation';

const CountDown = () => {
    const [event, setEvent] = useState({
        days: null,
        hours: null,
        minutes: null,
        seconds: null
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
            setEvent({ days, hours, minutes, seconds })

            if (timeDifference <= 0) {
                return (setIsEventOver((event) => !event));
            }
        }, 1000)
    }, [])

    return (
        <section id="date" className="border-0 position-relative" style={{  overflowX:'hidden' }}>
            <div className="row justify-content-center">
                {!isEventOver ?
                    <div className={`row text-white`}>
                        <div className="col-4">
                            <Slide delay={1}>
                                <div className={` border border-1 ${style.bgCountdown} text-center d-flex align-items-center flex-column rounded-2 shadow`}>
                                    <p className="fw-bold fs-4 pt-1 mb-0">{event.days}</p>
                                    <p className="m-0 pb-1 ">Hari</p>
                                </div>
                            </Slide>
                        </div>
                        <div className="col-4">
                            <Slide delay={1}>
                                <div className={` border border-1 ${style.bgCountdown} text-center d-flex align-items-center flex-column rounded-2 shadow`}>
                                    <p className="fw-bold fs-4 pt-1 mb-0">{event.hours}</p>
                                    <p className="m-0 pb-1 ">Jam</p>
                                </div>
                            </Slide>
                        </div>
                        <div className="col-4">
                            <Slide delay={1}>
                                <div className={` border border-1 ${style.bgCountdown} text-center d-flex align-items-center flex-column rounded-2 shadow`}>
                                    <p className="fw-bold fs-4 pt-1 mb-0">{event.minutes}</p>
                                    <p className="m-0 pb-1 ">Menit</p>
                                </div>
                            </Slide>
                        </div>
                        {/* <div className="col-1">
                            <Slide delay={1}>
                                <div className={` border border-1 ${style.bgCountdown} text-center d-flex align-items-center flex-column rounded-2 shadow`}>
                                    <p className="fw-bold fs-4 pt-1 mb-0">{event.days}</p>
                                    <p className="m-0 pb-1 ">Hari</p>
                                </div>
                            </Slide>
                        </div> */}
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
