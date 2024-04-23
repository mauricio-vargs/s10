import { createBrowserRouter } from "react-router-dom";
import Lista from "../pages/lista/Lista";
import Home from "../pages/home/Home";
import Cadastro from "../pages/cadastro/Cadastro";
import App from "../App";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children : [    
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/register",
                element : <Cadastro></Cadastro>
            },
            {
                path : "/Trails",
                element: <Lista></Lista>
            }
        ]
    }
    ])
    
export default routes
