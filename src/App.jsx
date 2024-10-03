// react router dom import
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

// pages import
import Main from "./pages/Main";
import About from "./pages/About";
import Projects from "./pages/Projects";


// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'projects',
    element: <Projects />,
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
export default App