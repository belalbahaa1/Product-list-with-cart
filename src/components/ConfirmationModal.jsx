import React from "react";

const ConfirmationModal = ({ cartItems, onClose }) => {
  const totalPrice = Object.values(cartItems).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-[600px] rounded-t-3xl md:rounded-2xl p-8 animate-slide-up overflow-y-auto max-h-[90vh]">
        <img
          src="/assets/images/icon-order-confirmed.svg"
          alt="Confirmed"
          className="w-12 h-12 mb-6"
        />
        <h2 className="text-rose-900 text-4xl font-bold mb-2">
          Order Confirmed
        </h2>
        <p className="text-rose-500 mb-8">We hope you enjoy your food!</p>

        <div className="bg-rose-50 rounded-lg p-6 mb-8">
          <div className="divide-y divide-rose-100 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
            {Object.entries(cartItems).map(([name, item]) => (
              <div key={name} className="py-4 flex items-center gap-4">
                <img
                  src={item.image.thumbnail}
                  alt={name}
                  className="w-12 h-12 rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="text-rose-900 font-bold mb-1 line-clamp-1">
                    {name}
                  </h4>
                  <div className="flex gap-4">
                    <span className="text-custom-red font-bold">
                      {item.quantity}x
                    </span>
                    <span className="text-rose-500">
                      @ ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <span className="text-rose-900 font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-rose-100">
            <span className="text-rose-900">Order Total</span>
            <span className="text-rose-900 text-2xl font-bold">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-custom-red text-white py-4 rounded-full font-semibold hover:bg-rose-900 transition-colors"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
