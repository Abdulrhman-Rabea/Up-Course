import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Registration from "./regisrtaion/Registration";
import NotFound from "./NotFound/NotFound";
import Login from "./login/Login";
import Home from "./pages/Home";

function App() {
	let router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ index: true, element: <Home /> },
				{ path: "register", element: <Registration /> },
				{ path: "login", element: <Login /> },
				{ path: "*", element: <NotFound /> },
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
