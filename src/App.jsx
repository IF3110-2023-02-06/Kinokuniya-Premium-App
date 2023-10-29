import Dashboard from "./Dashboard";
import Books from "./Books";
import Analytics from "./Analytics";
import Auth from "./Auth";
import PageNotFound from "./PageNotFound";
import { REST_BASE_URL } from "./common/constants";

import {
	createBrowserRouter,
	RouterProvider
  } from "react-router-dom"

import Sidebar from "./components/Sidebar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useEffect, useState } from "react";

function App() {

	const [isAuth, setIsAuth] = useState(false);

	const checkAuth = async () => {
		const response = await fetch(`${REST_BASE_URL}/user/check`,
		{
		  headers: {
			"Authorization": localStorage.getItem("token") ?? ""
		  }
		});
	
		if (!response.ok) {
		  // Token tidak valid
		  navigate("/login");
		} else {
		  const data = await response.json();
		  setIsAdmin(data.isAdmin);
		  setUserID(data.userID);
		  setIsAuth(true);
		}
	  };

	useEffect(() => {
		checkAuth();
	}, []);

	const router = isAuth ? createBrowserRouter([{
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