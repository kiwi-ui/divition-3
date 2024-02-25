import { useContext } from "react"
import { MyContext } from "../../../App"

const Content2 = () => {
  const {stories,setStories} = useContext(MyContext)
  const closeStories = (e) => {
    e.preventDefault();
    setStories(prev => ({...prev, dua: false}))
    console.log(stories)
  }
  return (
    <div className="vh-100 w-100 bg-danger position-fixed overflow-y-hidden top-0 z20">
      <div className="container">
        <div>profile</div>
        <p className="bg-black text-white" onClick={closeStories}>X</p>
        <div className="bars">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>02</div>
      </div>
    </div>
  )
}

export default Content2
