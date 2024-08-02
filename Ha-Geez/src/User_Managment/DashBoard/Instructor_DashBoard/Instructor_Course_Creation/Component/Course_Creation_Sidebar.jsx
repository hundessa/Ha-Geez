import { Button } from "@mantine/core";

const Course_Creation_Sidebar = () => {
  return (
    <>
      <div className="absolute mt-20 ml-20">
        <div
          className="flex flex-col place-items-start space-y-6 border-r border-gray-400"
          style={{ height: "calc(100vh - 5rem)" }}
        >
          <Button variant="transparent" color="black" className="group relative">
            Intended Learners
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[4px] bg-blue-600 group-hover:w-[70%] transition-all"></span>
          </Button>
          <Button variant="transparent" color="black" className="group relative">
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