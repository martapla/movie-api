import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    < >
      <div className="flex justify-end pr-4">
          <ul className="flex pointer-cursor">
            <li className="mr-6">Log In</li>
            <li className="">Sign Up</li>
          </ul>
      </div>
     
      <div className="flex justify-center text-white text-4xl mt-6 mb-20">Star Wars</div>
          
      <div className="flex justify-center text-center uppercase">
        <ul className="flex mb-8 pointer-cursor">
          <li className="pr-4">
            <Link to = { "/"}>
              Home
            </Link>
          </li>

          <li>
            <Link to = { "/starships"}>
              Starships
            </Link>
          </li>

        </ul>
      </div>


    </>
  )
}

export default Navbar