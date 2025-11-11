import './App.css'
import { useRoutes } from 'react-router-dom'
import Landing from "./pages/Landing"
import ReadCrew from "./pages/ReadCrew"
import EditCrew from "./pages/EditCrew"
import CreateCrew from "./pages/CreateCrew"
import DetailedView from "./pages/DetailedView"
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
        },
        {
            path: "/gallery/detailed/:id",
            element: <DetailedView />
        }
    ]);

    return (
        <>
            <NavBar />
            <div className="App">
                <div className="margins">
                    {element}
                </div>
            </div>
        </>
    )
}

export default App