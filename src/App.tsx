import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center space-x-4 mb-8">
        <a href="https://vitejs.dev" target="_blank" className="transition-transform hover:scale-110">
          <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
        </a>
    <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
      <img src={reactLogo} className="w-16 h-16 animate-spin-slow" alt="React logo" />
    </a>
  </div>
  <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Vite + React</h1>
  <div className="card bg-white shadow-lg rounded-lg p-6 mb-8">
    <button 
      onClick={() => setCount((count) => count + 1)}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-4"
    >
      count is {count}
    </button>
    <p className="text-gray-600 bg-slate-50">
      Edit <code className="bg-gray-100 rounded px-1 py-0.5">src/App.tsx</code> and save to test HMR
    </p>
  </div>
  <p className="text-center text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">
    Click on the Vite and React logos to learn more
  </p>
</>
  )
}

export default App
