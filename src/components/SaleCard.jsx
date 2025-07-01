import React from "react";


const SaleCard = ({category, name, price, image}) => {
  return (
    <article >
        <div>
            <img
                src={image}
                alt="productPic"
            />
            </div>
            <div className="space-y-4">
            <span className="text-xs text-gray-500">{category}</span>
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-sm text-gray-700">{price}</p>

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
  );
};

export default SaleCard;