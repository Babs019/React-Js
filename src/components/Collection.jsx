const Collection = () => {
    return (
        <section className="flex gap-6 px-32 py-10 ">
           <div className="text-center">
                <img 
                    className="h-[60%] w-full"
                    src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-02.jpg" 
                    alt="image"
                />
                <div>
                    <span className="text-xs">Men</span>
                    <h1 className="text-3xl font-semibold">
                     The base collection - Ideal every day.
                    </h1>
                    <button className="bg-black text-white px-5 py-2 m-2 text-sm hover:text-gray-400 transition-all duration-500">
                      Shop Now
                    </button>
                </div>
           </div>
           <div>
                <img
                src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-02.jpg"
                alt="image"
                />
            </div>
        </section>
  
 );   
};
export default Collection;