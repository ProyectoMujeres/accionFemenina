import { Routes, Route } from "react-router-dom";
import NewComment from "../component/NewComment/NewComment";
import Comment from "../page/Comments/Comment";
import FAQs from "../page/FAQs/FAQs";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import MyComments from "../page/UserPages/MyComments/MyComments";
import Profile from "../page/UserPages/Profile/Profile";
import Register from "../page/Register/Register";
import { ProtectedRoute } from "../utils/ProtectedRoutes";

export default function Router() {
    return(
        <>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/iniciar-sesion' element={<Login />}/>
                <Route exact path='/registro' element={<Register />}/>
                <Route element={<ProtectedRoute />}>
                    <Route exact path='/mi-perfil' element={<Profile />}/>
                    <Route exact path='/mis-publicaciones' element={<MyComments/>}/> 
                    <Route exact path='/crear-publicacion' element={<NewComment/>}/>   
                </Route> 
                <Route exact path='/publicaciones' element={<Comment />}/>
                <Route exact path='/preguntas-frecuentes' element={<FAQs />}/>
                 
            </Routes>
        </>
  )
}