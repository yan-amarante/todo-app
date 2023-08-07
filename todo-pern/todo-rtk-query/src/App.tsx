import './App.css'
import { Outlet } from "react-router-dom"
import SideBar from "./components/SideBar/SideBar.tsx"

function App() {

  return (
    <div>
      <h1 className='titulo-app'>Todo App</h1>
      <div className='container-app'>
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default App
