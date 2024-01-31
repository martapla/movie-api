import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ApiUrl = "https://swapi.dev/api/starships/"

const StarshipsComponent = () => {

    const [starships, setStarships] = useState([]);
    const [page, setPage] = useState(1);


    const fetchStarships = async () => {

        const response = await fetch(`${ApiUrl}?page=${page}`);
        const data = await response.json();
        // setStarships(data.results)

        const mapResults = data.results.map(
            result => {
                const urlSplitted = result.url.split('/')
                result.id = urlSplitted.at(-2) //asignamos valor de propiedad 'id'.
                return result
            }
        );

        setStarships(mapResults)
    };


    const changeNumberPage = (action) => {
        action === "increase" ? setPage(page + 1) : setPage(page - 1);
    };

    useEffect(() => {
        fetchStarships();
    }, [page]);
    
    

    return (
    <>
       <header className="font-bold text-xl mb-6 uppercase text-center">Starships</header>
            
       {starships.map((ship, index) => (
               
            <div className="w-90 mx-auto mb-4" key={index}>

                <Link  to={`/starships/${ship.id}`}>
                   <div className='p-2 border border-2 border-white rounded-md bg-gray-200 cursor-pointer'>
                       <h1 className='font-bold text-sm md:text-md uppercase'>{ship.name}</h1>
                       <h3 className=' text-sm md:text-md'>{ship.model}</h3>
                    </div>
                </Link>
                    
            </div>
       ))}
               <div className="flex justify-around  content-center">
        <button
          className="w-28 rounded-lg border-2 text-zinc-400 border-zinc-400 hover:text-white p-3 m-5 "
          onClick={() => changeNumberPage("decrease")}
        >
          go back
        </button>
                
        <button
          className="w-28 rounded-lg border-2 text-zinc-400 border-zinc-400 hover:text-white p-3 m-5 border-1"
          onClick={() => changeNumberPage("increase")}
        >
          view more
        </button>
      </div>
        
    </>
  )
}

export default StarshipsComponent