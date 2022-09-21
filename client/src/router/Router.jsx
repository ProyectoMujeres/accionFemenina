import { Routes, Route } from "react-router-dom";
import Comment from "../page/Comments/Comment";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Profile from "../page/Profile/Profile";
import Register from "../page/Register/Register";

export default function Router({ modalOpen, setModalOpen }) {
    return(
        <>
            <Routes>
                <Route exact path='/' element={<Home modalOpen={modalOpen} setModalOpen={setModalOpen}/>}/>
                <Route exact path='/iniciar-sesion' element={<Login />}/>
                <Route exact path='/registro' element={<Register />}/>
                <Route exact path='/mi-perfil' element={<Profile />}/>
                <Route exact path='/mi-perfil' element={<Comment />}/>
            </Routes>
        </>
  )
}