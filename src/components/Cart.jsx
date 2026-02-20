import React from "react";

const Cart = ({ cartItems, onRemove, onConfirm }) => {
  const totalItemCount = Object.values(cartItems).reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  const totalPrice = Object.values(cartItems).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="bg-white p-6 rounded-xl h-fit">
      <h2 className="text-custom-red text-2xl font-bold mb-6">
        Your Cart ({totalItemCount})
      </h2>

      {totalItemCount === 0 ? (
        <div className="flex flex-col items-center py-10">
          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt="Empty Cart"
            className="w-32 mb-4"
          />
          <p className="text-rose-500 font-semibold">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <>
          <div className="divide-y divide-rose-100">
            {Object.entries(cartItems).map(([name, item]) => (
              <div
                key={name}
                className="py-4 flex items-center justify-between"
              >
                <div>
                  <h4 className="text-rose-900 font-bold mb-2">{name}</h4>
                  <div className="flex gap-4 items-center">
                    <span className="text-custom-red font-bold">
                      {item.quantity}x
                    </span>
                    <span className="text-rose-500">
                      @ ${item.price.toFixed(2)}
                    </span>
                    <span className="text-rose-500 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(name)}
                  className="w-5 h-5 border border-rose-400 rounded-full flex items-center justify-center group hover:border-rose-900 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                  >
                    <path
                      fill="#CAAFA7"
                      d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                      className="group-hover:fill-rose-900 transition-colors"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-rose-100 pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-rose-900">Order Total</span>
              <span className="text-rose-900 text-3xl font-bold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg flex items-center justify-center gap-2 mb-6 text-sm">
              <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
              <p className="text-rose-900">
                This is a <span className="font-semibold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>

            <button
              onClick={onConfirm}
              className="w-full bg-custom-red text-white py-4 rounded-full font-semibold hover:bg-rose-900 transition-colors"
            >
              Confirm Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
