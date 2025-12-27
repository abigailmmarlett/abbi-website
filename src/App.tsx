import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Abbi Website
        </h1>
        <p className="text-gray-600 mb-6">
          Vite + React + TypeScript + Tailwind CSS
        </p>
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md"
          >
            Count is {count}
          </button>
          <p className="text-sm text-gray-500">
            Click the button to test interactivity
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
