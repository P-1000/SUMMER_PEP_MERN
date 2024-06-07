import React from "react";

const categories = [
  { name: "Grocery", icon: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png" },
  { name: "Mobiles", icon: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png" },
  { name: "Fashion", icon: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png" },
  { name: "Electronics", icon: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png" },
  { name: "Home", icon: "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg" },
  { name: "Appliances", icon: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg" },
  { name: "Travel", icon: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png" },
  { name: "Beauty, Toys & More", icon: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png" },
  { name: "Two Wheelers", icon: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png" }
];

const Categories = () => {
  return (
   <div className="lg:px-7 px-2 mx-4 bg-white shadow">
     <div className="flex overflow-scroll justify-between lg:p-4 lg:px-4 px-2 gap-4 ">
      {categories.map((category) => (
        <div key={category.name} className="flex flex-col items-center text-gray-800 cursor-pointer hover:text-blue-600">
          <img src={category.icon} alt={category.name} className="h-16  mb-2" />
          <span className="lg:text-lg text-xs">{category.name}</span>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Categories;
