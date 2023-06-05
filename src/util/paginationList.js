export const paginationList = ({pages, currentPart}) => {
    if(!pages){
        return{
            parts: [1],
            PAGES_PER_PARTS: []
        }
    }
    
    
    //CANTIDAD DE RESIDENTES POR PAGINA
    const PAGES_PER_PARTS = 4;

    //CANTIDAD TOTAL DE PAGINAS
    const totalparts =  Math.ceil(pages.length / PAGES_PER_PARTS)


    //RESIDENTES A MOSTRAR
    const sliceStart = (currentPart - 1) * PAGES_PER_PARTS
    const sliceEnd =   sliceStart + PAGES_PER_PARTS
    const pagesInPart = pages.slice(sliceStart, sliceEnd)

    //Generacion  del arreglo de las paginas a mostrar
    let parts = [];
    for (let i = 1; i <= totalparts; i++) {
        parts.push(i) 
    }
   
    return {
        parts,
        pagesInPart
    }
}