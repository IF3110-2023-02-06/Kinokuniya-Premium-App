import Books from "./Books";
import Analytics from "./Analytics";
import Subscribers from "./Subscribers";
import Settings from "./Settings";
import PageNotFound from "./PageNotFound";
import AddBook from "./AddBook";

import {
	createBrowserRouter,
	RouterProvider
  } from "react-router-dom"

import MainLayout from "./common/components/layouts/MainLayout";
import AuthLayout from "./common/components/layouts/AuthLayout";
import LoginForm from "./common/components/forms/LoginForm";
import RegisterForm from "./common/components/forms/RegisterForm";

function App() {

	const router = createBrowserRouter([{
		path: "/",
		element: <MainLayout/>,
		errorElement: <PageNotFound/>,
		children: [
			{ path: "/books", element: <Books/> },
			{ path: "/analytics", element: <Analytics/> },
			{ path: "/subscribers", element: <Subscribers/> },
			{ path: "/settings", element: <Settings/> },
			{ path: "/books/add", element: <AddBook/> }
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