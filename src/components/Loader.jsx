import "./loader.css"

const Loader = () => {
  return (
    <section className='min-h-screen w-full flex flex-col gap-8 justify-center items-center'>
        <h2 className="text-emerald-900 dark:text-emerald-400">Exploring...</h2>
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