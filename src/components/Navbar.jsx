// const Navbar = () => {}
import { useEffect, useState } from "react";
import Logo from "../assets/pngwing.com.png";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import { LiaTimesSolid } from "react-icons/lia";



const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [mobilenav,setMobilenav] = useState(false);


  useEffect(() => {
    Aos.init();
  }, []);


  const handleLogin = () => {
    setLogin(true);
  };

  const toggleNavbar = () => {
    setMobilenav(!mobilenav);
  };

  return  (
  <>
    <nav className="flex justify-between px-10 py-4 shadow">
        <div className="flex gap-6 items-center font-bold">
          <img className=" w-40" src={Logo} alt=""/>
           <ul className="lg:flex gap-10 hidden">
            <li className="hover:text-blue-500 cursor-pointer">Product</li>
            <li className="hover:text-blue-500 cursor-pointer">Pricing</li>
            <li className="hover:text-blue-500 cursor-pointer">Resources</li>
            <li className="hover:text-blue-500 cursor-pointer">Book a demo</li>
           </ul>
           
        </div>
        <div className="flex gap-6 font-bold items-center">
        {login ? (
         <span>Hello User</span> 
        ) : (
          <button 
           onClick={handleLogin}
           className="border-2 border-gray-600 px-3 py-1 rounded-xl hover:border-blue-500 hover:text-[#00A2FF] lg:flex hidden">
            Log in
          </button>
          )} 
           <button className="lg:block hidden border-2 border-blue-500 px-3 py-1 rounded-xl bg-[#00A2FF] text-white  hover:bg-white hover:text-[#00A2FF] cursor-pointer">
            Signup free
          </button>
         { mobilenav ? (
          <LiaTimesSolid 
            className="lg:hidden block text-3xl z-50" 
            onClick={toggleNavbar}
          /> 
         ) : (
          <IoIosMenu 
            onClick={toggleNavbar} 
            className="lg:hidden block text-3xl z-50" />
          )}
        </div>
    </nav>



   { mobilenav && (
    <aside  
          className="flex flex-col gap-4 px-4 py-12 bg-white shadow-lg w-[70%] h-[100vh] absolute right-0 top-0" 
          data-aos= "fade-left"
          data-aos-duration="1000"
        >
      <ul className="space-y-6  ">
        <li className="hover:text-blue-500 cursor-pointer">Product</li>
        <li className="hover:text-blue-500 cursor-pointer">Pricing</li>
        <li className="hover:text-blue-500 cursor-pointer">Resources</li>
        <li className="hover:text-blue-500 cursor-pointer">Book a demo</li>
      </ul>
          <button 
           onClick={handleLogin}
           className="border-2 border-gray-600 px-3 py-1 rounded-xl hover:border-blue-500 hover:text-[#00A2FF] ">
            Log in
          </button>
          <button className=" border-2 border-blue-500 px-3 py-1 rounded-xl bg-[#00A2FF] text-white  hover:bg-white hover:text-[#00A2FF] cursor-pointer">
            Signup free
          </button>
    </aside>
    )}
  </>
    // <nav className="border-b border-gray-200 bg-white text-gray-800">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16 relative">

    //       {/* Left Navigation */}
    //       <div className="flex space-x-6">
    //         <a href="#" className="hover:underline text-gray-500 text-sm font-small">BUY T-SHIRTS</a>
    //         <a href="#" className="hover:underline text-black text-sm font-small">WOMEN</a>
    //         <a href="#" className="hover:underline text-black text-sm font-small">MEN</a>
    //         <a href="#" className="hover:underline text-black text-sm font-small">ABOUT</a>
    //         <a href="#" className="hover:underline  text-black text-sm font-small">CONTACT</a>
    //       </div>

    //       {/* Center logo */}
    //       <div className="absolute left-1/2 transform -translate-x-1/2">
    //         <span className="text-xl font-bold tracking-widest uppercase">T-Shirts</span>
    //       </div>

    //       {/* Right Icons */}
    //       <div className="flex items-center gap-12">
    //         <button className=" text-black  hover:text-black">
    //          <FaSearch />
    //         </button>
    //         <a href="#" className="flex items-center text-sm font-medium gap-3">
    //           <span className="mr-1 font-bold "> $0.00</span>
    //           <FaShoppingBasket />
    //         </a>
    //         <a href="#" className="hover:underline text-sm font-medium">LOG IN</a>
    //       </div>

    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
