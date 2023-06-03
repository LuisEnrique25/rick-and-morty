import React from 'react'

const TopHeader = () => {
  return (
    <div>
        <div className='transition-all duration-150 ease-linear relative max-w-[200px] sm:max-w-[250px] m-auto flex flex-col justify-center items-center'>
            <img src="/images/portal.webp" alt=""  className='absolute  animate-spin-slow '/>
            <img src="/images/name.webp" alt="Rick & Morty" className='absolute translate-y-11 w-[150px] sm:w-[210px]'/>

        </div>
    </div>
  )
}

export default TopHeader