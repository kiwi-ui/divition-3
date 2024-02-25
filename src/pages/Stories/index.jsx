import { useContext } from 'react';
import { MyContext } from '../../App';
import s1 from '../../assets/bride.jpg';

const Stories = () => {
    const {stories, setStories,seen, setSeen} = useContext(MyContext)
    const seeStory = (id, content) => {
        setStories((prevState) => ({
            ...prevState,
            [content]: true
        }))
        setSeen((prevState) => ({
            ...prevState,
            [id]: true
        }))
        setTimeout(() => {
            
          }, 3000)
    }
    return (
    <>
        <section className="w-100 bg-danger mb-4 py-3">
            <div className="container text-center">
                <p>Stories</p>
                <div className="w-100 py-4">
                    <div className="row py-4 bg-black justify-content-center">
                        <div className="d-flex flex-column align-items-center col-2">
                            <div className={`border ${!seen.satu ? 'border-info' : 'border-dark'} border-3 mb-2 rounded-circle p-1 w-75`} onClick={() => seeStory('satu','satu')}>
                                <img id='1' className="rounded-circle w-100 " src={s1} />
                            </div>
                            <p className="mb-0 text-white">2012</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col-2'>
                            <div  className={`border ${!seen.dua ? 'border-info' : 'border-dark'} border-3 mb-2 rounded-circle p-1 w-75`} onClick={() => seeStory('dua','dua')}>
                                <img id='2' className="rounded-circle w-100 " src={s1} />
                            </div>
                            <p className="mb-0 text-white">2012</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col-2'>
                            <div className={`border ${!seen.tiga ? 'border-info' : 'border-dark'} border-3 mb-2 rounded-circle p-1 w-75`} onClick={() => seeStory('tiga','tiga')}>
                                <img id='3' className="rounded-circle w-100 " src={s1} />
                            </div>
                            <p className="mb-0 text-white">2012</p>
                        </div>
                        <div className="d-flex flex-column align-items-center col-2">
                            <div className={`border ${!seen.empat ? 'border-info' : 'border-dark'} border-3 mb-2 rounded-circle p-1 w-75`} onClick={() => seeStory('empat','empat')}>
                                <img id='4' className="rounded-circle w-100 " src={s1} />
                            </div>
                            <p className="mb-0 text-white">2012</p>
                        </div>
                        <div className="d-flex flex-column align-items-center col-2">
                            <div className={`border ${!seen.lima ? 'border-info' : 'border-dark'} border-3 mb-2 rounded-circle p-1 w-75`} onClick={() => seeStory('lima','lima')}>
                                <img id='5' className="rounded-circle w-100 " src={s1} />
                            </div>
                            <p className="mb-0 text-white">2012</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Stories