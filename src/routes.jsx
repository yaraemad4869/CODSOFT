import Todos from "./pages/Todos/Todos";
import ShowTodo from './pages/ShowTodo/ShowTodo';
import UpdateTodo from './pages/UpdateTodo/UpdateTodo';
import Error from "./pages/Error/Error";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Header from "./pages/Header/Header";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        // errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Header />,
                errorElement: <Error />

            },
            {
                path: "/todos",
                element: <Todos />,
                errorElement: <Error />,

            }, {
                path: "/todos/:id",
                element: <ShowTodo />,
                // errorElement: <Error />,

            },
            {
                path: "/todos/:id/edit",
                element: <UpdateTodo />,
                // errorElement: <Error />
            }
            ,
            {
                path: "*",
                element: <Error />
            }
        ]
    }
]
)
export default routes