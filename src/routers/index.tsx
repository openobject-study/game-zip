import { createBrowserRouter } from "react-router-dom";
import App from 'views/App';


export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <div>dashboard</div>,
  },
]);