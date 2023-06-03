import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({residentURL}) => {
    const [residentInfo, setResidentInfo] = useState(null)
    const statusStyles = {
        "Alive": "bg-green-500",
        "Dead": "bg-red-500", 
        "unknown" : "bg-gray-700"
    }






    useEffect(() => {
      
    axios.get(residentURL)
    .then(({data}) => setResidentInfo(data))
    .catch((err) => console.log(err))
    }, [])
    
  return (
    <article>
        <div className='relative'>
            <img src={residentInfo?.image} alt="" className=''/>
            <div className='flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-[50%]'>
                <div className={`h-3 aspect-square ${statusStyles[residentInfo?.status]} rounded-full`}>{residentInfo?.status}</div>
            </div>
        </div>
        <section>
            <h4 className='text-blue-700'>{residentInfo?.name}</h4>
            <ul>
                <li>Specie: <span className='text-green-700'>{residentInfo?.species}</span> </li>
                <li>Origin: <span className='text-red-700'>{residentInfo?.origin.name}</span> </li>
                <li>Times appear: <span className='text-yellow-700'>{residentInfo?.episode.length}</span> </li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard