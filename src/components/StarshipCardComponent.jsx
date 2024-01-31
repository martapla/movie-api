/* eslint-disable react/prop-types */
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'

const StarshipCardComponent = () => {
    const params = useParams()
    const [info, setInfo] = useState({})
    const id = params.shipId
   
    async function shipInfo() {
        const request = await fetch(`https://swapi.dev/api/starships/${id}`)
        const data = await request.json()
        console.log(data)
        setInfo(data)
    }

    useEffect(() => {
        shipInfo()
    },[])

    return (
      <>
        <div>StarshipCardComponent</div>
     
            <div className='p-2 border border-2 border-white rounded-md bg-gray-200 cursor-pointer'>

                <h1 className='font-bold text-sm md:text-md uppercase'>{info.name}</h1>
                <h3 className=' text-sm md:text-md'>{info.model}</h3>

                <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="image"
                     onError={(e) => (e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")}
                />
                    
            </div>
     </>
  )
}

export default StarshipCardComponent