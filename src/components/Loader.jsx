import "./loader.css"

const Loader = () => {
  return (
    <section className='w-full flex flex-col gap-8 justify-center items-center'>
        <h2 className="text-emerald-900 dark:text-emerald-200 font-medium text-lg">Exploring...</h2>
        <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </section>
  )
}

export default Loader