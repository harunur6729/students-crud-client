import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import AddStudentForm from "../components/AddStudentForm";

const router = createBrowserRouter ([
    {
        path:"/",
        element:<HomeLayouts></HomeLayouts>,
        children:[
           {
            path:"/studentForm",
            element:<AddStudentForm></AddStudentForm>
           }

        ]
    },
    {
        path:"/students",
        element:<h1>student layouts</h1>
    },
    {
        path:"*",

        element:<h1>Error</h1>
    }

])

export default router;