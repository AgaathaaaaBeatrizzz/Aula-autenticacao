import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/Rotas/ProtectedRoute';
import Home from './pages/Home/Home';
import Pessoa from './pages/Pessoa/Pessoa';
import Login from './pages/Login/Login';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas principais */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                {/* Rotas protegidas */}
                <Route path="/" element={<Home />} />
                <Route path='/pessoas' element={<ProtectedRoute element={Pessoa} />} />
                <Route path="/login" element={<Login />} />
            </Routes> 
        </BrowserRouter>
    );
}

export default AppRouter;