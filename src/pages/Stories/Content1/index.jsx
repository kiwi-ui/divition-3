import { useContext } from "react"
import { MyContext } from "../../../App"
import { Link } from "react-router-dom"

const Content1 = () => {
  const {stories,setStories} = useContext(MyContext)
  
  const closeStories = (e) => {
    e.preventDefault();
    
    setStories(prevState => ({...prevState, satu: false}))
    console.log(stories)
  }
  return (
    <div className="vh-100 w-100 bg-danger position-fixed overflow-y-hidden top-0 z20">
      <div className="container">
        <div>profile</div>
        <Link className="bg-black text-white" onClick={closeStories} preventScrollReset={true}>X</Link>
        <div className="bars">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>01</div>
      </div>
    </div>
  )
}

export default Content1
