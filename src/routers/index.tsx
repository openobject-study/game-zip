import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from 'views/App';

// export default createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<App />} />
//       <Route path="/dashboard" element={<div>dashboard</div>} />
//     </>
//   )
// );

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