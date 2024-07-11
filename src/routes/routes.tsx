import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routGenarator } from "../utils/routsGenarator";
import { adminPaths } from "./admin.routs";
import { facultyPaths } from "./Faculty.routse";
import { studentPaths } from "./Student.routes";
// import { adminRoutes } from "./admin.routs";


const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
    },
    {
        path:'/admin',
        element:<App />,
        children: routGenarator(adminPaths)
    },
    {
        path:'/faculty',
        element:<App />,
        children: routGenarator(facultyPaths)
    },
    {
        path:'/student',
        element:<App />,
        children: routGenarator(studentPaths)
    },
    {
        path:'login',
        element:<Login/>
    }, 
    {
        path:'register',
        element:<Register/>
    },
    
])
export default router