import {Route, Routes} from "react-router-dom";
import AuthRouter from "../features/routes/auth.router.tsx";

const Approuter = () => {
    return (
        <Routes>
            <Route path='auth/*' element={<AuthRouter/>}/>
        </Routes>
    );
};

export default Approuter;