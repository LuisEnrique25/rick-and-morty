import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'
import { paginationLogic } from '../util/pagination'

const ResidentsList = ({residents, location}) => {
    const FIRST_PAGE = 1
    const [currentPage, setCurrentPage] = useState(FIRST_PAGE)

const {pages, residentsInPage} = paginationLogic(currentPage, residents)

    useEffect(() => {
        setCurrentPage(FIRST_PAGE)
    }, [location] )



  return (
    <section className='px-3'>
        
        {/**Lista de Residentes */}
        <section className='grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto py-6'>
            {
                residentsInPage?.map(resident => <ResidentCard residentURL={resident} key={resident}/>
                )
            }
        </section>



        {/**BOTONES DE PAGINADO */}
        <section className='flex justify-center gap-4 flex-wrap pb-8'>
            
            {
                pages.map(page => (
                    <button key={page} onClick={()=> setCurrentPage(page)} className={`p-2 px-3 rounded-md ${currentPage === page ? "bg-red-500" : "bg-green-500"}`}>{page}</button>
                ))
            }

        </section>

        
    </section>
  )
}

export default ResidentsList