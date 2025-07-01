import React from "react";
import SaleCard from "./SaleCard";
import Button from "./Button";

const Sale = () => {
  return ( 
    <section className="h-[100vh] px-6 ">
        <div className="text-center space-y-4">
            <p className="text-gray-500">Summer Collection</p>
            <h1 className="text-4xl font-semibold">On Sale T-Shirts</h1>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 ">
         <SaleCard category="Men" name="Jean" price="$12,000" image="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-300x366.jpg"/>
         <SaleCard category="Women" name="Shirt" price="$22,000" image="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-a-300x366.jpg"/>
         <SaleCard category="Men" name="Jean" price="$12,000" image="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-03-a-300x366.jpg" />
         <SaleCard category="Women" name="Shirt" price="$22,000" image="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a-300x366.jpg"/>
        </div>
        {/* <Button body="Start 30-day FREE trail"/> */}
    </section>
  ); 
};

export default Sale;