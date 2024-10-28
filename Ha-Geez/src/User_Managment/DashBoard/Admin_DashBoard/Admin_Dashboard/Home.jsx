import 
{ BsBook, BsPeopleFill, BsFillPeopleFill, BsFillPersonPlusFill}
 from 'react-icons/bs'
 
 import 
{ BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Legend, ResponsiveContainer } 
from 'recharts';
import { useUser} from "../../../../Context/AuthContext"

function Home() {
const { user } = useUser();
    const data = [
        {
          name: 'Coding',
          // uv: 4000,
          value: 2400,
          // amt: 2400,
        },
        {
          name: 'Business',
          // uv: 3000,
         value: 1398,
          // amt: 2210,
        },
        {
          name: 'Marketing',
          // uv: 2000,
          value: 9800,
          // amt: 2290,
        },
        {
          name: 'Design',
          // uv: 2780,
          value: 3908,
          // amt: 2000,
        },
        {
          name: 'Finance',
          // uv: 2390,
          value: 3800,
          // amt: 2500,
        },
      
      ];
    // const data = [
    //   { name: 'Group A', value: 400 },
    //   { name: 'Group B', value: 300 },
    //   { name: 'Group C', value: 300 },
    //   { name: 'Group D', value: 200 },
    // ];

  return (
    <main className='main-container'>
      
        <div className="p-2 mx-52 h-[100px] text-black bg-[#A2CBF5] rounded-[10px] flex mt-10 w-[700px]">
          <div className=" ml-20 ">
            <h1 className="text-2xl font-bold"> Welcome Back, {user?.firstname}</h1>
            <p>
            Track your activity, progress and update from here
            </p>
          </div>
        </div>
        <div className='main-cards'>
            <div className='ml-10 card'>
                <div className=' card-inner'>
                    <h3>Courses</h3>
                    <BsBook className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Students</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Instructors</h3>
                    <BsFillPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>New Enrolled</h3>
                    <BsFillPersonPlusFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>


 <h1 className="font-bold bg-[#F2F8FF] text-black rounded-lg drop-shadow-xl w-[300px] h-[50px] flex items-center justify-center ml-[900px]">Students Enrolled in Category</h1>
 <div className='ml-10 charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
                {/* <Bar dataKey="" fill="" /> */}
                </BarChart>
            </ResponsiveContainer>

          

            <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

</div>
       


{/* 
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="number_of_students" stroke="#8884d8" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                {/* </LineChart>


            // </ResponsiveContainer> */} */

      

    </main>
  )
}

export default Home