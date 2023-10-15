import {PropsWithChildren} from "react";
import {BrowserRouter} from "react-router-dom";


function AppProvider({children}: PropsWithChildren) {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
}

export default AppProvider;