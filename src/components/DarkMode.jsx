import { useEffect } from "react"
import { useState } from "react"


const DarkMode = () => {

    const [isDark, setIsDark] = useState(localStorage.getItem("theme"))

    const handleIsDark = () => {
        if(isDark === "dark"){
          setIsDark("light")
          localStorage.setItem("theme", "light")
        }else{
          setIsDark("dark")
          localStorage.setItem("theme", "dark")
        }
        console.log(isDark + " - " + localStorage.theme)
    }
    const handleResetLS = () => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDark('dark')
      } else {
        setIsDark('light')
      }
      localStorage.removeItem("theme");
    }
  
    useEffect(() => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }, [isDark])


  return (
    <div>
        <button onClick={handleIsDark} className="bg-green-400 dark:bg-green-950 p-3 rounded-md">{(isDark === "light") ? "Light" : "Dark"}</button>
          <button onClick={handleResetLS} className="bg-green-400 dark:bg-green-950 p-3 rounded-md">RESET LS</button>
    </div>
  )
}

export default DarkMode












