import App from "./App"
import Error from "./pages/Error"
import ToDo from "./pages/ToDo"
import HouseEdit from "./forms/HouseEdit"
import HouseNew from "./forms/HouseNew"
import PickupEdit from "./forms/PickupEdit"
import PickupNew from "./forms/PickupNew"
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
                path: "/pickup-new", element: <PickupNew />, errorElement: <Error/>
            },
            { 
                path: "/pickup-edit/:id", element: <PickupEdit />, errorElement: <Error/>
            },
                         { 
                path: "/house-new", element: <HouseNew />, errorElement: <Error/>
            },
            { 
                path: "/house-edit/:id", element: <HouseEdit />, errorElement: <Error/>
            },
                  { 
                path: "/todo", element: <ToDo />, errorElement: <Error/>
            },
        ]
    }
]

export default routes