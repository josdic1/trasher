import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import HouseProvider from './providers/HouseProvider'
import PickupProvider from './providers/PickupProvider'
import './App.css'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <HouseProvider>
        <PickupProvider>
          <Outlet />
        </PickupProvider>
        </HouseProvider>
      </main>
    </>
  )
}

export default App
