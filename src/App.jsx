import './App.css'
import { useRoutes } from 'react-router-dom'
import Landing from "./pages/Landing"
import ReadCrew from "./pages/ReadCrew"
import EditCrew from "./pages/EditCrew"
import CreateCrew from "./pages/CreateCrew"
import NavBar from "./components/NavBar"
function App() {

    let element = useRoutes([
        {
            path: "/",
            element: <Landing />
        },
        {
            path: "/new",
            element: <CreateCrew />
        },
        {
            path: "/gallery",
            element: <ReadCrew />
        },
        {
            path: "/gallery/edit/:id",
            element: <EditCrew />
        }
    ]);

    return (
        <>
            <NavBar />
            <div className="App">
                {element}
            </div>
        </>
    )
}

export default App