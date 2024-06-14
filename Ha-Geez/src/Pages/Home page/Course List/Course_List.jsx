import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Course_List = () => {
  // Sample course data
  // const courses = [
  //   { id: 1, title: "Introduction to Programming", category: "technology" },
  //   { id: 2, title: "Graphic Design Basics", category: "design" },
  //   { id: 3, title: "Web Development", category: "technology" },
  //   { id: 4, title: "UI/UX Design", category: "design" },
  // ];

  const [filter, setFilter] = useState("All");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // const filteredCourses = courses.filter((course) => {
  //   if (filter === "All") return true;
  //   return course.category === filter;
  // });

  return (
    <>
      <Header />
      <div className="p-2 mx-52 h-[100px] bg-[#A2CBF5] flex border-[3px] border-black mt-5 w-[700px]">
        <img
          className="w-[100px] h-[80px]"
          src="src/assets/images/Course List/Course List image.jpg"
          alt="Course List"
        />
        <div className="ml-20">
          <h1 className="text-2xl font-bold">HA-GEEZ COURSES</h1>
          <p>Explore Inspiring Online Courses</p>
        </div>
      </div>

      <div className="mx-52 mt-5">
        <label htmlFor="sort" className="mr-3">Sort By:</label>
        <select id="sort" value={filter} onChange={handleFilterChange} className="border p-1">
          <option value="All">All</option>
          <option value="technology">(A-Z) ascending</option>
          <option value="design">(A-Z) descending</option>
        </select>
      </div>

      {/* <div className="mx-52 mt-5">
        {filteredCourses.map((course) => (
          <div key={course.id} className="p-4 mb-4 bg-gray-100 border border-gray-300">
            <h2 className="text-xl font-bold">{course.title}</h2>
            <p className="text-gray-600">Category: {course.category}</p>
          </div>
        ))}
      </div> */}

      <Footer />
    </>
  );
};

export default Course_List;
