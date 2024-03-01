import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Sidenav from './layout/Sidenav'
import Wallet from './pages/Wallet'
import Sidebar from './layout/Sidebar'
import Create from './pages/Create'
import Register from './pages/Register'
import { useName } from './hooks/useName'

function App() {
  const { name } = useName()

  return (
    <>
      <div className="App">
        <BrowserRouter>
       {name && <Sidenav />} 
        <div className="container">
          <Routes>
            <Route path="/register" 
            element={!name ? <Register /> : <Navigate to="/" />} />
            <Route exact path="/" 
            element={name ? <Dashboard /> : <Navigate to="/register" />}/>
            <Route path="/wallet" 
            element={name ? <Wallet /> : <Navigate to="/register" />} />
            <Route path="/create" 
            element={name ? <Create /> : <Navigate to="/register" />} />
          </Routes>
        </div>
        {name && <Sidebar />}
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
