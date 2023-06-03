import axios from "axios"
import { getRandomDimension } from "./util/getRandom"
import { useEffect, useState } from "react"
import Location from "./components/Location"
import ResidentsList from "./components/ResidentsList"
import DarkMode from "./components/DarkMode"

function App() {
  const [location, setLocation] = useState(null)
  console.log(location)
  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
    axios.get(URL)
      .then(({data}) => setLocation(data))
      .catch((err) => console.log(err))
    }, [])
  

  return (
    <main className="bg-black min-h-screen text-white">
      <Location location={location} setLocation={setLocation}/>
      <ResidentsList residents={location?.residents} location={location}/>
      <DarkMode/>
    </main>
  )
}

export default App
