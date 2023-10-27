import Dashboard from "./Dashboard";
import Books from "./Books";
import Analytics from "./Analytics";
import PageNotFound from "./PageNotFound";
import Cookies from "universal-cookie";

import {
	createBrowserRouter,
	RouterProvider,
	Route
  } from "react-router-dom"

import Sidebar from "./components/Sidebar";

// const cookies = new Cookies();

function App() {

	const router = createBrowserRouter([{
		path: "/",
		element: <Sidebar/>,
		errorElement: <PageNotFound/>,
		children: [
			{ path: "/dashboard", element: <Dashboard/> },
			{ path: "/books", element: <Books/> },
			{ path: "/analytics", element: <Analytics/> }
		]
	}]);

    return <RouterProvider router={router} />
}

export default App;