import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Error from "./Pages/Error/Error";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Posts from "./Pages/Posts/Posts";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile";
import Profile from "./Pages/Profile/Profile";
import AddPost from "./Pages/AddPost/AddPost";
import UpdatePost from "./Pages/UpdatePost/UpdatePost";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Posts />,
                errorElement: <Error />
            },
            {
                path: "/login",
                element: <Login />,
                errorElement: <Error />
            },
            {
                path: "/signup",
                element: <Signup />,
                errorElement: <Error />
            },
            {
                path: "/profile",
                element: <Profile />,
                errorElement: <Error />
            },
            {
                path: "/:id/profile/update",
                element: <UpdateProfile />,
                errorElement: <Error />
            }
            ,
            {
                path: "/:id/update",
                element: <UpdatePost />,
                errorElement: <Error />
            }
            ,
            {
                path: "/addpost",
                element: <AddPost />,
                errorElement: <Error />
            }
        ]
    }
])
export default routes