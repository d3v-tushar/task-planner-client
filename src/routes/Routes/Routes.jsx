import { createBrowserRouter } from "react-router-dom";
import AddTask from "../../components/AddTask/AddTask";
import CompletedTask from "../../components/CompletedTask/CompletedTask";
import MyTask from "../../components/MyTask/MyTask";
import Main from "../../layout/Main/Main";

const router = createBrowserRouter([
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
            }
        ]
    }
]);

export default router;