
import { getAllData } from "../lib/firebase";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../Component/MyButton";
import CourseDetails from "./CourseDetails";

function AllCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCourses() {
      const data = await getAllData("courses");
      setCourses(data);
    }
    loadCourses();
  }, []);

  // function when press Enroll >>>> 
  const handleEnroll = (course) => {
    // navigate user to paypal check page 
    navigate("/checkout", { state: { course } });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {courses.map((course) => (
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
              <span
                className="block text-lg font-semibold mb-3"
                style={{ color: "#ff9500" }}
              >
                ${course.price}
              </span>
              <div className="flex gap-3">
                <MyButton bgColor="#ff9500" textColor="text-[#E4E4E7]">
                  <Link
                    to="/Course-Details"
                    className="rounded-md text-black px-3 py-2 text-md font-bold hover:text-black"
                  >
                    Show content
                  </Link>
                </MyButton>

                {/* enroll button call handle error */}
                <MyButton bgColor="#ff9500" onClick={() => handleEnroll(course)}>
                  {/* navigate to paypal page and pass course*/}
                  Enroll
                </MyButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllCourses;
