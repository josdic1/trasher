import App from "./App"
import Error from "./pages/Error"
import Home from "./pages/Home"

const routes = [
    {path: "/", element: <App />, errorElement: <Error />,
        children: [
            { index: true, element: <Home />, errorElement: <Error />}
        ]
    }
]

export default routes