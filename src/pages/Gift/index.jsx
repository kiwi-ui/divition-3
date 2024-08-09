import mandiri from '../../assets/mandiri.png'
import { FaCopy } from "react-icons/fa";
import fonts from '../../assets/fonts/fonts.module.css';
import Slide from '../../assets/animation';
import general from '../../App.module.css';
import style from './style.module.css'
import { useState } from 'react';

const Gift = () => {
    const [copy,setCopy] = useState();
    const dataRekening = [
        {
            id: 1,
            NomorRekening: '11345678',
            NamaPemilik: 'Angga'
        },
        {
            id: 2,
            NomorRekening: '109012309123',
            NamaPemilik: 'yusni'
        },
    ]

    const copyButton = (id) => {
        navigator.clipboard.writeText(id)
        .then(() => {
                setCopy(true)
                setTimeout(() => {
                   setCopy(false);
                }, 6000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    return (
        <section className="my-5">
            <div className="container text-center">
                <p className={`${ fonts.pinyonScript } fs-1`}>Wedding Gift</p>
                <p>Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui virtual account atau e-wallet di bawah ini</p>
            </div>

            <div className="container">
                {dataRekening.map((data) => (
                    <div key={ data.id } className="card my-4 text-center shadow rounded-4">
                        <Slide delay={data.id-0.5}>
                            <div className="card-body text-start my-2">
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="d-flex flex-column justify-content-end">
                                        <p className="mb-0">Nomor Rekening</p>
                                        <p className="mb-0">{ data.NomorRekening }</p>
                                        <p className="mb-0">{ data.NamaPemilik }</p>
                                    </div>

                                    <div className="d-flex gap-5 flex-column align-items-end">
                                        <img className="card-img-top" src={mandiri} alt='mandiri'/>
                                        <div
                                            className={ `${ general.bgSecondary } ${ style.button } d-flex flex-row gap-1 justify-content-center btn btn-outline-info border border-2 w-50 m-0 shadow` }
                                            role='button'
                                            onClick={ () => copyButton(data.NomorRekening)  }
                                        >
                                            <a href="#" className="m-0 text-black" onClick={(e) => e.preventDefault()}><FaCopy /></a>
                                            <p className="m-0 text-black">Salin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                ))}
            </div>
                {
                    copy && <p className='mb-0 bg-dark-subtle py-1 px-3 fw-bold rounded h2 position-fixed text-center start-50 translate-middle-x' style={{zIndex: 100, top:"90vh" }}>Copied</p>
                }
        </section>
    );
}

export default Gift;
