import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home/index.element.jsx";
import RegisterPage from "./pages/Register/index.jsx";
import ErrorPage from "./pages/ErrorPage";
import SelectCategoryPage from "./pages/SelectCategory/index.element";
import EntertainmentPage from "./pages/Entertainment/index.element";
import { loader as homePageLoader } from "./pages/Home/index.loader";
import { loader as selectPageLoader } from "./pages/SelectCategory/index.loader";
import { loader as entertainmentPageLoader } from "./pages/Entertainment/index.loader";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, loader: homePageLoader },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "select-category",
        element: <SelectCategoryPage />,
        loader: selectPageLoader,
      },
      {
        path: "entertainment",
        element: <EntertainmentPage />,
        loader: entertainmentPageLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
