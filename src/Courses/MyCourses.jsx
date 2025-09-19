import React, { useEffect, useState } from "react";
import { getCurrentUser, getUserEnrolledCourses } from "../lib/firebase";
import { getCoursesFromLocal, setCoursesToLocal } from "../lib/localStorage";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MyCourses() {
	const { t } = useTranslation();
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);

	// Fetch user and courses when page loads
	useEffect(() => {
		(async () => {
			try {
				const user = getCurrentUser();

				if (user?.uid) {
					const remote = await getUserEnrolledCourses(user.uid);
					const local = getCoursesFromLocal(user.uid);

					// Merge unique courses by courseId
					const map = new Map();
					[...(remote || []), ...(local || [])].forEach((c) => {
						if (c?.courseId) map.set(c.courseId, c);
					});
					const merged = Array.from(map.values());

					// persist and set
					setCoursesToLocal(user.uid, merged);
					setCourses(merged);
				} else {
					const guestCourses = getCoursesFromLocal("guest") || [];
					setCourses(guestCourses);
				}
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	// Loading state
	if (loading) {
		return (
			<div className="p-6">
				{t("myCourses.loading", "Loading your courses…")}
			</div>
		);
	}

	// Empty state
	if (!courses.length) {
		return (
			<div className="p-6">
				<h1 className="text-2xl font-bold mb-2">
					{t("myCourses.title", "My Courses")}
				</h1>
				<p className="text-gray-600">
					{t("myCourses.empty.message", "No enrolled courses yet.")}
				</p>
			</div>
		);
	}

	// Courses grid
	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-6">
				{t("myCourses.title", "My Courses")}
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{courses.map((c) => {
					const courseId = c.courseId; // المفتاح الصحيح
					const title =
						c.title || t("myCourses.enrolledCourse", "Enrolled course");
					const imageUrl = c.imageUrl || "";
					const price =
						typeof c.price === "number"
							? c.price
							: c.price
							? Number(c.price)
							: null;

					// تاريخ التحاق آمن
					let enrolledLabel = "";
					if (c.enrolledAt) {
						const d = new Date(c.enrolledAt);
						enrolledLabel = isNaN(d.getTime())
							? String(c.enrolledAt)
							: d.toLocaleString();
					}

					return (
						<div
							key={courseId}
							className="flex flex-col bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
						>
							{/* صورة */}
							<div className="w-full h-48 bg-gray-100">
								{imageUrl ? (
									<img
										src={imageUrl}
										alt={title}
										className="w-full h-full object-contain"
										loading="lazy"
										onError={(e) => (e.currentTarget.style.display = "none")}
									/>
								) : null}
							</div>

							{/* محتوى */}
							<div className="p-5 flex-1 flex flex-col">
								<h2 className="text-lg font-bold text-gray-900 mb-2">
									{title}
								</h2>

								{price !== null && (
									<p className="text-sm text-gray-600 mb-3">
										{t("myCourses.price.currencySymbol", "$")}
										{price}
									</p>
								)}

								{enrolledLabel && (
									<p className="text-xs text-gray-500 mt-auto">
										{t("myCourses.enrolled_on", { date: enrolledLabel })}
									</p>
								)}
							</div>

							{/* Show content موجود هنا */}
							<Link
								to={`/courses/${courseId}`}
								className="block w-full rounded bg-[#ff9500] px-4 py-2 text-center font-bold text-white hover:brightness-110 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
							>
								{t("myCourses.showContent", "Show content")}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
