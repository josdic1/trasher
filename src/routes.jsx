import App from "./App"
import Error from "./pages/Error"
import Edit from "./forms/Edit"
import New from "./forms/New"
import PickupList from "./pages/PickupList"
import Home from "./pages/Home"
import HouseList from "./pages/HouseList"


const routes = [
    {path: "/", element: <App />, errorElement: <Error />,
        children: [
            { 
                index: true, element: <Home />, errorElement: <Error />
            },
            { 
                path: "/houses", element: <HouseList />, errorElement: <Error/>
            },
             { 
                path: "/pickups", element: <PickupList />, errorElement: <Error/>
            },
                 { 
                path: "/new", element: <New />, errorElement: <Error/>
            },
            { 
                path: "/edit/:id", element: <Edit />, errorElement: <Error/>
            },
        ]
    }
]

export default routes