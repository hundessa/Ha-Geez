import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Category from "./Components/Category";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Popular_Courses from "./Components/Popular_Courses";
import Testimonials from "./Components/Testimonials";


const Home_Page = () => {
  return (
    <>
      <div className="w-full overflow-x-hidden pt-[64px]">
        <Header />
        <Banner />
        <Category />
        <div id="about-us-section">
          <AboutUs />
        </div>
        <Popular_Courses />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Home_Page;
