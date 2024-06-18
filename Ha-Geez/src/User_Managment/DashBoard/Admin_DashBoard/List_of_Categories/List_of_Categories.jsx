import { useMemo, useState } from "react";
import Student_Header from "../../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import { listOfCategories } from "../../../../Pages/Home page/Course_Overview/Reviews/Reviews";
import { Button, Select } from "@mantine/core";
import { FaEye, FaRegListAlt, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import Admin_Side_NavBar from "../Admin_Side_NavBar/Admin_Side_NavBar";

const List_of_Categories = () => {

  const [filter, setFilter] = useState()
  const courseFilter = (event) =>{
setFilter(event)
  }
  const filteredData = useMemo(() => {
      if (!filter) return listOfCategories;
      return listOfCategories.filter(category => category.status === filter);
    }, [filter]);
  const navigate = useNavigate();

  const columns = [
    {
      name: "Category Name",
      selector: (row) => row.name,
    },
    {
      name: "Number of Courses",
      selector: (row) => row.numberofCourses,
    },
    {
      name: "Number Students",
      selector: (row) => row.numberofStudents,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <span
          style={{
            backgroundColor: row.status === "Active" ? "green" : "red",
            color: "white",
            padding: "2px 8px",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          {row.status}
        </span>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex">
          <Button
            //   onClick={() => handleButtonClick(row)}
            variant="transparent"
            color="#1E5389"
            className="p-0"
            onClick={() => navigate("/category_creation")}
          >
            <FaEye />
          </Button>
          <Button
            //   onClick={() => handleButtonClick(row)}
            variant="transparent"
            className="p-0 ml-4"
            style={{ color: row.status === "Active" ? "red" : "green" }}
          >
            {row.status === "Active" ? "Disable" : "Enable"}
          </Button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#5A94D0",
        color: "white",
      },
    },
    rows: {
      style: {
        backgroundColor: "#E5F1FC",
      },
    },
  };

  return (
    <>
      <Student_Header />
      <Admin_Side_NavBar />
      <div className="absolute mt-20 ml-10">
        <div className="flex justify-center mx-auto w-[900px] bg-[#E5F1FC] pl-4 py-2 rounded-xl">
          <div className="flex">
            <FaRegListAlt className="size-20 mr-6" />{" "}
            <h1 className="font-bold text-2xl justify-center items-center my-auto">
              Categories
            </h1>
          </div>
          <div className="flex justify-end ml-auto mr-10">
      <Select
      label="Category"
      placeholder="Please Select"
        data={[
            "Active",
          "Inactive",
        ]}
        className="w-[200px]"
        onChange={courseFilter}
        />
    </div>
        </div>
    <div className="flex justify-end ml-auto mr-10 mt-4">
      <Button className="" onClick={() => navigate("/category_creation")}>
      <FaPlus className="mr-1"/> Add Category
      </Button>
    </div>
        <div className="w-[1100px] mx-14 rounded-xl mt-6 bg-[#E5F1FC] overflow-auto">
          <DataTable
            columns={columns}
            data={filteredData}
            fixedHeader
            pagination
            customStyles={customStyles}
            className="shadow-lg rounded-lg w-full"
          ></DataTable>
        </div>
      </div>
    </>
  );
};

export default List_of_Categories;

{
  /* <div>
    <table {...getTableProps()}>
            <thead>
            {headerGroups.map((headerGroup, index) => (
                    <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th key={index} {...column.getHeaderProps()}>
                                {column.render("Header")}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, index) => {
                    prepareRow(row)
                    return (
                        <tr key={index} {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                                <td key={index} {...cell.getCellProps()}>
                                    {cell.render("Cell")}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div> */
}
//     const data = useMemo(() => listOfCategories, []);
//     const columns = useMemo(() => [
// {
//     Header: "Category Name",
//     accessor: "name"
// },
// {
//     Header: "Number of Courses",
//     accessor: "numberofcourses"
// },
// {
//     Header: "Number of Students",
//     accessor: "numberofstudents"
// },
// {
//     Header: "Status",
//     accessor: "status"
// },

//     ], [])
//     const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data})
