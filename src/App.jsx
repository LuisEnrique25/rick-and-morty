import axios from "axios"
import { getRandomDimension } from "./util/getRandom"
import { useEffect, useState } from "react"
import Location from "./components/Location"
import ResidentsList from "./components/ResidentsList"
import DarkMode from "./components/DarkMode"
import TopHeader from "./components/TopHeader"
import Loader from "./components/Loader"

function App() {
  const [location, setLocation] = useState(null)
  //console.log(location)
  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
    axios.get(URL)
      .then(({data}) => setLocation(data))
      .catch((err) => console.log(err))
    }, [])
  

  return (
    <main className='bg-[url("/images/bgD1.webp")] dark:bg-[url("/images/bgN1.webp")] bg-center bg-fixed bg-cover min-h-screen text-white transition-all duration-200 ease-in-out'>

      <TopHeader/>
      {/**

      <Location location={location} setLocation={setLocation}/>
      <ResidentsList residents={location?.residents} location={location}/>
    */}
    <Loader/>
      <DarkMode/>
    </main>
  )
}

export default App
