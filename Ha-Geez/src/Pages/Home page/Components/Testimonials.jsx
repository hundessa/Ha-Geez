// import { Button } from '@mantine/core';
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiStar } from "react-icons/ci";

const data = [ {
 name: 'Lidiya Fissha' ,
photo:'src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg',
title: 'Datascientist',
rating: <FaStar /> ,
rating2: <CiStar />,
description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiaseos nostrum beatae nemo non adipisci aperiam exercitationem quamrecusandae cum amet earum porro harum ad, maiores dolore veritatisplaceat corporis.",
},
{
  name: 'Lidiya Fissha' ,
 photo:'src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg',
 title: 'Datascientist',
 rating: <FaStar />,
 rating2: <CiStar />,
 description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiaseos nostrum beatae nemo non adipisci aperiam exercitationem quamrecusandae cum amet earum porro harum ad, maiores dolore veritatisplaceat corporis.",
 },
{
  name: 'Lidiya Fissha' ,
 photo:'src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg',
 title: 'Datascientist',
 rating: <FaStar />,
 rating2: <CiStar />,
 description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiaseos nostrum beatae nemo non adipisci aperiam exercitationem quamrecusandae cum amet earum porro harum ad, maiores dolore veritatisplaceat corporis.",
 
 },
 {
  name: 'Lidiya Fissha' ,
 photo:'src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg',
 title: 'Datascientist',
 rating: <FaStar />,
 rating2: <CiStar />,
 description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiaseos nostrum beatae nemo non adipisci aperiam exercitationem quamrecusandae cum amet earum porro harum ad, maiores dolore veritatisplaceat corporis.",
 
 },

]

const testimonials = () => {
const settings={
  dots:true,
  infinite: true,
  speed:500,
  slidesToShow:3,
slidesToScroll: 1
}

  return (
    
     
    <div className=" w-3/4 m-auto ">
      <div className="">
         <h1 className=" mx-auto font-bold text-3xl m-20">
         What Our Students Say About Us
         </h1>
       </div>
       <div className="flex mx-auto w-[600px] ">
      </div> 
      <div className="">
        <Slider {...settings}>

        {data.map((d) =>(
          // eslint-disable-next-line react/jsx-key
          <div className=" h-[750px]">
            <div className='h-96 bg-blue-500 '>
          
                <div className='flex'>
              <img src={d.photo}alt=""  className='h-20 w-20 rounded-full ml-1 mt-6'/>  
                <div className='mt-10 ml-3'>
                  <p className='text-xl font-bold fontsize-40'>{d.name} </p>
                  <p className='ml-3'>{d.title}</p>
                </div>
            
                  </div>

                <div className='mt-4'>
                  <div className='flex'>
                      <p className='ml-3'>{d.rating}</p>
                  <p className='ml-3'>{d.rating}</p>
                  <p className='ml-3'>{d.rating}</p>
                  <p className='ml-3'>{d.rating}</p>
                  <p className='ml-3 '>{d.rating2}</p>
                  </div>
                

          <p className='ml-5 w-[250px]'>{d.description}</p>
                </div>
                    </div>
                  </div>
                    
                  ))}
        </Slider>
</div>
</div>
      

  )
}

export default testimonials;
