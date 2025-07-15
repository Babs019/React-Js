// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.error(err));
//   }, [id]);

//   if (!product) return <p className="p-4">Loading product...</p>;

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-40 h-40 object-contain mx-auto"
//       />
//       <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
//       <p className="mt-2 text-gray-600">{product.description}</p>
//       <p className="text-green-700 mt-4 text-xl">${product.price}</p>
//       <p className="mt-2 text-sm text-gray-500">Category: {product.category}</p>
//     </div>
//   );
// };

// export default ProductDetail;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <Spinner />;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-40 h-40 object-contain mx-auto"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="mt-2 text-gray-600 truncate">{product.description}</p>
      <p className="text-green-700 mt-4 text-xl">${product.price}</p>
      <p className="mt-2 text-sm text-gray-500">Category: {product.category}</p>
    </div>
  );
};

export default ProductDetail;


//to={`/product/${product.id}`} key={product.id}