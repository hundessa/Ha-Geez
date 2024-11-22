import { TextInput, Button } from "@mantine/core";
import Student_Header from "../../../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import Instructor_Sidebar from "../../Instructor_landingpage/Components/Instructor_Sidebar";
import Course_Creation_Sidebar from "./Component/Course_Creation_Sidebar";
import { FaRegPlayCircle, FaRegFileImage } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { useState } from "react";
import { HiTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Course_Content = () => {
  const [modules, setModules] = useState([{ id: 0, title: "", lectures: [{ id: 0, title: "", mediaButtonsVisible: false, videos: [], files: [] }] }]);
  const navigate = useNavigate();

  const handleAddModule = () => {
    const newModuleId = modules.length;
    setModules([...modules, { id: newModuleId, title: "", lectures: [{ id: 0, title: "", mediaButtonsVisible: false, videos: [], files: [] }] }]);
  };

  const handleDeleteModule = (moduleId) => {
    setModules(modules.filter((module) => module.id !== moduleId));
  };

  const handleAddLecture = (moduleId) => {
    const newLectureId = modules[moduleId].lectures.length;
    setModules(modules.map((module) => {
      if (module.id === moduleId) {
        return {
          ...module,
          lectures: [...module.lectures, { id: newLectureId, title: "", mediaButtonsVisible: false, videos: [], files: [] }],
        };
      }
      return module;
    }));
  };

  const handleDeleteLecture = (moduleId, lectureId) => {
    setModules(modules.map((module) => {
      if (module.id === moduleId) {
        return {
          ...module,
          lectures: module.lectures.filter((lecture) => lecture.id !== lectureId),
        };
      }
      return module;
    }));
  };

  const handleVideoUpload = (event, moduleId, lectureId) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      const videoDetails = { name: file.name, size: file.size };
      setModules(modules.map((module) => {
        if (module.id === moduleId) {
          return {
            ...module,
            lectures: module.lectures.map((lecture) => {
              if (lecture.id === lectureId) {
                return { ...lecture, videos: [...lecture.videos, videoDetails] };
              }
              return lecture;
            }),
          };
        }
        return module;
      }));
    }
  };

  const handleFileUpload = (event, moduleId, lectureId) => {
    const file = event.target.files[0];
    if (file && !file.type.startsWith("video/")) {
      const fileDetails = { name: file.name, size: file.size };
      setModules(modules.map((module) => {
        if (module.id === moduleId) {
          return {
            ...module,
            lectures: module.lectures.map((lecture) => {
              if (lecture.id === lectureId) {
                return { ...lecture, files: [...lecture.files, fileDetails] };
              }
              return lecture;
            }),
          };
        }
        return module;
      }));
    }
  };

  const handleDeleteVideo = (moduleId, lectureId, videoIndex) => {
    setModules(modules.map((module) => {
      if (module.id === moduleId) {
        return {
          ...module,
          lectures: module.lectures.map((lecture) => {
            if (lecture.id === lectureId) {
              const updatedVideos = lecture.videos.filter((_, index) => index !== videoIndex);
              return { ...lecture, videos: updatedVideos };
            }
            return lecture;
          }),
        };
      }
      return module;
    }));
  };

  const handleDeleteFile = (moduleId, lectureId, fileIndex) => {
    setModules(modules.map((module) => {
      if (module.id === moduleId) {
        return {
          ...module,
          lectures: module.lectures.map((lecture) => {
            if (lecture.id === lectureId) {
              const updatedFiles = lecture.files.filter((_, index) => index !== fileIndex);
              return { ...lecture, files: updatedFiles };
            }
            return lecture;
          }),
        };
      }
      return module;
    }));
  };

  const toggleMediaButtonsVisibility = (moduleId, lectureId) => {
    setModules(modules.map((module) => {
      if (module.id === moduleId) {
        return {
          ...module,
          lectures: module.lectures.map((lecture) => {
            if (lecture.id === lectureId) {
              return { ...lecture, mediaButtonsVisible: !lecture.mediaButtonsVisible };
            }
            return lecture;
          }),
        };
      }
      return module;
    }));
  };

  return (
    <>
      <Student_Header />
      <Instructor_Sidebar />
      <Course_Creation_Sidebar />

      <div className="absolute mt-20 ml-[300px]">
        <div>
          <div>
            <h1 className="font-bold text-2xl mb6">Course Content</h1>
            <h1 className="text-justify font-extralight text-sm max-w-[900px] my-6">
              Start putting together your course by creating modules, lectures
              and practice (quizzes, coding exercises and assignments). Start
              putting together your course by creating sections, lectures and
              practice activities (quizzes, exercises and assignments) Use your
              course outline to structure your content and label your sections
              and lectures clearly. If you’re intending to offer your course for
              free, the total length of video content must be less than 2 hours.
            </h1>
          </div>
          {modules.map((module, moduleIndex) => (
            <div
              key={module.id}
              className="bg-[#E7F3FF] p-6 border-gray-400 border-[1px] rounded-md mb-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h1 className="font-medium">Module {moduleIndex + 1}: </h1>
                  <TextInput
                    className="ml-4"
                    value={module.title}
                    onChange={(e) => {
                      const newTitle = e.target.value;
                      setModules(
                        modules.map((mod) =>
                          mod.id === module.id
                            ? { ...mod, title: newTitle }
                            : mod
                        )
                      );
                    }}
                  />
                </div>
                <Button
                  variant="light"
                  onClick={() => handleDeleteModule(module.id)}
                >
                  <HiTrash size="20px" />
                </Button>
              </div>
              {module.lectures.map((lecture, lectureIndex) => (
                <div key={lecture.id} className="mt-4">
                  <div className="flex items-center ml-4">
                    <h1>Lecture {lectureIndex + 1}:</h1>
                    <CiFileOn className="mx-4 size-[20px]" />
                    <div className="flex mt-[-7px]">
                      <TextInput
                        className="w-[300px] mr-8"
                        value={lecture.title}
                        onChange={(e) => {
                          const newTitle = e.target.value;
                          setModules(
                            modules.map((mod) => {
                              if (mod.id === module.id) {
                                return {
                                  ...mod,
                                  lectures: mod.lectures.map((lec) =>
                                    lec.id === lecture.id
                                      ? { ...lec, title: newTitle }
                                      : lec
                                  ),
                                };
                              }
                              return mod;
                            })
                          );
                        }}
                      />
                      <Button
                        variant="outline"
                        className="p0 mr-4 items-center flex"
                        onClick={() =>
                          toggleMediaButtonsVisibility(module.id, lecture.id)
                        }
                      >
                        {lecture.mediaButtonsVisible
                          ? "- Hide media"
                          : "+ Add media"}
                      </Button>
                    </div>
                    {module.lectures.length > 1 && (
                      <Button
                        variant="light"
                        onClick={() =>
                          handleDeleteLecture(module.id, lecture.id)
                        }
                        className="ml-2"
                      >
                        <HiTrash size="20px" />
                      </Button>
                    )}
                  </div>
                  <div className="ml-[200px] mt-4 space-x-4">
                    {lecture.mediaButtonsVisible && (
                      <div className="flex space-x-4">
                        <label>
                          <Button
                            variant="outline"
                            color="black"
                            component="span"
                          >
                            <FaRegPlayCircle className="mr-2" />
                            Video
                          </Button>
                          <input
                            type="file"
                            accept="video/*"
                            style={{ display: "none" }}
                            onChange={(e) =>
                              handleVideoUpload(e, module.id, lecture.id)
                            }
                          />
                        </label>
                        <label>
                          <Button
                            variant="outline"
                            color="black"
                            component="span"
                          >
                            <FaRegFileImage className="mr-2" />
                            File
                          </Button>
                          <input
                            type="file"
                            accept="application/*"
                            style={{ display: "none" }}
                            onChange={(e) =>
                              handleFileUpload(e, module.id, lecture.id)
                            }
                          />
                        </label>
                      </div>
                    )}
                    {/* Render list of uploaded videos */}
                    {lecture.videos.length > 0 && (
                      <div className="mt-4">
                        <h2 className="font-medium">Uploaded Videos:</h2>
                        <ul>
                          {lecture.videos.map((video, idx) => (
                            <li key={idx} className="mt-2 flex items-center">
                              <div>
                                <p>File Name: {video.name}</p>
                                <p>
                                  File Size:{" "}
                                  {(video.size / (1024 * 1024)).toFixed(2)} MB
                                </p>
                              </div>
                              <Button
                                variant="light"
                                onClick={() =>
                                  handleDeleteVideo(module.id, lecture.id, idx)
                                }
                                className="ml-2"
                              >
                                <HiTrash size="20px" />
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Render list of uploaded files */}
                    {lecture.files.length > 0 && (
                      <div className="mt-4">
                        <h2 className="font-medium">Uploaded Files:</h2>
                        <ul>
                          {lecture.files.map((file, idx) => (
                            <li key={idx} className="mt-2 flex items-center">
                              <div>
                                <p>File Name: {file.name}</p>
                                <p>
                                  File Size:{" "}
                                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                                </p>
                              </div>
                              <Button
                                variant="light"
                                onClick={() =>
                                  handleDeleteFile(module.id, lecture.id, idx)
                                }
                                className="ml-2"
                              >
                                <HiTrash size="20px" />
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                className="p-2 m-0 items-center flex mt-4"
                onClick={() => handleAddLecture(module.id)}
              >
                + Add Lecture
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            className="p-2 m-0 items-center flex mt-4"
            onClick={handleAddModule}
          >
            + Add Module
          </Button>
        </div>
        <div className="flex justify-start my-12">
          <Button
            className="w-[100px]"
            variant="filled"
            color="#09335F"
            onClick={() =>
              navigate("/instructor/course_creation/course_detail")
            }
          >
            Previous
          </Button>
        </div>
      </div>
    </>
  );
};

export default Course_Content;
