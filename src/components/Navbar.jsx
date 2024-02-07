import { Link } from "react-router-dom"
import yellow from "/src/assets/logo-yellow.png"


const Navbar = () => {
  return (
    < >
      <div className="flex justify-end md:pr-4 text-white">
          <ul className="flex pointer-cursor font-Exo2 text-xs md:text-base">
          <li className="pr-3 border-r border-solid border-1-2 border-white hover:text-yellow-500">
            <Link to = { "/login"}>
              Log In
            </Link>
          </li>
          <li className="pl-3 hover:text-yellow-500">
            <Link to = { "/signup"}>
              Sign Up
            </Link>
          </li>
          </ul>
      </div>
     
      <div className="flex justify-center">
        <img src={yellow} className="w-60 mt-[-40px]" alt="logo"/>
      </div>
          
      <div className="flex justify-center text-center uppercase text-white mt-[-20px]">
        <ul className="flex mb-8 pointer-cursor">
          <li className="pr-4 border-r border-solid border-1-2 border-white hover:text-yellow-500">
            <Link to = { "/"}>
              Home
            </Link>
          </li>

          <li className="pl-4 hover:text-yellow-500
          ">
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