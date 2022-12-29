import { createBrowserRouter } from "react-router-dom";
import AddTask from "../../components/AddTask/AddTask";
import CompletedTask from "../../components/CompletedTask/CompletedTask";
import Login from "../../components/Login/Login";
import MyTask from "../../components/MyTask/MyTask";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completed',
                element: <CompletedTask></CompletedTask>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])