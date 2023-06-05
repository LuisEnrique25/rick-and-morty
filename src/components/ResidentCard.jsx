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
        "Alive": "border-green-500",
        "Dead": "border-red-500", 
        "unknown" : "border-gray-600"
    }

    useEffect(() => {
    axios.get(residentURL)
    .then(({data}) => setResidentInfo(data))
    .catch((err) => console.log(err))
    }, [])
    
  return (
    <article className='flex flex-col justify-center items-center'>
        
        {/** IMAGEN */}
        <div className={`relative border-4 ${borderStatus[residentInfo?.status]}  h-fit w-fit    rounded-[50%] overflow-hidden z-50`}>
            <img src={residentInfo?.image} alt={residentInfo?.name} className='h-[200px] sm:h-[250px]'/>

            <div className={`flex items-center gap-2 absolute bottom-4 left-1/2 -translate-x-[50%] capitalize p-1 text-black bg-white/30 backdrop-blur-sm rounded `} >
                <div className={`h-3 aspect-square ${statusStyles[residentInfo?.status]} rounded-full`}></div>{residentInfo?.status}
            </div>

        </div>


        {/** INFO */}
        <section  className={`border-4 ${borderStatus[residentInfo?.status]} rounded-2xl bg-purple-950 dark:bg-purple-500 overflow-hidden min-w-[250px] text-black dark:text-white  -translate-y-10  `}>
            
            
                <div className='bg-purple-500 dark:bg-purple-950'>
                    <h4 className='text-xl font-semibold bg-orange-300 dark:bg-slate-900 text-center p-2 pt-8 rounded-b-lg border-none'>{residentInfo?.name}</h4>
                </div>

                <ul className='p-2 bg-purple-500 dark:bg-purple-950 rounded-br-[4rem] font-semibold'>
                    <li className='p-3 flex justify-between'>Specie: <span className='text-emerald-900 dark:text-emerald-500'>{residentInfo?.species}</span> </li>
                    <li className='p-3 flex justify-between' >Origin: <span className='text-emerald-900 dark:text-emerald-500'>{residentInfo?.origin.name}</span> </li>
                    <li className='p-3 flex justify-between'>Times appear: <span className='text-emerald-900 dark:text-emerald-500'>{residentInfo?.episode.length} </span> </li>
                </ul>
            
        </section>
    </article>
  )
}

export default ResidentCard