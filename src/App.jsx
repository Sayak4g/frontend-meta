import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import Mainroutes from './Mainroutes'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
         {/* <Mainroutes/> */}
      <main className="flex-grow pt-16 px-4">
        <div> <Dashboard /> </div>
      </main>

      <Footer />
    </div>
  )
}

export default App;
