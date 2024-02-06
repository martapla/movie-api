/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

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
            <Link to= {'/starships'}>
              <button className="w-20 md:w-40 py-2 text-zinc-400 text-center text-xs md:text-sm  mb-6 md:mt-10 border border-2 border-zinc-400 rounded-md hover:text-yellow-500 hover:border-yellow-500 cursor-pointer">Go Back</button>
            </Link>
       
     
            <div className='flex flex-col md:flex-row p-4 md:p-8 border border-2 border-gray-300 rounded-md bg-gray-800 cursor-pointer'>
                <div>
                    <h1 className='text-sm md:text-xl uppercase text-center text-yellow-500 font-jedi-outline font-semibold p-4 md:pb-6'>{info.name}</h1>

                    <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="image"
                        className="w-50 h-auto rounded-md border border-4 border-gray-500"
                        onError={(e) => (e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")}
                    />
                </div>

                <div className='text-sm md:text-lg text-yellow-500 font-semibold font-jedi-outline mt-4 md:mt-16 md:pt-6 md:ml-6'>
                    <h4>- Model: <span className=" text-xs md:text-lg font-normal text-white pb-6'">{info.model}</span></h4>
                    <h4>- Cost in credits:<span className=" text-xs md:text-lg font-normal text-white pb-6'"> {info.cost_in_credits} </span></h4>
                    <h4>- Atmospheric speed:<span className=" text-xs md:text-lg font-normal text-white pb-6'"> {info.max_atmosphering_speed} </span></h4>
                    <h4>- Manufacturer: <span className=" text-xs md:text-lg font-normal text-white pb-6'"> {info.manufacturer}</span></h4>
                    <h4>- Lenght: <span className=" text-xs md:text-lg font-normal text-white pb-6'">{info.length} </span></h4>
                    <h4>- Crew:<span className=" text-xs md:text-lg font-normal text-white pb-6'"> {info.crew}</span></h4>
                </div>
               
            </div>
        
     </>
  )
}

export default StarshipCardComponent