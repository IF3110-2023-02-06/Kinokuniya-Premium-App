import Dashboard from "./Dashboard";
import Books from "./Books";
import Analytics from "./Analytics";
import Auth from "./Auth";
import PageNotFound from "./PageNotFound";
// import Cookies from "universal-cookie";

import {
	createBrowserRouter,
	RouterProvider
  } from "react-router-dom"

import Sidebar from "./components/Sidebar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

// const cookies = new Cookies();

function App() {

	let loggedIn = false;

	const router = loggedIn ? createBrowserRouter([{
		path: "/",
		element: <Sidebar/>,
		errorElement: <PageNotFound/>,
		children: [
			{ path: "/dashboard", element: <Dashboard/> },
			{ path: "/books", element: <Books/> },
			{ path: "/analytics", element: <Analytics/> }
		]
	}]) : createBrowserRouter([{
		path: "/",
		element: <Auth/>,
		errorElement: <PageNotFound/>,
		children: [
			{ path: "/login", element: <LoginForm/> },
			{ path: "/register", element: <RegisterForm/> }
		]
	}]);

    return <RouterProvider router={router} />
}

export default App;