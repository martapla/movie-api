import { Link } from "react-router-dom"

const Home = () => {
    return (
      <>
         <div className="relative h-100">
            <div className="star-container">
              {[...Array(50)].map((_, index) => (
              <div
              key={index}
              className="twinkling-star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `-${Math.random() * 8}s`, 
              }}
                ></div>
                
              ))}
            </div>

          <div className="flex justify-center">
              <img src="./src/assets/nose.jpeg" className="w-80 mt-20" alt="logo" />
              
          </div>
      </div>      
      <div className="w-1/2 md:w-60 mx-auto mt-40 flex justify-center border border-1 border-gray-200 hover:border-yellow-300 shadow-md shadow-gray-300 hover:shadow-yellow-300 rounded-lg py-4 pointer-cursor">
          <Link to= {'/starships'}>
              <button className="flex items-center justify-center text-white hover:text-yellow-300 pointer-cursor">
              Visit the Univers
              </button>
          </Link>
      </div>
      
    </>
  )
}

export default Home