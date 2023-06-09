import React from 'react'
import axios from 'axios';

const Location = ({location, setLocation}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(null)
    const newLocation = e.target.newLocation.value
      if(isNaN(newLocation)) {
        const URL = `https://rickandmortyapi.com/api/location/?name=${newLocation}`
        axios.get(URL)
        .then(({data}) => setLocation(data.results[0]))
        .catch((err) => window.alert("That location is still unknown! Try another!"))
      } else {
        const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
        axios.get(URL)
        .then(({data}) => setLocation(data))
        .catch((err) =>window.alert("That location is still unknown! Try another!"))
      } 
      
    
  }

  return (
    <section className='mt-[100px] sm:mt-[115px] text-black dark:text-white p-4 flex flex-col justify-center items-center'>

      <form onSubmit={handleSubmit} className='w-fit p-3 flex'>
        <input id="newLocation" placeholder='Type Location Name/Id...' type="text" className='bg-white/40 text-green-900 dark:bg-gray-800/30 dark:focus:bg-gray-700 focus:bg-white dark:active:bg-gray-700 dark:text-green-300 outline-0 p-2 rounded-l-md' />
        <button className='bg-white/40 dark:bg-gray-800/30 dark:text-green-300 hover:bg-white p-2 rounded-r-md dark:hover:bg-gray-800 flex justify-center items-center'><i className='bx bx-search'></i></button>
      </form>

      <section className='flex flex-col justify-center items-center gap-4 bg-slate-50/50 dark:bg-slate-700/30 rounded-lg py-3 px-2 max-w-md backdrop-blur-[2px]'>
          <h2 className='text-xl font-medium'>{location?.name}</h2>
          <ul className='flex  justify-between items-center text-sm sm:text-base'>
              <li className=' text-center capitalize p-2 sm:px-4' ><p>Type</p><p className='text-center mt-3'>{location?.type} </p></li>
              <li className=' text-center capitalize p-2 border-x-2 sm:px-4 border-gray-700 dark:border-gray-800'><p className='text-center'>Dimension</p><p className='text-center mt-3'>{location?.dimension}</p></li>
              <li className='p-2 sm:px-4'><p>Population</p> <p className='text-center mt-3'>{location?.residents.length}</p> </li>
          </ul>
      </section>
    </section>
  )
}

export default Location