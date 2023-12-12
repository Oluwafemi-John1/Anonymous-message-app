import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Addchat from './components/Addchat'

function App() {
    
    return (
        <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/addchat' element={<Addchat/>} />
        </Routes>
        </>
    )
}

export default App
