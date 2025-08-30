import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
          Tailwind is Working ✅
        </h1>
        <p className="mt-6 text-lg text-white/80">
          If you see gradient + styled text → setup is correct!
        </p>
      </div>
    </>
  )
}

export default App
