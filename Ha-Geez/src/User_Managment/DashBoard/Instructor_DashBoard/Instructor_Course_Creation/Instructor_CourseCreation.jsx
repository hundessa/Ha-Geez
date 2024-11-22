import { useState } from "react";
import { Button, TextInput } from "@mantine/core";
import { HiPlus, HiTrash } from "react-icons/hi";
import Course_Creation_Sidebar from "./Instructor_Course_Creation/Component/Course_Creation_Sidebar";
import Instructor_Sidebar from "../Instructor_landingpage/Components/Instructor_Sidebar";
import Student_Header from "../../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Instructor_CourseCreation = () => {
 

    // const navigate = useNavigate();
    const [learningObjectives, setLearningObjectives] = useState([{ id: 0, value: "" }]);
    const [requirements, setRequirements] = useState([{ id: 0, value: "" }]);
    const [intendedLearners, setIntendedLearners] = useState([{ id: 0, value: "" }]);
    const navigate = useNavigate();
  
    const handleAddLearningObjective = () => {
       // Log the id before updating state
    const newId = learningObjectives.length;
  
    // Update learningObjectives state
    setLearningObjectives((prevObjectives) => [
      ...prevObjectives,
      { id: newId, value: "" },
      // setLearningObjectives((prevObjectives) => [
      //   ...prevObjectives,
      //   { id: prevObjectives.length, value: "" },
      ]);
      
    };
  
    const handleDeleteLearningObjective = (id) => {
      setLearningObjectives((prevObjectives) =>
        prevObjectives.filter((objective) => objective.id !== id)
      );
    };
  
    const handleLearningObjectiveChange = (id, newValue) => {
      setLearningObjectives((prevObjectives) =>
        prevObjectives.map((objective) =>
          objective.id === id ? { ...objective, value: newValue } : objective
        )
      );
    };
  
    const handleAddRequirement = () => {
      setRequirements((prevRequirements) => [
        ...prevRequirements,
        { id: prevRequirements.length, value: "" },
      ]);
    };
  
    const handleDeleteRequirement = (id) => {
      setRequirements((prevRequirements) =>
        prevRequirements.filter((requirement) => requirement.id !== id)
      );
    };
  
    const handleRequirementChange = (id, newValue) => {
      setRequirements((prevRequirements) =>
        prevRequirements.map((requirement) =>
          requirement.id === id ? { ...requirement, value: newValue } : requirement
        )
      );
    };
  
    const handleAddIntendedLearner = () => {
      setIntendedLearners((prevLearners) => [
        ...prevLearners,
        { id: prevLearners.length, value: "" },
      ]);
    };
  
    const handleDeleteIntendedLearner = (id) => {
      setIntendedLearners((prevLearners) =>
        prevLearners.filter((learner) => learner.id !== id)
      );
    };
  
    const handleIntendedLearnerChange = (id, newValue) => {
      setIntendedLearners((prevLearners) =>
        prevLearners.map((learner) =>
          learner.id === id ? { ...learner, value: newValue } : learner
        )
      );
    };
    return (
      <>
        <Student_Header />
        <Instructor_Sidebar />
        <Course_Creation_Sidebar />

        <div className="absolute mt-20 ml-[300px]">
          <div className="mb10">
            <h1 className="font-semibold text-2xl flex justifycenter ml-12 mb-6">
              Intended Learners
            </h1>
            <h1 className="max-w-[900px] text-justify">
              The following descriptions will be publicly visible on your Course
              landing page and will have a direct impact on your course
              performance. These descriptions will help learners decide if your
              course is right for them.
            </h1>
            <div className="my-10">
              <h1 className="font-bold mb-2">
                What will your students learn in your course ?
              </h1>
              <h1 className="font-extralight max-w-[800px] text-sm">
                You must enter at least 4 learning objectives or outcomes that
                learners can expect to achieve after completing your course.
              </h1>
              {learningObjectives.map((objective) => (
                <div key={objective.id} className="flex items-center mb-2">
                  <TextInput
                    variant="filled"
                    value={objective.value}
                    onChange={(event) =>
                      handleLearningObjectiveChange(
                        objective.id,
                        event.currentTarget.value
                      )
                    }
                    className="flex-1"
                  />
                  {learningObjectives.length > 1 && (
                    <Button
                      variant="light"
                      onClick={() =>
                        handleDeleteLearningObjective(objective.id)
                      }
                      className="ml-2"
                    >
                      <HiTrash size="20px" />
                    </Button>
                  )}
                </div>
              ))}
              <Button variant="light" onClick={handleAddLearningObjective}>
                <HiPlus size="20px" className={``} />
              </Button>
            </div>
            <div className="my-10">
              <h1 className="font-bold mb-2">
                What are the requirements or prerequisites for taking your
                course ?
              </h1>
              <h1 className="font-extralight text-sm max-w-[800px]">
                List the required skills, experience, tools or equipment
                learners should have prior to taking your course.If there are no
                requirements, use this space as an opportunity to lower the
                barrier for beginners.
              </h1>
              {requirements.map((requirement) => (
                <div key={requirement.id} className="flex items-center mb-2">
                  <TextInput
                    variant="filled"
                    value={requirement.value}
                    onChange={(event) =>
                      handleRequirementChange(
                        requirement.id,
                        event.currentTarget.value
                      )
                    }
                    className="flex-1"
                  />
                  {requirements.length > 1 && (
                    <Button
                      variant="light"
                      onClick={() => handleDeleteRequirement(requirement.id)}
                      className="ml-2"
                    >
                      <HiTrash size="20px" />
                    </Button>
                  )}
                </div>
              ))}
              <Button variant="light" onClick={handleAddRequirement}>
                <HiPlus size="20px" />
              </Button>
            </div>
            <div className="my-10">
              <h1 className="font-bold mb-2">Who is this course for ?</h1>
              <h1 className="font-extralight text-sm max-w-[800px]">
                Write a clear description of the intended learners for your
                course who will find your course content valuable.This will help
                you attract the right learners to your course.
              </h1>
              {intendedLearners.map((learner) => (
                <div key={learner.id} className="flex items-center mb-2">
                  <TextInput
                    variant="filled"
                    value={learner.value}
                    onChange={(event) =>
                      handleIntendedLearnerChange(
                        learner.id,
                        event.currentTarget.value
                      )
                    }
                    className="flex-1"
                  />
                  {intendedLearners.length > 1 && (
                    <Button
                      variant="light"
                      onClick={() => handleDeleteIntendedLearner(learner.id)}
                      className="ml-2"
                    >
                      <HiTrash size="20px" />
                    </Button>
                  )}
                </div>
              ))}
              <Button variant="light" onClick={handleAddIntendedLearner}>
                <HiPlus size="20px" />
              </Button>
            </div>
          </div>

          <div className="flex justify-end ml-auto mb-10">
            <Button
              color="#09355F"
              className="w-[100px]"
              onClick={() =>
                navigate("/instructor/course_creation/course_detail")
              }
            >
              Next
            </Button>
          </div>
        </div>
      </>
    );
  };
export default Instructor_CourseCreation