import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({residentURL}) => {
    const [residentInfo, setResidentInfo] = useState(null)

    const statusStyles = {
        "Alive": "bg-green-500",
        "Dead": "bg-red-500", 
        "unknown" : "bg-gray-600"
    }
    const borderStatus = {
        "Alive": "animate-neonalive",
        "Dead": "animate-neondead", 
        "unknown" : "animate-neonunknown"
    }

    useEffect(() => {
    axios.get(residentURL)
    .then(({data}) => setResidentInfo(data))
    .catch((err) => console.log(err))
    }, [])
    
  return (
    <article className='flex flex-col justify-center items-center'>
        
        {/** IMAGEN */}
        <div className={`relative  ${borderStatus[residentInfo?.status]}  h-fit w-fit    rounded-[50%] overflow-hidden z-50`}>
            <img src={residentInfo?.image} alt={residentInfo?.name} className='h-[200px] sm:h-[250px]'/>

            <div className={`flex items-center gap-2 absolute bottom-4 left-1/2 -translate-x-[50%] capitalize p-1 text-black bg-white/30 backdrop-blur-sm rounded `} >
                <div className={`h-3 aspect-square ${statusStyles[residentInfo?.status]} rounded-full`}></div>{residentInfo?.status}
            </div>

        </div>


        {/** INFO */}
        <section  className={` ${borderStatus[residentInfo?.status]} rounded-2xl bg-emerald-300/20 dark:bg-purple-900/50 backdrop-blur-sm overflow-hidden min-w-[250px] text-black dark:text-white  -translate-y-5 `}>
            
            
                <div className=''>
                    <h4 className={` text-xl font-semibold text-center p-2 pt-8 rounded-b-lg border-none backdrop-blur-sm ${statusStyles[residentInfo?.status]} bg-opacity-20 `}>{residentInfo?.name}</h4>
                </div>

                <ul className='p-2 font-semibold'>
                    <li className='p-3 flex justify-between'>Specie: <span className='text-emerald-900 dark:text-emerald-200'>{residentInfo?.species}</span> </li>
                    <li className='p-3 flex justify-between' >Origin: <span className='text-emerald-900 dark:text-emerald-200'>{residentInfo?.origin.name}</span> </li>
                    <li className='p-3 flex justify-between'>Times appear: <span className='text-emerald-900 dark:text-emerald-200'>{residentInfo?.episode.length} </span> </li>
                </ul>
            
        </section>
    </article>
  )
}

export default ResidentCard