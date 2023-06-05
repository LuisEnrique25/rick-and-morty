import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'
import { paginationLogic } from '../util/pagination'
import { paginationList } from '../util/paginationList'

const ResidentsList = ({residents, location}) => {
    const FIRST_PAGE_PART = 1
    const [currentPage, setCurrentPage] = useState(FIRST_PAGE_PART)
    const {pages, residentsInPage} = paginationLogic(currentPage, residents)

    //PARA MOSTRAR BOTONES DE LA LISTA DE PAGINAS
    const [currentPart, setCurrentPart] = useState(FIRST_PAGE_PART)
    const {parts, pagesInPart} =paginationList({currentPart, pages})

    //PARA CAMBIAR LOS BOTONES MOSTRADOS
    const handlePageMinus = () => {
        if(currentPart !== 1) setCurrentPart(currentPart-1)
    }
    const handlePagePlus = () => {
        if(currentPart < parts.length) setCurrentPart(currentPart+1)
    }





    useEffect(() => {
        setCurrentPage(FIRST_PAGE_PART)
        setCurrentPart(FIRST_PAGE_PART)
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
        <section className='flex justify-center gap-4 flex-wrap items-center pb-8'>
            <button onClick={handlePageMinus} className={`p-2 sm:px-3  rounded-md bg-green-400  text-black font-bold hover:bg-green-800 hover:text-white`}>{"<"}</button>


            <div className='flex justify-center items-center gap-3'>
            {
               pagesInPart.map(page => (
                    <button key={page} onClick={()=> setCurrentPage(page)} className={`p-2 px-3 rounded-md ${currentPage === page ? "bg-red-500 animate-wiggle" : "bg-green-500"} hover:animate-wiggle`}>{page}</button>
                )) 
               }
            </div>


            <button onClick={handlePagePlus} className={`p-2 sm:px-3 rounded-md bg-green-400  text-black font-bold hover:bg-green-800 hover:text-white`}>{">"}</button>

        </section>

        
    </section>
  )
}

export default ResidentsList