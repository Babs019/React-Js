import React from "react"

const data = [
    {
      category: "men",
      name: "T-shirt Name 10",
      price: "$40,000",
    },
    {
      category: "women",
      name: "T-shirt Name 11",
      price: "$35,000",
    },
    {
      category: "men",
      name: "T-shirt Name 12",
      price: "$10,000",
    },
    {
      category: "kid",
      name: "T-shirt Name 13",
      price: "$400",
    },
  ];




const Popular = () => {


  return (
    <section className="h-[100vh] px-6 ">
        <div className="text-center space-y-4">
            <p className="text-gray-500">Summer Collection</p>
            <h1 className="text-4xl font-semibold">Popular T-Shirt</h1>
        </div>
        
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 ">
            {data.map((d, index) => (
                <article key={index}>
                   <div>
                    <img
                        src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-300x366.jpg"
                        alt="productPic"
                    />
                    </div>
                    <div className="space-y-4">
                    <span className="text-xs text-gray-500">{d.name}</span>
                    <p className="font-semibold text-lg">{d.category}</p>
                    <p className="text-sm text-gray-700">{d.price}</p>

                    <div>
                        <button className="ring-[1px] bg-black   ring-gray-400">
                        black
                        </button>
                        <button className="ring-[1px] bg-pink-100 text-pink-100  ring-gray-400">
                        pink
                        </button>
                            <button className="ring-[1px] bg-white text-white   ring-gray-400">
                        white
                        </button>
                    </div>
                        <div className="space-x-3">
                            <button className="p-2 border-[1px]">XS</button>
                            <button className="p-2 border-[1px]">S</button>
                            <button className="p-2 border-[1px]">M</button>
                            <button className="p-2 border-[1px]">L</button>
                            <button className="p-2 border-[1px]">XL</button>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </section>
  );
};

export default Popular;