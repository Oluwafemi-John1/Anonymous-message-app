import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Addchat from './components/Addchat'
import Showchats from './components/Showchats'

function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/addchat' element={<Addchat/>} />
            <Route path='/sqiparty/messages' element={<Showchats/>} />
        </Routes>
        </>
    )
}

export default App
