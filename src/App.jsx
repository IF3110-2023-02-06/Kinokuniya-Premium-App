import Dashboard from "./Dashboard";
import Books from "./Books";
import Analytics from "./Analytics";
import Subscribers from "./Subscribers";
import Settings from "./Settings";
import AuthLayout from "./AuthLayout";
import PageNotFound from "./PageNotFound";

import {
	createBrowserRouter,
	RouterProvider
  } from "react-router-dom"

import MainLayout from "./common/components/MainLayout";
import LoginForm from "./common/components/LoginForm";
import RegisterForm from "./common/components/RegisterForm";

function App() {

	const router = createBrowserRouter([{
		path: "/",
		element: <MainLayout/>,
		errorElement: <PageNotFound/>,
		children: [
			{ path: "/dashboard", element: <Dashboard/> },
			{ path: "/books", element: <Books/> },
			{ path: "/analytics", element: <Analytics/> },
			{ path: "/subscribers", element: <Subscribers/> },
			{ path: "/settings", element: <Settings/> }
		]
	}, 
	{
		path: "/",
		element: <AuthLayout/>,
		errorElement: <PageNotFound/>,
		children: [
			{ path: "/login", element: <LoginForm/> },
			{ path: "/register", element: <RegisterForm/> }
		]
	}])

    return <RouterProvider router={router} />
}

export default App;