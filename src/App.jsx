import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import HouseProvider from './providers/HouseProvider'
import './App.css'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <HouseProvider>

          <Outlet />

        </HouseProvider>
      </main>
    </>
  )
}

export default App
