import {Route, Routes} from "react-router-dom";
import Login from "../authentication/routes/Login.tsx";
import Register from "../authentication/routes/Register.tsx";


const AuthRouter = () => {
    return (
        <Routes>
            <Route path='' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
        </Routes>
    );
};

export default AuthRouter;