import React, { useContext, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const Offers = () => {
  const { state, dispatch } = useContext(Context);
  const [addFood, setAddFood] = useState([]);
  const [showCart, setShowCart] = useState(true);
  let initialCounters = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [quantity, setQuantity] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = quantity.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setQuantity(nextCounters);
  }

  console.log(quantity);
  const navigate = useNavigate();

  console.log(addFood);
  return (
    <div className="w-screen h-screen ">
      <div
        style={{ fontFamily: "inherit" }}
        className="w-[980px] bg-zinc-900 mx-auto"
      >
        <nav className="bg-zinc-900 border-b-2 border-orange-500 m-3 ">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <p
                      className=" text-white hover:text-orange-500 cursor-pointer px-3 py-2 rounded-md"
                      aria-current="page"
                    >
                      COMBO
                    </p>
                    <p className="text-white hover:text-orange-500 cursor-pointer  px-3 py-2 rounded-md ">
                      PIZZA
                    </p>

                    <p className="text-white hover:text-orange-500 cursor-pointer px-3 py-2 rounded-md ">
                      NACHOS
                    </p>

                    <p className="text-white hover:text-orange-500 cursor-pointer  px-3 py-2 rounded-md">
                      POPCORN
                    </p>

                    <p className="text-white hover:text-orange-500  cursor-pointer px-3 py-2 rounded-md">
                      PEPSI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className=" mx-auto  grid grid-cols-4 gap-6 mt-8 w-[980px] mb-8">
          <div className="w-[220px] h-[250px] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="product">
              <img
                style={{ height: "160px", objectFit: "cover" }}
                className=" lazy rounded-t-lg"
                src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120790.jpg"
                alt=""
              />
            </div>

            <div className=" flex flex-col">
              <h5 className=" w-full text-center font-bold text-[14px] dark:text-white">
                2x Pepsi 0.5l + <br /> Popcorn(L)
              </h5>

              <div className="flex items-center justify-around mt-1">
                <span className="text-[16px] font-bold text-gray-900 dark:text-white">
                  $ 8.99
                </span>
                <button
                  onClick={() => {
                    setShowCart(false);

                    addFood.includes(
                      "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120790.jpg"
                    )
                      ? handleIncrementClick(0)
                      : setAddFood([
                          ...addFood,
                          "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120790.jpg",
                        ]);

                    dispatch({ type: "OFFERS", offerprice: 8.99 });
                  }}
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[14px] p-2 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-oramge-700"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="w-[220px] h-[250px] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="product">
              <img
                style={{ height: "160px", objectFit: "cover" }}
                className=" rounded-t-lg"
                src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00117541.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h5 className="w-full text-center font-bold text-[14px] dark:text-white">
                Pepsi 0.3l + <br /> Popcorn(S)
              </h5>
              <div className="flex items-center justify-around mt-1">
                <span className="text-[16px] font-bold text-gray-900 dark:text-white">
                  $ 4.99
                </span>
                <button
                  onClick={() => {
                    setShowCart(false);

                    addFood.includes(
                      "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00117541.jpg"
                    )
                      ? handleIncrementClick(1)
                      : setAddFood([
                          ...addFood,
                          "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00117541.jpg",
                        ]);
                    dispatch({ type: "OFFERS", offerprice: 4.99 });
                  }}
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[14px] p-2 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-oramge-700"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="w-[220px] h-[250px] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="product">
              <img
                style={{ height: "160px", objectFit: "cover" }}
                className=" rounded-t-lg"
                src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00117542.jpg"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <h5 className="w-full text-center font-bold text-[14px] dark:text-white">
                Pepsi 0.5l + <br /> Popcorn(L)
              </h5>

              <div className="flex items-center justify-around mt-1">
                <span className="text-[16px] font-bold text-gray-900 dark:text-white">
                  $ 5.90
                </span>
                <button
                  onClick={() => {
                    setShowCart(false);
                    addFood.includes(
                      "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00117542.jpg"
                    )
                      ? handleIncrementClick(2)
                      : setAddFood([
                          ...addFood,
                          "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00117542.jpg",
                        ]);
                    dispatch({ type: "OFFERS", offerprice: 5.99 });
                  }}
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[14px] p-2 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-oramge-700"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="w-[220px] h-[250px] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="product">
              <img
                style={{ height: "160px", objectFit: "cover" }}
                className=" rounded-t-lg"
                src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120792.jpg"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <h5 className="w-full text-center font-bold text-[14px] dark:text-white">
                2x Pepsi 0.5l + <br /> Caramel Popcorn
              </h5>

              <div className="flex items-center justify-around mt-1">
                <span className="text-[16px] font-bold text-gray-900 dark:text-white">
                  $ 12.99
                </span>
                <button
                  onClick={() => {
                    setShowCart(false);
                    addFood.includes(
                      "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120792.jpg"
                    )
                      ? handleIncrementClick(3)
                      : setAddFood([
                          ...addFood,
                          "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120792.jpg",
                        ]);
                    dispatch({ type: "OFFERS", offerprice: 12.99 });
                  }}
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[14px] p-2 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-oramge-700"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="w-[220px] h-[250px] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="product">
              <img
                style={{ height: "160px", objectFit: "cover" }}
                className=" rounded-t-lg"
                src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00118469.jpg"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <h5 className="w-full text-center font-bold text-[14px] dark:text-white">
                1x Pepsi 0.5l + <br />
                Caramel Popcorn
              </h5>

              <div className="flex items-center justify-around mt-1">
                <span className="text-[16px] font-bold text-gray-900 dark:text-white">
                  $ 7.50
                </span>
                <button
                  onClick={() => {
                    setShowCart(false);
                    addFood.includes(
                      "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00118469.jpg"
                    )
                      ? handleIncrementClick(4)
                      : setAddFood([
                          ...addFood,
                          "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00118469.jpg",
                        ]);
                    dispatch({ type: "OFFERS", offerprice: 7.5 });
                  }}
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[14px] p-2 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-oramge-700"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="w-[220px] h-[250px] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="product">
              <img
                style={{ height: "160px", objectFit: "cover" }}
                className=" rounded-t-lg"
                src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00118470.jpg"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <h5 className=" w-full text-center font-bold text-[14px] dark:text-white">
                Pepsi 0.5l + <br />
                Cheese Popcorn (L)
              </h5>

              <div className="flex items-center justify-around mt-1">
                <span className="text-[16px] font-bold text-gray-900 dark:text-white">
                  $ 6.99
                </span>
                <button
                  onClick={() => {
                    setShowCart(false);
                    addFood.includes(
                      "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00118470.jpg"
                    )
                      ? handleIncrementClick(5)
                      : setAddFood([
                          ...addFood,
                          "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00118470.jpg",
                        ]);
                    dispatch({ type: "OFFERS", offerprice: 6.99 });
                  }}
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[14px] p-2 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-oramge-700"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="w-[220px] h-[250px] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="product">
              <img
                style={{ height: "160px", objectFit: "cover" }}
                className=" rounded-t-lg"
                src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00109469.jpg"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <h5 className=" w-full text-center font-bold text-[14px] dark:text-white">
                1x Pepsi 0.5l + <br />
                Tacco Chips
              </h5>

              <div className="flex items-center justify-around mt-1">
                <span className="text-[16px] font-bold text-gray-900 dark:text-white">
                  $ 8.99
                </span>
                <button
                  onClick={() => {
                    setShowCart(false);
                    addFood.includes(
                      "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00109469.jpg"
                    )
                      ? handleIncrementClick(6)
                      : setAddFood([
                          ...addFood,
                          "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00109469.jpg",
                        ]);
                    dispatch({ type: "OFFERS", offerprice: 8.99 });
                  }}
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[14px] p-2 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-oramge-700"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[220px] h-[250px] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="product">
              <img
                style={{ height: "160px", objectFit: "cover" }}
                className=" rounded-t-lg "
                src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00105842.jpg"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <h5 className="w-full text-center font-bold text-[14px] dark:text-white">
                Chicken Samosa with <br />
                Chili Sauce
              </h5>

              <div className="flex items-center justify-around mt-1">
                <span className="text-[16px] font-bold text-gray-900 dark:text-white">
                  $ 10.50
                </span>
                <button
                  onClick={() => {
                    setShowCart(false);
                    addFood.includes(
                      "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00105842.jpg"
                    )
                      ? handleIncrementClick(7)
                      : setAddFood([
                          ...addFood,
                          "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00105842.jpg",
                        ]);
                    dispatch({ type: "OFFERS", offerprice: 10.5 });
                  }}
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[14px] p-2 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-oramge-700"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="w-[220px] h-[250px] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="product">
              <img
                style={{ height: "160px", objectFit: "cover" }}
                className=" rounded-t-lg"
                src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120840.jpg"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <h5 className="w-full text-center font-bold text-[14px] dark:text-white">
                TK Garden +<br /> Vegetarian Pizza
              </h5>

              <div className="flex items-center justify-around mt-1">
                <span className="text-[16px] font-bold text-gray-900 dark:text-white">
                  $ 6.10
                </span>
                <button
                  onClick={() => {
                    setShowCart(false);
                    addFood.includes(
                      "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120840.jpg"
                    )
                      ? handleIncrementClick(8)
                      : setAddFood([
                          ...addFood,
                          "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00120840.jpg",
                        ]);
                    dispatch({ type: "OFFERS", offerprice: 6.1 });
                  }}
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[14px] p-2 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-oramge-700"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="w-[220px] h-[250px] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="product">
              <img
                style={{ height: "160px", objectFit: "cover" }}
                className=" rounded-t-lg"
                src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00112367.jpg"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <h5 className="w-full text-center font-bold text-[14px] dark:text-white">
                TK Margherita +<br />
                Pizza
              </h5>

              <div className="flex items-center justify-around mt-1">
                <span className="text-[16px] font-bold text-gray-900 dark:text-white">
                  $ 6.10
                </span>
                <button
                  onClick={() => {
                    addFood.includes(
                      "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00112367.jpg"
                    )
                      ? handleIncrementClick(9)
                      : setShowCart(false);
                    setAddFood([
                      ...addFood,
                      "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00112367.jpg",
                    ]);
                    dispatch({ type: "OFFERS", offerprice: 6.1 });
                  }}
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[14px] p-2 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-oramge-700"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="w-[220px] h-[250px] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="product">
              <img
                style={{ height: "160px", objectFit: "cover" }}
                className=" rounded-t-lg"
                src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00119936.jpg"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <h5 className="w-full text-center font-bold text-[14px] dark:text-white">
                Spicy Chicken
                <br />
                extra spicy
              </h5>

              <div className="flex items-center justify-around mt-1">
                <span className="text-[16px] font-bold text-gray-900 dark:text-white">
                  $ 6.50
                </span>
                <button
                  onClick={() => {
                    setShowCart(false);
                    addFood.includes(
                      "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00119936.jpg"
                    )
                      ? handleIncrementClick(10)
                      : setAddFood([
                          ...addFood,
                          "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00119936.jpg",
                        ]);
                    dispatch({ type: "OFFERS", offerprice: 6.5 });
                  }}
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[14px] p-2 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-oramge-700"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="w-[220px] h-[250px] bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="product">
              <img
                style={{ height: "160px", objectFit: "cover" }}
                className=" rounded-t-lg"
                src="https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00105852.jpg"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <h5 className="w-full text-center font-bold text-[14px] dark:text-white">
                French Fries +<br /> (Large)
              </h5>
              <div className="flex items-center justify-around mt-1">
                <span className="text-[16px] font-bold text-gray-900 dark:text-white">
                  $ 4.25
                </span>
                <button
                  onClick={() => {
                    setShowCart(false);
                    addFood.includes(
                      "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00105852.jpg"
                    )
                      ? handleIncrementClick(11)
                      : setAddFood([
                          ...addFood,
                          "https://originserver-static1-uat.pvrcinemas.com/newweb/fnb/HO00105852.jpg",
                        ]);
                    dispatch({ type: "OFFERS", offerprice: 4.25 });
                  }}
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[14px] p-2 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-oramge-700"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {showCart ? (
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="bg-orange-500 p-2 mt-50 text-white rounded-xl "
          >
            Go Back
          </button>
        ) : (
          <div className="w-full h-[80px]  bg-orange-500 text-white px-20">
            <div className=" flex justify-between px-5 items-center ">
              <MdArrowBack
                style={{
                  fontSize: "30px",
                  background: "rgb(51 65 85)",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(-1);
                }}
              />
              <div className="w-[750px] flex justify-between item-center">
                <div className=" flex">
                  {addFood.map((item, i) => (
                    <div className="flex">
                      <img
                        className="rounded-full w-[70px] h-[70px] mt-1"
                        src={item}
                        alt=""
                      />
                      <p className="bg-zinc-900 relative right-4 text-center text-[12px] w-[20px] h-[20px] rounded-full font-bold">
                        {quantity[i]}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  style={{ fontFamily: "inherit" }}
                  className=" text-white font-bold flex items-center"
                >
                  <p className="font-bold text-[26px] flex items-center">
                    <span className="text-[18px]">TOTAL: </span> ${" "}
                    {state?.foodpriceArray
                      ?.reduce((acc, curr) => (acc += curr), 0)
                      .toFixed(2)}
                  </p>
                </div>
              </div>
              <MdArrowForward
                style={{
                  fontSize: "30px",
                  background: "rgb(51 65 85)",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/confirmation")}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Offers;
