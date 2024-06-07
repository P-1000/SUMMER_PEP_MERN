import React from "react";

const Grid = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-3 w-full p-4 h-[93vh]">
      <div className="flex flex-col w-full lg:w-1/3 ">
        <div className="bg-white p-2 ">
          <div>
            <h1 className="text-xl font-bold">Suggestions for you</h1>
          </div>
        </div>
        <div className="flex ">
          <div className="bg-white mt-2 mx-1  items-center align-middle">
            <img src="/air1.jpeg" alt="top" className="mt-[9rem] px-2 hover:scale-105 mb-2" />
            <div className="text-xs text-gray-500 text-center">
              <p>Apple AirPods</p>
              <p>
                Original Price: <del>₹15,000</del>
              </p>
              <p className="text-green-500">Discounted Price: ₹12,000</p>
              <p className="text-green-500">EMI: ₹2,000/month</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <div className="bg-white p-2 my-2 items-center">
                <img src="/air2.jpeg"
                className="w-[80%] mb-2 hover:scale-105 align-middle items-center mx-5"
                 alt="top" />
                <div className="text-xs text-gray-500 items-center text-center">
                  <p>Apple AirPods</p>
                  <p>
                    Original Price: <del>₹15,000</del>
                  </p>
                  <p className="text-green-500">Discounted Price: ₹12,000</p>
                  <p className="text-green-500">EMI: ₹2,000/month</p>
                </div>
              </div>
            </div>
            <div className="bg-white  p-2">
              <img src="/air1.jpeg" alt="top" className="w-[80%] mx-5 hover:scale-105 mb-2" />
              <div className="text-xs text-gray-500">
                <p>Apple AirPods</p>
                <p>
                  Original Price: <del>₹15,000</del>
                </p>
                <p className="text-green-500">Discounted Price: ₹12,000</p>
                <p className="text-green-500">EMI: ₹2,000/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 relative">
        <div className="absolute inset-0  overflow-hidden rounded-md">
          <img
            src="/top.jpg"
            alt="side banner"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
