import Navbar from "../components/navbar";
// import HeroSection from "../components/HeroSection";
import EnterpriseSection from "../components/EnterpriseSection";
// import Popular from "../components/Popular";
import Conditional from "../components/Conditional";
import Sale from "../components/Sale"
import { lazy, Suspense, useEffect, useState, } from "react";
import Spinner from "../components/Spinner";
import Collection from "../components/Collection";



// const Dashboard = lazy(() => import("./Dashboard"));
// const HeroSection = lazy (
//     () => 
//        new Promise((resolve) => {
//         setTimeout(() => {
//             resolve (import("../components/HeroSection"));
//         }, 10000);
//        })
//     );
       
// const Popular = lazy (
//     () => 
//        new Promise((resolve) => {
//         setTimeout(() => {
//             resolve (import("../components/Popular"));
//         }, 10000);
//        })
//     );

const HeroSection = lazy(() => import("../components/HeroSection"));

const Popular = lazy(() => import("../components/Popular"));


const Home = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("count changes");  //Dependency array
    }, [count]);
 

 const ic = () => {
    setCount(count + 1);
 };

 const dc = () => {
    setCount(count -1);
 };


    return (
        <div className="bg-[#f5f7fa]">
         <Navbar/>

            <Suspense fallback={<Spinner />}>
                <HeroSection />
            </Suspense> 
          
         {/* <EnterpriseSection/>  */}

            <Suspense fallback={<Spinner />}>
                <Popular />
            </Suspense>
         
         <Collection />
         <Sale/>
         {/* <Conditional/> */}
         <button onClick={ic}>add</button>
         <span>{count}</span>
         <button onClick={dc}>minus</button>
        </div>
    );
};
export default Home;