import HeroSection from "../components/HeroSection";
import Navbar from "../components/navbar";
import EnterpriseSection from "../components/EnterpriseSection";
import Popular from "../components/Popular";
import Conditional from "../components/Conditional";
import Sale from "../components/Sale"

const Home = () => {
    return (
        <div className="bg-[#f5f7fa]">
         <Navbar/>
         <HeroSection/>
         {/* <EnterpriseSection/>  */}
         <Popular/>
         {/* <Sale/> */}
         {/* <Conditional/> */}
        </div>
    );
};
export default Home;