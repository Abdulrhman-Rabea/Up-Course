
import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import CourseRow from './CourseRow';

function CoursesTable() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesCollection = collection(db, 'courses');
        const q = query(coursesCollection, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const coursesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Function to handle course deletion
  const handleDeleteCourse = (idToDelete) => {
    // Remove the deleted course from the state
    setCourses(currentCourses => currentCourses.filter(course => course.id !== idToDelete));
  };

  if (isLoading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (
    <div className="bg-white m-6 p-6 rounded-lg shadow-sm overflow-x-auto">
      <table className="w-full text-left">
        {/* ... Thead code remains the same ... */}
        <thead>
          <tr>
            <th className="p-4 text-sm font-bold text-gray-600 text-center"> Image </th>
            <th className="p-4 text-sm font-bold text-gray-600 text-center"> Course Name </th>
            <th className="p-4 text-sm font-bold text-gray-600 text-center">Price</th>
            <th className="p-4 text-sm font-bold text-gray-600 text-center">Description</th>
            <th className="p-4 text-sm font-bold text-gray-600 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course) => (
              //  Pass the handleDeleteCourse function as a prop
              <CourseRow 
                key={course.id} 
                course={course} 
                onDelete={handleDeleteCourse} 
              />
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-10 text-gray-500">
                Don't have any course yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CoursesTable;