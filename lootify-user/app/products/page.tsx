import React from "react";

const ProductList = () => {
  // Sample image
  const sampleImg =
    "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen">
      {/* <div className="w-screeen mb-3 text-black">Product List Page</div> */}
      <div className="flex flex-col items-center md:items-start p-6 m-3 space-y-5 md:flex-row md:space-x-10 border-2xl rounded-2xl shadow-2xl">
        <img
          src={sampleImg}
          alt="Product image"
          className="h-40 w-60 rounded-xl hover:scale-105 duration-200"
        />
        <div className="bg-white flex flex-col justify-center items-center inline-block  md:items-start">
          {/* Shpping text */}
          <div className="text-sm text-black bg-yellow-300 px-4 py-2 rounded-full text-center mb-4 inline-block">
            Free Shipping
          </div>

          {/* Product Name */}
          <div className="text-2xl font-semibold md:text-start text-center">
            VSounds NoirTune - Elegantly Dark Sound.
          </div>

          <div className="my-4 flex flex-col space-x-3 space-y-3 md:space-y-0 items-center justify-center md:flex-row ">
            {/* Product Price */}
            <div className="text-xs line-through text-zinc-300">$599.00</div>
            <div className="text-xl text-green-500 font-bold">$399.00</div>
          </div>

          {/* Validity message */}
          <div className="text-xs text-zinc-500 text-center font-light mb-4">
            This offer is valid till Feb 29 or as long as the stock lasts!
          </div>

          {/* Add to cart button */}
          <button className="w-full transition-all duration-150 bg-blue-700 border-b-blue-700 border-b-8 rounded-lg hover:border-t-0 hover:border-b-0 hover:border-t-0 hover:shadow-lg hover:border-b-blue-700">
            <div className="text-white duration-150 text-md-font-bold p-4 bg-blue-500 hover:bg-blue-700 rounded-lg">
              Add to Cart
            </div>
          </button>

          {/* Animated ping */}
          <div className="flex flex-row items-center justify-center group transition-all duration-150 mt-5 space-x-2">
            <div className="flex flex-row w-3 h-3 rounded-full bg-green-400 rounded-full group-hover:animate-ping"></div>
            <div className="text-xs font-medium text-black">
              50+ pcs in stock
            </div>
          </div>

          {/* Wishlist & buy now button */}
          <div className="flex md:flex-row justify-center items-center space-x-5 mt-5 transition-all ">
            <button className="group shadow-xl shadow-green-100 outline outline-1 outline-green-300 rounded-full px-5 py-3  hover:shadow-xl hover:bg-green-500 hover:text-white hover:scale-105 duration-200">
              <div className="text-black font-bold group-hover:text-white">
                Buy Now
              </div>
            </button>

            <button className="group shadow-xl shadow-red-100 outline outline-1 outline-red-300 rounded-full px-5 py-3  hover:shadow-xl hover:bg-red-500 hover:text-white hover:scale-105 duration-200">
              <div className="text-black font-bold group-hover:text-white">
                Add to Wishlist
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
