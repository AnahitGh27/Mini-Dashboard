import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import StudentsList from "./pages/StudentsList/StudentsList";
import EditPage from "./pages/EditPage/EditPage";
import Edit from "./pages/EditPage/Edit";
import CreateStudent from "./pages/CreateStudent/CreateStudent";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <CreateStudent /> },
      { path: "students", element: <StudentsList /> },
      { path: "edit", element: <Edit /> },
      { path: "edit/:id", element: <EditPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
