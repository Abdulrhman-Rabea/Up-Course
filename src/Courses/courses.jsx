import { getAllData } from "../lib/firebase";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../Component/MyButton";
import Pagination from "../Component/pagination";

function AllCourses() {
	const [courses, setCourses] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate();

	const itemsPerPage = 5;

	useEffect(() => {
		async function loadCourses() {
			const data = await getAllData("courses");
			setCourses(data);
		}
		loadCourses();
	}, []);

	// حساب عدد الصفحات
	const totalPages = Math.ceil(courses.length / itemsPerPage);

	// تحديد الكورسات اللي هتظهر في الصفحة الحالية
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentCourses = courses.slice(startIndex, startIndex + itemsPerPage);

	// function when press Enroll >>>>
	const handleEnroll = (course) => {
		// navigate user to paypal check page
		navigate("/checkout", { state: { course } });
	};

	return (
		<div className="p-6">
			{/* grid of courses */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{currentCourses.map((course) => (
					<div
						key={course.id}
						className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
					>
						{/* Image */}
						<div className="w-full h-48 bg-gray-100">
							<img
								src={course.imageUrl}
								alt={course.title}
								className="w-full h-full object-contain"
							/>
						</div>

						{/* Content */}
						<div className="flex flex-col flex-1 p-5">
							<h2 className="text-lg font-bold text-gray-900 mb-2">
								{course.title}
							</h2>
							<p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
								{course.description}
							</p>

							{/* Footer */}
							<div className="pt-3 border-t mt-auto">
								<div className="mt-4 flex justify-center items-center gap-16">
									<p className="text-lg font-bold text-gray-900 mb-2">Price:</p>
									<span className="text-2xl font-bold text-orange-500 transition-transform duration-200 hover:scale-110 hover:text-orange-600">
										${course.price}
									</span>
								</div>

								<div className="flex gap-3">
									<MyButton bgColor="#ff9500" textColor="text-[#E4E4E7]">
										<Link
											to={`/courses/${course.id}`}
											className="rounded-md text-black px-3 py-2 text-md font-bold hover:text-black"
										>
											Show content
										</Link>
									</MyButton>

									{/* enroll button call handleEnroll */}
									<MyButton
										bgColor="#ff9500"
										onClick={() => handleEnroll(course)}
									>
										Enroll
									</MyButton>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Pagination */}
			{totalPages > 1 && (
				<div className="flex justify-center mt-8">
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={(page) => setCurrentPage(page)}
						size="md"
					/>
				</div>
			)}
		</div>
	);
}

export default AllCourses;
