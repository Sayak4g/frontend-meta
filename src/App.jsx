import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow pt-16 px-4">
        <div> <Dashboard /> </div>
        {/* Add more content here */}
      </main>

      <Footer />
    </div>
  )
}

export default App
