export const paginationLogic = (currentPage, residents) => {
    if(!residents){
        return{
            pages: [1],
            RESIDENTS_PER_PAGE: []
        }
    }
    
    
    //CANTIDAD DE RESIDENTES POR PAGINA
    const RESIDENTS_PER_PAGE = 9;

    //CANTIDAD TOTAL DE PAGINAS
    const totalPages =  Math.ceil(residents.length / RESIDENTS_PER_PAGE)


    //RESIDENTES A MOSTRAR
    const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
    const sliceEnd =   sliceStart + RESIDENTS_PER_PAGE
    const residentsInPage = residents.slice(sliceStart, sliceEnd)

    //Generacion  del arreglo de las paginas a mostrar
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i) 
    }
   
    return {
        pages,
        residentsInPage
    }
}