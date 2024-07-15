import mandiri from '../../assets/mandiri.png'
import { FaCopy } from "react-icons/fa";

const Gift = () => {
    const dataRekening = [
        {
            NomorRekening: '11345678',
            NamaPemilik: 'Angganteng'
        },
        {
            NomorRekening: '109012309123',
            NamaPemilik: 'ariniww'
        },
    ]
  return (
    <section className="my-5">
        <div className="container text-center">
            <h1>Wedding Gift</h1>
            <p>Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui virtual account atau e-wallet di bawah ini</p>
        </div>

        <div className="container">
            { dataRekening.map((data) => (
                <div key={ data.id } className="card my-4 text-center shadow-sm rounded-4">
                    <div className="card-body text-start my-2">
                        <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column  justify-content-end">
                                <p className="mb-0">Nomor Rekening</p>
                                <p className="mb-0">{ data.NomorRekening }</p>
                                <p className="mb-0">{ data.NamaPemilik }</p>
                                <p className="mb-0"></p>
                            </div>

                            <div className="d-flex gap-5 flex-column align-items-end">
                                <img className="card-img-top" src={ mandiri } alt='mandiri'/>
                                <div className="d-flex flex-row gap-1 justify-content-center btn btn-info w-50 m-0">
                                    <a href="#" className="m-0 text-black"><FaCopy /></a>
                                    <p className="m-0">Salin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>
    </section>
  )
}

export default Gift
