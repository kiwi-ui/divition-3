import mandiri from '../../assets/mandiri.png'
import { FaCopy } from "react-icons/fa";
import fonts from '../../assets/fonts/fonts.module.css';

const Gift = () => {
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
                alert('ID copied to clipboard!');
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
                    <div key={ data.id } className="card my-4 text-center shadow-sm rounded-4">
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
                                        className="d-flex flex-row gap-1 justify-content-center btn btn-outline-info border border-1 w-50 m-0"
                                        onClick={ () => copyButton(data.NomorRekening)  }
                                    >
                                        <a href="#" className="m-0 text-black" onClick={(e) => e.preventDefault()}><FaCopy /></a>
                                        <p className="m-0 text-black">Salin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gift;
