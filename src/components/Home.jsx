import { Link } from "react-router-dom"

const Home = () => {
    return (
    <>
        <div className="text-center mt-40">
           <h1 className="font-bold text-white text-5xl mb-6">Welcome to the Star Wars App</h1>
           <p className="text-2xl text-gray-600">Have a look on the starships list and pilots</p>
        </div>
            
        <div className="w-60 mx-auto mt-60 border border-2 border-gray-500 rounded-lg p-4">
            <Link to= {'/starships'}>
               <button className=" flex mx-auto text-center">
                 Enter
                </button>
            </Link>
        </div>
            
    </>
  )
}

export default Home