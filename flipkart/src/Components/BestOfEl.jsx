import React from "react";

const BestOfEl = () => {
  const cards = [
    { name: "Noise Smart", tag: "From ₹1,299", img: "/noise.jpg" },
    { name: "Best Truewireless", tag: "Grab now", img: "/nord.jpeg" },
    {
      name: "Best Selling Mobile..",
      tag: "From ₹499",
      img: "/speak.jpeg",
    },
    { name: "Monitor", tag: "From ₹2,299", img: "/monitor.jpeg" },
    {
      name: "Top Mirrorless Cameras",
      tag: "Up to 30% Off",
      img: "/camera.jpeg",
    },
  ];

  return (
    <div className="  w-full px-4 mt-2 flex items-start gap-4  overflow-hidden">
      <div className="flex-1 overflow-x-auto bg-white p-4">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Best of Electronics</h1>
        </div>
        <div className="flex gap-4 flex-nowrap">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col border p-4 gap-4 items-center rounded-md"
              style={{ minWidth: "200px", maxWidth: "300px" }}
            >
              <div style={{ height: "150px" }}>
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-full h-full object-cover rounded-md"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="mb-4 flex flex-col items-center">
                <h2 className="text-lg font-light">{card.name}</h2>
                <p className="text-xl font-semibold">{card.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[22rem] w-[18%]">
        <img
          src="/ban.png"
          alt="Side Banner"
          className="w-full h-full object-cover object-top shadow"
        />
      </div>
    </div>
  );
};

export default BestOfEl;
