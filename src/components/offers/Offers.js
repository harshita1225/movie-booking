import React, { useState } from "react";

const Offers = () => {
  const [addFood, setAddFood] = useState([]);
  console.log(addFood);
  return (
    <div className="bg-black">
      <nav className="bg-black border-b-2 border-orange-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className=" text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
                    aria-current="page"
                  >
                    COMBO
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-orange-500  px-3 py-2 rounded-md text-base font-medium"
                  >
                    PIZZA
                  </a>

                  <a
                    href="#"
                    className="text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
                  >
                    NACHOS
                  </a>

                  <a
                    href="#"
                    className="text-white hover:text-orange-500  px-3 py-2 rounded-md text-base font-medium"
                  >
                    POPCORN
                  </a>

                  <a
                    href="#"
                    className="text-white hover:text-orange-500  px-3 py-2 rounded-md text-base font-medium"
                  >
                    PEPSI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-5 gap-6 mt-8 mx-4 mb-8">
        <div className=" w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="product">
            <img
              style={{ height: "226px" }}
              className=" lazy rounded-t-lg"
              src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120790.jpg"
              alt="product image"
            />
          </div>

          <div className=" px-10 pb-5 bg-slate-100 pt-5">
            <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              2x Pepsi 0,5l Popcorn, large
            </h5>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                7,90 €
              </span>
              <button
                onClick={() =>
                  setAddFood([
                    ...addFood,
                    "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120790.jpg",
                  ])
                }
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              style={{ height: "226px" }}
              className=" rounded-t-lg"
              src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00117541.jpg"
              alt="product image"
            />
          </a>
          <div className="px-10 pb-5 bg-slate-100 pt-5">
            <a href="#">
              <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Pepsi 0,3l <br />
                Popcorn, small
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                4,80 €
              </span>
              <button
                onClick={() =>
                  setAddFood([
                    ...addFood,
                    "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00117541.jpg",
                  ])
                }
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              style={{ height: "226px" }}
              className=" rounded-t-lg"
              src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00117542.jpg"
              alt="product image"
            />
          </a>
          <div class="px-10 pb-5 bg-slate-100 pt-5">
            <a href="#">
              <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                1x Pepsi 0,5l <br />
                Popcorn, large
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                5,90 €
              </span>
              <button
                onClick={() =>
                  setAddFood([
                    ...addFood,
                    "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00117542.jpg",
                  ])
                }
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              style={{ height: "226px" }}
              className=" rounded-t-lg"
              src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120792.jpg"
              alt="product image"
            />
          </a>
          <div class="px-10 pb-5 bg-slate-100 pt-5">
            <a href="#">
              <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                2x Pepsi 0,5l Caramel Popcorn
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                7,90 €
              </span>
              <button
                onClick={() =>
                  setAddFood([
                    ...addFood,
                    "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120792.jpg",
                  ])
                }
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              style={{ height: "226px" }}
              className=" rounded-t-lg"
              src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00118469.jpg"
              alt="product image"
            />
          </a>
          <div class="px-10 pb-5 bg-slate-100 pt-5">
            <a href="#">
              <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                1x Pepsi 0,5l Caramel Popcorn
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                6,90 €
              </span>
              <button
                onClick={() =>
                  setAddFood([
                    ...addFood,
                    "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00118469.jpg",
                  ])
                }
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              style={{ height: "226px" }}
              className=" rounded-t-lg"
              src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00118470.jpg"
              alt="product image"
            />
          </a>
          <div class="px-10 pb-5 bg-slate-100 pt-5">
            <a href="#">
              <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Pepsi 0,5l <br />
                Cheese Popcorn
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                6,90 €
              </span>
              <button
                onClick={() =>
                  setAddFood([
                    ...addFood,
                    "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00118470.jpg",
                  ])
                }
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              style={{ height: "226px" }}
              className=" rounded-t-lg"
              src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00109469.jpg"
              alt="product image"
            />
          </a>
          <div class="px-10 pb-5 bg-slate-100 pt-5">
            <a href="#">
              <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                1x Pepsi 0,5l <br />
                Tacco Chips
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                7,30 €
              </span>
              <button
                onClick={() =>
                  setAddFood([
                    ...addFood,
                    "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00109469.jpg",
                  ])
                }
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              style={{ height: "226px" }}
              className=" rounded-t-lg "
              src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00105842.jpg"
              alt="product image"
            />
          </a>
          <div class="px-10 pb-5 bg-slate-100 pt-5">
            <a href="#">
              <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Chicken Samosa with Chili Sauce
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                6,70 €
              </span>
              <button
                onClick={() =>
                  setAddFood([
                    ...addFood,
                    "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00105842.jpg",
                  ])
                }
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              style={{ height: "226px" }}
              className=" rounded-t-lg"
              src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120840.jpg"
              alt="product image"
            />
          </a>
          <div class="px-10 pb-5 bg-slate-100 pt-5">
            <a href="#">
              <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                TK Garden Vegetarian Pizza
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                6,10 €
              </span>
              <button
                onClick={() =>
                  setAddFood([
                    ...addFood,
                    "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120840.jpg",
                  ])
                }
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              style={{ height: "226px" }}
              className=" rounded-t-lg"
              src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00112367.jpg"
              alt="product image"
            />
          </a>
          <div class="px-10 pb-5 bg-slate-100 pt-5">
            <a href="#">
              <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                TK Margherita VegetarianPizza
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                6,10 €
              </span>
              <button
                onClick={() =>
                  setAddFood([
                    ...addFood,
                    "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00112367.jpg",
                  ])
                }
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] border-2">
        <div className="grid grid-cols-12 border-2 border-orange-500 bg-black h-[85px] ">
          {addFood.map((item, i) => (
            <img className="rounded-full w-[70px] h-[70px] mt-1" src={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
