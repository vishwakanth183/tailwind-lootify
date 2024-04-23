import React from "react";

const ImageGallery = () => {
  const hotelList = [
    {
      name: "Golden Oasis Hotel",
      rating: 4.5,
      description: "Luxurious accommodations with stunning views.",
      imageUrl:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Crystal Waters Resort",
      rating: 4.2,
      description: "Elegant rooms and cozy atmosphere.",
      imageUrl:
        "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Sunset Beach Retreat",
      rating: 4.7,
      description: "Inviting beachfront resort with breathtaking sunset views.",
      imageUrl:
        "https://images.pexels.com/photos/1058759/pexels-photo-1058759.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Royal Garden Inn",
      rating: 4.4,
      description: "Tranquil garden setting with modern amenities.",
      imageUrl:
        "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Silver Star Hotel",
      rating: 4.3,
      description: "Historic charm meets sophisticated elegance.",
      imageUrl:
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Emerald Bay Lodge",
      rating: 4.6,
      description: "Spacious rooms overlooking the emerald bay.",
      imageUrl:
        "https://images.pexels.com/photos/895555/pexels-photo-895555.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Paradise Cove Resort",
      rating: 4.8,
      description: "Spectacular resort nestled in paradise.",
      imageUrl:
        "https://images.pexels.com/photos/895555/pexels-photo-895555.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Ocean View Hotel",
      rating: 4.5,
      description: "Panoramic ocean views and comfortable accommodations.",
      imageUrl:
        "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Mountain Haven Inn",
      rating: 4.2,
      description: "Cozy lodge surrounded by scenic mountains.",
      imageUrl:
        "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Serenity Springs Lodge",
      rating: 4.7,
      description: "Serene retreat offering exquisite comfort.",
      imageUrl:
        "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="bg-cyan-100 flex items-center justify-center min-h-screen overflow:scroll pt-10 pb-10">
      {/* Card Container */}
      <div className="flex flex-col p-6 items-center md:items-end md:p-40 bg-white rounded-lg shadow-xl shadow-zinc-200">
        {/* Menu items */}
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row  shadow-green-200 md:space-x-12 ">
          {/* Navbutton1 */}
          <div className="group cursor-pointer">
            <div className="text-black text-center">Home</div>
            <div className="border-b-2 mx-2 mt-2 opacity-0 group-hover:opacity-100 border-zinc-200"></div>
          </div>

          {/* Navbutton2 */}
          <div className="group cursor-pointer">
            <div className="text-green-500 text-center">Hotels</div>
            <div className="border-b-2 mx-2 mt-2 opacity-1 group-hover:opacity-100 border-green-200"></div>
          </div>

          {/* Navbutton3 */}
          <div className="group cursor-pointer">
            <div className="text-black text-center">Dishes</div>
            <div className="border-b-2 mx-2 mt-2 opacity-0 group-hover:opacity-100 border-zinc-200"></div>
          </div>

          {/* Navbutton4 */}
          <div className="group cursor-pointer">
            <div className="text-black text-center">About us</div>
            <div className="border-b-2 mx-2 mt-2 opacity-0 group-hover:opacity-100 border-zinc-200"></div>
          </div>
        </div>

        {/* Search and upload button view */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-20 md:space-x-10">
          <div className="border-b">
            <input
              type="text"
              className="ml-6 md:w-80 border-none placeholder:font-thin rounded-lg px-4 py-2 focus:outline-none"
              placeholder="Search"
            />
          </div>
          <button className="px-4 py-2 mt-5 md:mt-0 bg-black text-white hover:scale-105 duration-150 rounded-md shadow-xl shadow-grey-200">
            Upload
          </button>
        </div>

        {/* Hotels list */}
        <div className="grid gap-8 md:grid-cols-3 mt-10 h-auto">
          {hotelList.map((hotelItem, index) => {
            return (
              <div
                key={index}
                className="relative group transition-all duration-150"
              >
                <img
                  src={hotelItem.imageUrl}
                  alt={hotelItem.name}
                  className="w-72 h-60 scale-100 opacity-100 group-hover:opacity-100 duration-150 rounded-lg"
                />
                <div className="absolute max-h-24 bg-black cursor-pointer opacity-0 group-hover:opacity-100 duration-150 bg-opacity-50 bottom-1 left-0 top-0 right-0 text-white flex flex-row justify-between align-center">
                  <div className="px-5 py-2">
                    <div className="text-white font-bold">{hotelItem.name}</div>
                    <div className="text-white text-xs font-light">
                      {hotelItem.description}
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
