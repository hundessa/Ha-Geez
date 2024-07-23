/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import { Button } from "@mantine/core";
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const CategoryDetailModal = ({ openmodal, setOpenmodal, category }) => {
  if (!openmodal || !category) return null;

  const getCategoryImageUrl = () => {
    if (
      !category.categoryImage ||
      !category.categoryImage.data
    ) {
      return "";
    }

    const data = category.categoryImage.data;
    const bytes = new Uint8Array(data);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64Data = window.btoa(binary); // Use window.btoa to encode binary data to base64

    const imageUrl = `data:${category.categoryImage.contentType};base64,${base64Data}`;
    return imageUrl;
  };

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
          <h1 className="font-semibold text-xl mb-2">category Detail</h1>
          <div className="mb-4">
            <h2 className="font-semibold">Category Name:</h2>
            <p>{`${category.categoryName} `}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Category Description:</h2>
            <p>{category.categoryDescription}</p>
          </div>
          {category.categoryImage ? (
            <div className="mb-4">
              <h2 className="font-semibold"> Category Image:</h2>
              <img
                src={getCategoryImageUrl()} // Use function to get data URL
                alt="Category Image"
                // style={{ maxWidth: '100%' }}
                className="w-[300px] h-[300px]"
              />
            </div>
          ) : (
            <div>
              <h2 className="font-semibold"> Category Image:</h2>
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



// const CategoryDetailModal = ({ category }) => {
//   if (!category || !category.categoryImage) {
//     console.error("Category or category image data is missing");
//     return null;
//   }

//   const getCategoryImageUrl = () => {
//     if (!category.categoryImage.data || !category.categoryImage.contentType) {
//       console.error("Image data or content type is missing");
//       return "";
//     }

//     const data = category.categoryImage.data;
//     const contentType = category.categoryImage.contentType;
//     const bytes = new Uint8Array(data);
//     let binary = "";
//     for (let i = 0; i < bytes.byteLength; i++) {
//       binary += String.fromCharCode(bytes[i]);
//     }
//     const base64Data = window.btoa(binary);
//     const imageUrl = `data:${contentType};base64,${base64Data}`;
//     console.log('Image URL:', imageUrl); // Log the image URL
//     return imageUrl;
//   };

//   const imageUrl = getCategoryImageUrl();
//   console.log('Category:', category); // Log the category object

//   return (
//     <div>
//       <h1>{category.categoryName}</h1>
//       <p>{category.categoryDescription}</p>
//       {imageUrl && <img src={imageUrl} alt={category.categoryName} />}
//     </div>
//   );
// };

// export default CategoryDetailModal;

