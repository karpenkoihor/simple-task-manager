import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./components/pages/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>home page</div>,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
