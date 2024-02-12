import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Account from "./components/Account";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/account",
      element: <Account />,
    },
  ]);
  return (
    // 375 × 812
    <div className="w-[375px] h-[735px] bg-[#F7F8F9] mx-auto flex ">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
