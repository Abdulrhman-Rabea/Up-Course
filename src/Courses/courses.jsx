import { useDispatch, useSelector } from "react-redux";
import {
	addToWishlist,
	removeFromWishlist,
} from "../redux/slices/wishlistSlice";

import { getAllData } from "../lib/firebase";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import MyButton from "../Component/MyButton";
import Pagination from "../Component/pagination";

const CATEGORIES = [
	"Programming",
	"Graphic Design",
	"Social Media",
	"Marketing",
	"Ui/UX",
];

function AllCourses() {
	const [courses, setCourses] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate();
	const itemsPerPage = 5;

	// Redux
	const dispatch = useDispatch();
	const { items: wishlistItems } = useSelector((state) => state.wishlist);

	// URL params
	const [params, setParams] = useSearchParams();
	const cat = params.get("cat") || "";
	const q = params.get("q") || "";
	const [searchInput, setSearchInput] = useState(q);

	useEffect(() => {
		async function loadCourses() {
			const data = await getAllData("courses");
			setCourses(data);
		}
		loadCourses();
	}, []);

	useEffect(() => {
		setSearchInput(q);
	}, [q]);

	useEffect(() => {
		setCurrentPage(1);
	}, [cat, q, courses.length]);

	useEffect(() => {
		const id = setTimeout(() => {
			const next = new URLSearchParams(params);
			if (!searchInput.trim()) next.delete("q");
			else next.set("q", searchInput.trim());
			setParams(next, { replace: true });
		}, 300);
		return () => clearTimeout(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchInput]);

	const onChangeCat = (value) => {
		const next = new URLSearchParams(params);
		if (!value) next.delete("cat");
		else next.set("cat", value);
		setParams(next);
	};

	const filtered = useMemo(() => {
		const base = cat ? courses.filter((c) => c.category === cat) : courses;
		if (!q.trim()) return base;

		const term = q.trim().toLowerCase();
		return base.filter((c) => {
			const title = String(c.title || "").toLowerCase();
			const desc = String(c.description || "").toLowerCase();
			const category = String(c.category || "").toLowerCase();
			return (
				title.includes(term) || desc.includes(term) || category.includes(term)
			);
		});
	}, [courses, cat, q]);

	// Pagination
	const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentCourses = filtered.slice(startIndex, startIndex + itemsPerPage);

	// Enroll
	const handleEnroll = (course) => {
		navigate("/checkout", { state: { course } });
	};

	// Clear search
	const clearSearch = () => setSearchInput("");

	return (
		<div className="p-6">
			{/* Header: Title + Filters */}
			<header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<h1 className="text-2xl font-bold">
					{cat ? `Category: ${cat}` : "All Courses"}
					{q ? ` — Search: “${q}”` : ""}
				</h1>

				<div className="flex flex-col sm:flex-row gap-3 sm:items-center">
					{/* Searchbar */}
					<div className="relative">
						<input
							type="text"
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
							placeholder="Search courses…"
							className="w-72 max-w-full px-4 py-2 pr-9 rounded-xl border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
						/>
						{searchInput && (
							<button
								aria-label="Clear search"
								onClick={clearSearch}
								className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
							>
								×
							</button>
						)}
					</div>

					{/* Category dropdown */}
					<label className="inline-flex items-center gap-3">
						<span className="text-sm text-gray-700">Filter by category</span>
						<select
							value={cat}
							onChange={(e) => onChangeCat(e.target.value)}
							className="min-w-48 px-3 py-2 rounded-xl border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
						>
							<option value="">All</option>
							{CATEGORIES.map((name) => (
								<option key={name} value={name}>
									{name}
								</option>
							))}
						</select>
					</label>
				</div>
			</header>

			{/* Results grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{currentCourses.map((course) => {
					const isSaved = wishlistItems.some((item) => item.id === course.id);

					const handleToggleWishlist = () => {
						if (isSaved) {
							dispatch(removeFromWishlist(course.id));
						} else {
							dispatch(addToWishlist(course));
						}
					};

					return (
						<div
							key={course.id}
							className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative"
						>
							{/* Wishlist heart */}
							<div
								onClick={handleToggleWishlist}
								className="absolute top-4 right-4 cursor-pointer text-2xl z-10"
							>
								<i
									className={
										isSaved
											? "fas fa-heart text-red-500"
											: "far fa-heart text-gray-700"
									}
								></i>
							</div>

							{/* Image */}
							<div className="w-full h-48 bg-gray-100">
								<img
									src={course.imageUrl}
									alt={course.title}
									className="w-full h-full object-contain"
									loading="lazy"
								/>
							</div>

							{/* Content */}
							<div className="flex flex-col flex-1 p-5">
								<h2 className="text-lg font-bold text-gray-900 mb-2">
									{course.title}
								</h2>

								<p className="text-gray-600 text-sm mb-2">{course.category}</p>

								<p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
									{course.description}
								</p>

								{/* Footer */}
								<div className="pt-3 border-t mt-auto">
									<div className="mt-4 flex justify-center items-center gap-16">
										<p className="text-lg font-bold text-gray-900 mb-2">
											Price:
										</p>
										<span className="text-2xl font-bold text-orange-500">
											${course.price}
										</span>
									</div>

									<div className="flex gap-3 mt-4">
										<Link
											to={`/courses/${course.id}`}
											className="block w-full rounded bg-[#ff9500] px-4 py-2 text-center font-bold text-white hover:brightness-110 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
										>
											Show content
										</Link>

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
					);
				})}
			</div>

			{/* Empty state */}
			{!currentCourses.length && (
				<p className="text-gray-500 text-center mt-6">
					No courses found{q ? ` for “${q}”` : ""}
					{cat ? ` in ${cat}` : ""}.
				</p>
			)}

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
