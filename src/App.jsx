import Dashboard from './components/Dashboard'
import { ThemeProvider } from "./components/theme-provider"
import { SocketProvider  } from "./context/SocketContext";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      {/* <SocketProvider> */}
        <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dasboard/gesture" element={<Gesture />} />
        </Routes>
      </div>
      {/* </SocketProvider> */}
    </ThemeProvider>
  )
}

export default App;