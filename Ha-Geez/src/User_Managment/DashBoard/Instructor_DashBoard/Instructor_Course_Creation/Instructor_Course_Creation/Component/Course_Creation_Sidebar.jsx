import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Course_Creation_Sidebar = () => {
  // const { course_content } = useParams();
  // const goToInstructorCourseCreation = (contentId) => {
  //   navigate(`/instructor_course_creation/${contentId}`);
  // };

  const navigate = useNavigate();
  return (
    <>
      <div className="fixed mt-20 ml-20">
        <div
          className="flex flex-col place-items-start space-y-6 border-r border-gray-400"
          style={{ height: "calc(100vh - 5rem)" }}
        >
          <Button variant="transparent" color="black" className="group relative" onClick={() => navigate("/instructor/course_creation")}>
            Intended Learners
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[4px] bg-blue-600 group-hover:w-[70%] transition-all"></span>
          </Button>
          <Button variant="transparent" color="black" className="group relative" onClick={() => navigate("/instructor/course_creation/course_detail")}>
            Course Details
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[4px] bg-blue-600 group-hover:w-[70%] transition-all"></span>
          </Button>
          <Button variant="transparent" color="black" className="group relative" onClick={() => navigate("/instructor/course_creation/course_content")}>
           Course Contents
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[4px] bg-blue-600 group-hover:w-[70%] transition-all"></span>
          </Button>
          <Button variant="transparent" color="black" className="group relative">
            Intended Learners
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[4px] bg-blue-600 group-hover:w-[70%] transition-all"></span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Course_Creation_Sidebar;
