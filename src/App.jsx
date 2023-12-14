import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Addchat from './components/Addchat'
import Showchats from './components/Showchats'
import Allmessages from './components/Allmessages'

function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/addchat' element={<Addchat/>} />
            <Route path='/sqiparty/messages' element={<Showchats/>} />
            <Route path='/adminmsgsqi' element={<Allmessages/>} />
        </Routes>
        </>
    )
}

export default App
