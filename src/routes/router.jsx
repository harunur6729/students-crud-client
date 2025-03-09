import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import AddStudentForm from "../components/AddStudentForm";
import AllStudents from "../components/AllStudents";

const router = createBrowserRouter ([
    {
        path:"/",
        element:<HomeLayouts></HomeLayouts>,
        children:[
           {
            path:"/studentForm",
            element:<AddStudentForm></AddStudentForm>
           },
           {
            path:"/allStudents",
            element:<AllStudents></AllStudents>,
            loader:()=> fetch("http://localhost:5000/students")
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