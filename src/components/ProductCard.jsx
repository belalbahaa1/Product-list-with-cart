import React from "react";

const ProductCard = ({
  product,
  quantity,
  onAdd,
  onIncrement,
  onDecrement,
}) => {
  const { name, category, price, image } = product;

  return (
    <div className="flex flex-col group">
      <div className="relative mb-8">
        <picture>
          <source media="(min-width: 1024px)" srcSet={image.desktop} />
          <source media="(min-width: 768px)" srcSet={image.tablet} />
          <img
            src={image.mobile}
            alt={name}
            className={`w-full rounded-xl object-cover border-2 transition-all duration-300 ${
              quantity > 0 ? "border-custom-red" : "border-transparent"
            }`}
          />
        </picture>

        {/* Action Button */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40">
          {quantity === 0 ? (
            <button
              onClick={() => onAdd(product)}
              className="w-full bg-white border border-rose-400 py-3 px-7 rounded-full flex items-center justify-center gap-2 hover:border-custom-red hover:text-custom-red transition-all font-semibold group/btn"
            >
              <img
                src="/assets/images/icon-add-to-cart.svg"
                alt=""
                className="w-5 h-5"
              />
              <span className="text-rose-900 group-hover/btn:text-custom-red whitespace-nowrap">
                Add to Cart
              </span>
            </button>
          ) : (
            <div className="w-full bg-custom-red py-3 px-4 rounded-full flex items-center justify-between text-white font-semibold shadow-lg">
              <button
                onClick={() => onDecrement(name)}
                className="w-5 h-5 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-custom-red transition-colors group/dec"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="none"
                  viewBox="0 0 10 2"
                >
                  <path
                    fill="currentColor"
                    d="M0 .375h10v1.25H0V.375Z"
                    className="group-hover/dec:fill-custom-red"
                  />
                </svg>
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => onIncrement(name)}
                className="w-5 h-5 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-custom-red transition-colors group/inc"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill="currentColor"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                    className="group-hover/inc:fill-custom-red"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-2">
        <span className="text-rose-500 text-sm">{category}</span>
        <h3 className="text-rose-900 font-bold text-lg leading-tight mt-1">
          {name}
        </h3>
        <p className="text-custom-red font-bold text-lg mt-1">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
