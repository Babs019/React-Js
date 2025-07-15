// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Navbar from "../components/navbar";

// const ProductPage = () => {
//     const [product, setProduct] = useState([]);
//     // const getProduct = async () => {
//     //     try{
//     //        const response =await fetch("https://fakestoreapi.com/products");
//     //        const data =await response.json();
//     //        console.log(data);
//     //     } catch (error) {
//     //         console.log("Error", error)
//     //     }
        
//     // };
//     // useEffect (() => {
//     //     getProduct();
//     // });
   
//     const getProduct = async () => {
//         try{
//             const response = await axios.get("https://fakestoreapi.com/products");
//             setProduct(response.data);
//         } catch(error){
//           console.log("Error", error);
//         }
//     };
//     useEffect(() => {
//         getProduct();
//     }, []);

//   return (
//     <section>
//         <Navbar />
//         {product.map((p,index) => (
//         <div key={index}>
//             <img src={p.image} alt={p.image}/>
//             <p>Title:{p.title}</p>
//             <p>Price:{p.price}</p>

//         </div>
//         ))};
        
//     </section>
    
//   );
// };

// export default ProductPage;


import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    getProduct();
  });

  return (
   <>
    <Navbar />
   <section className="py-10">
      <h1 className="text-center font-semibold text-5xl">Product List</h1>
    <div className="grid grid-cols-3 gap-4 mt-10">
      {products.map((product, index) => (
        <Link to={`/product/${product.id}`} key={product.id}>
        <div
          key={index}
          className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            className="w-full h-64 object-cover"
            src={product.image}
            alt={product.title}
          />
          <div className="p-4">
            <p className="text-xs text-gray-500 uppercase mb-2">
              {product.category}
            </p>
            <h2 className="text-lg font-semibold text-gray-800">
              {product.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {product.description}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold text-blue-600">
                ${product.price}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="text-sm text-gray-700">
                  {product.rating.rate}
                </span>
                <span className="text-xs text-gray-400">
                  ({product.rating.count})
                </span>
              </div>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
        </Link>
      ))}
    </div>
    </section>
    </>
  );
};

export default ProductPage;
