import './App.css'
import { Link, useRoutes } from 'react-router-dom'
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
            path: "edit/:id",
            element: <EditCrew />
        },
        {
            path: "/new",
            element: <CreateCrew />
        },
        {
            path: "/gallery",
            element: <ReadCrew />
        }
    ]);

    return (
        <>
            <NavBar />
            <div className="App">
                <h1>test</h1>
                {element}
            </div>
        </>
    )
}

export default App