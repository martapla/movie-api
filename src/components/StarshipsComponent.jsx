import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ApiUrl = "https://swapi.dev/api/starships/"

const StarshipsComponent = () => {

    const [starships, setStarships] = useState([]);

    const fetchStarships = async () => {

        const response = await fetch(ApiUrl);
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
    }

    useEffect(() => {
        fetchStarships();
    }, []);
    
    

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
        
    </>
  )
}

export default StarshipsComponent