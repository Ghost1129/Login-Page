import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'
import Log from './pages/Log';

function App() {
    return (
        <div className="w-screen h-screen">
        <BrowserRouter>
        <Routes>
        <Route path="/log" element={<Log/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
        </BrowserRouter>

        </div>
    )
}

export default App
