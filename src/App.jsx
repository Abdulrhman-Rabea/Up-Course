import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Registration from "./regisrtaion/Registration";
import NotFound from "./NotFound/NotFound";
import Login from "./login/Login";
import Home from "./pages/Home";
import AdminPage from "./AdminDashboard/Page/AdminPage";
import AddCoursePage from "./AdminDashboard/Page/AddCoursePage";
import EditCoursePage from "./AdminDashboard/Page/EditCoursePage";
import CourseDetails from "./Courses/CourseDetails";
import AllCourses from "./Courses/courses";
import PayPalCheckout from "./pages/PayPalCheckout";
import MyCourses from "./Courses/MyCourses";

function App() {
	let router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ index: true, element: <Home /> },
				{ path: "register", element: <Registration /> },
				{ path: "login", element: <Login /> },
				{ path: "AdminPage", element: <AdminPage /> },
				{ path: "add-course", element: <AddCoursePage /> },
				{ path: "edit-course/:courseId", element: <EditCoursePage /> },
				{ path: "courses/:id", element: <CourseDetails /> },
				{ path: "checkout", element: <PayPalCheckout /> },
				{ path: "my-courses", element: <MyCourses /> },
				{ path: "Courses", element: <AllCourses /> },

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
