// import { Button } from "@mantine/core";
// import about_us from "../../../assets/images/About_Us/charlesdeluvio-Lks7vei-eAg-unsplash.jpg";
// // import { useNavigate } from "react-router-dom";

// const AboutUs = () => {
//   // const navigate = useNavigate();

//   return (
//     <div className="flex mt-20">
//       <div className="m-auto items-center justify-center">
//         <div className="flex mt-10">
//           <h2 className="mx-auto font-bold text-3xl m-10">About Us</h2>
//         </div>

//         <div className="gap-20 sm:flex">
//           <img
//             src={about_us}
//             className="w-[350px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-xl mx-auto"
//           />

//           <div className="flex items-center">
//             <div>
//               <p className="w-[450px] text-align">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Aspernatur ducimus tenetur magni consectetur! Odit est, ratione
//                 corporis magnam itaque velit esse dolores eaque odio
//                 consequuntur, harum natus ex aliquam incidunt! <br /> <br />{" "}
//                 <br />
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Aspernatur ducimus tenetur magni consectetur! Odit est, ratione
//                 corporis magnam itaque velit esse dolores eaque odio
//                 consequuntur, harum natus ex
//                 <br /> <br /> <br />
//                 aliquam incidunt! Lorem ipsum dolor sit, amet consectetur
//                 adipisicing elit. Aspernatur ducimus tenetur magni consectetur!
//                 Odit est, ratione corporis magnam itaque velit esse dolores
//                 eaque odio consequuntur, harum natus ex aliquam incidunt!
//               </p>

//               <Button className="mt-10" variant="filled" color="#09335F">
//                 Read more
//               </Button>
//             </div>
//           </div>

//           {/* <img src={about_us} className="w-[350px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-xl" /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import { Button } from "@mantine/core";
import about_us from "../../../assets/images/About_Us/charlesdeluvio-Lks7vei-eAg-unsplash.jpg";

const AboutUs = () => {
  return (
    <div className="mt-40 px-4">
      <div className="text-center">
        <h2 className="font-bold text-3xl my-10">About Us</h2>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="flex-1">
          <p className="text-justify text-base leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            ducimus tenetur magni consectetur! Odit est, ratione corporis magnam
            itaque velit esse dolores eaque odio consequuntur, harum natus ex
            aliquam incidunt!
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            ducimus tenetur magni consectetur! Odit est, ratione corporis magnam
            itaque velit esse dolores eaque odio consequuntur, harum natus ex.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            ducimus tenetur magni consectetur! Odit est, ratione corporis magnam
            itaque velit esse dolores eaque odio consequuntur, harum natus ex
            aliquam incidunt!
          </p>

          <Button className="mt-6" variant="filled" color="#09335F">
            Read more
          </Button>
        </div>

        {/* Image */}
        <img
          src={about_us}
          alt="About us"
          // className="w-full max-w-md h-auto rounded-xl"
          className="w-[350px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-xl"
        />
      </div>
    </div>
  );
};

export default AboutUs;
