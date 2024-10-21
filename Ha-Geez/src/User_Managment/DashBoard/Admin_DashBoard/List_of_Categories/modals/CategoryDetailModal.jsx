/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import { Button } from "@mantine/core";
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const CategoryDetailModal = ({ openmodal, setOpenmodal, category }) => {
  if (!openmodal || !category) return null;

  // Check if categoryImage is defined and is a valid URL
  const imageUrl = category.categoryImage || null;

  return ReactDOM.createPortal(
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.5)] z-50">
      <div className="bg-white p-8 ml-24 mt-24 w-full h-screen overflow-auto rounded-lg shadow-lg">
        <div className="flex justify-end">
          <Button
            variant="transparent"
            className="text-red-600 focus:text-red-500"
            onClick={() => setOpenmodal(false)}
          >
            <IoClose size={30} />
          </Button>
        </div>

        <div className="mt-4 mb-10">
          <h1 className="font-semibold text-xl mb-2">Category Detail</h1>

          <div className="mb-4">
            <h2 className="font-semibold">Category Name:</h2>
            <p>{category.categoryName}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Category Description:</h2>
            <p>{category.categoryDescription}</p>
          </div>

          {imageUrl ? (
            <div className="mb-4">
              <h2 className="font-semibold">Category Image:</h2>
              <img
                src={imageUrl} // Use Firebase image URL
                alt="Category"
                className="w-[300px] h-[300px] object-cover rounded-md"
              />
            </div>
          ) : (
            <div>
              <h2 className="font-semibold">Category Image:</h2>
              <p>No Image found</p>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CategoryDetailModal;
