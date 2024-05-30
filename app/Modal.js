import React from "react";
import ReactDom from "react-dom";
import useCart from "./(store)/store";

export default function Modal() {
  const closeModal = useCart((state) => state.setOpenModal);
  const cartIdems = useCart((state) => state.cart);

  return ReactDom.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen bg z-50">
      <div
        onClick={closeModal}
        className="bg-transparent absolute inset-0"
      ></div>
      <div
        className="flex bg-white absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 
     max-w-screen flex-col gap-4"
      >
        <div className="flex items-center p-6 justify-between text-xl relative">
          <h1>Cart</h1>
          <i
            onClick={closeModal}
            className=" cursor-pointer hover:opacity-60 fa-solid fa-xmark"
          ></i>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3"></div>
        </div>
        <div className="p-4 overflow-scroll flex-1 flex flex-col gap-4">
          {cartIdems.length === 0 ? (
            <p>There is noting in your cart😢</p>
          ) : (
            <>
              {cartIdems.map((cartItem, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex border-l border-solid px-4 border-slate-700 flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <h2>{cartItem.name}</h2>
                      <p>
                        {cartItem.cost / 100}
                        {cartItem.currency}
                      </p>
                    </div>
                    <p className="text-slate-600 text-sm">Quantity: 1</p>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="border m-4 p-6 grid place-items-center uppercase border-solid border-slate-700 text-xl hover:opacity-60 cursor-pointer">
          Checkout
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
