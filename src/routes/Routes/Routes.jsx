import { createBrowserRouter } from "react-router-dom";
import AddTask from "../../components/AddTask/AddTask";
import CompletedTask from "../../components/CompletedTask/CompletedTask";
import Login from "../../components/Login/Login";
import MyTask from "../../components/MyTask/MyTask";
import NotFound from "../../components/NotFound/NotFound";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute><MyTask></MyTask></PrivateRoute>
            },
            {
                path: '/completed',
                element: <PrivateRoute><CompletedTask></CompletedTask></PrivateRoute>
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
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])