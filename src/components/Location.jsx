import React from 'react'
import axios from 'axios';

const Location = ({location, setLocation}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value
    
      const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
      axios.get(URL)
        .then(({data}) => setLocation(data))
        .catch((err) => console.log(err))
    
  }



  return (
    <section className='mt-[100px] sm:mt-[115px] text-black dark:text-white p-4 flex flex-col justify-center items-center'>

      <form onSubmit={handleSubmit} className='w-fit p-3'>
        <input id="newLocation" placeholder='Type a location Id...' type="text" className='bg-white/40 text-green-900 dark:bg-gray-800/30 dark:focus:bg-gray-700 focus:bg-white dark:text-green-300 outline-0 p-2 rounded-l-md' />
        <button className='bg-white/40 hover:bg-white p-2 rounded-r-md'><i className='bx bx-search'></i></button>
      </form>

      <section className='flex flex-col justify-center items-center gap-4 bg-slate-50/50 dark:bg-slate-700/30 rounded-lg py-3 px-2 max-w-md'>
          <h2 className='text-xl font-medium'>{location?.name}</h2>
          <ul className='flex  justify-between items-center'>
              <li className=' text-center capitalize p-2 sm:px-4' ><p>Type</p><p className='text-center mt-3'>{location?.type} </p></li>
              <li className=' text-center capitalize p-2 border-x-2 sm:px-4 border-gray-700 dark:border-gray-800'><p className='text-center'>Dimension</p><p className='text-center mt-3'>{location?.dimension}</p></li>
              <li className='p-2 sm:px-4'><p>Population</p> <p className='text-center mt-3'>{location?.residents.length}</p> </li>
          </ul>
      </section>
    </section>
  )
}

export default Location