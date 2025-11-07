import './App.css'
import { Link, useRoutes } from 'react-router-dom'
import ReadCrew from "./pages/ReadCrew"
import EditCrew from "./pages/EditCrew"
import CreateCrew from "./pages/CreateCrew"
import NavBar from "./components/NavBar"
function App() {

    let element = useRoutes([
        {
            path: "/",
            element: <ReadCrew />
        },
        {
            path: "edit/:id",
            element: <EditCrew />
        },
        {
            path: "/new",
            element: <CreateCrew />
        }
    ]);

    return (
        <>
            <div className="App">
                <h1>test</h1>
                <NavBar />
                {element}
            </div>
        </>
    )
}

export default App