import React from "react";
import { Product } from "../../types/product";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type ProductItemProps = {
  product: Product;
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const roundedPrice: number = Math.floor(product.rating.rate);
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/product/${product.id}`, {
      state: {
        discount: product.discount,
        discountedPrice: product.discountedPrice
      }
    });
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm h-full flex flex-col">
      <div className="h-56 w-full cursor-pointer" onClick={handleViewDetails}>
        <img
          className="mx-auto h-full object-contain"
          src={product.image}
          alt=""
        />
      </div>
      <div className="pt-6 flex-1 flex flex-col">
        <div
          className={`mb-4 flex items-center ${
            product.discount > 0 ? "justify-between" : "justify-end"
          } gap-4`}
        >
          {product.discount > 0 && (
            <span className="me-2 rounded bg-blue-200 px-2.5 py-0.5 text-xs font-medium text-primary-800">
              {" "}
              Up to {product.discount}% off{" "}
            </span>
          )}

          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
            <div
              id="tooltip-quick-look"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
            >
              Quick look
            </div>

            <button
              type="button"
              data-tooltip-target="tooltip-add-to-favorites"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            >
              <span className="sr-only"> Add to Favorites </span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                />
              </svg>
            </button>
            <div
              id="tooltip-add-to-favorites"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
              data-popper-placement="top"
            >
              Add to favorites
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>
          </div>
        </div>

        <div
          onClick={handleViewDetails}
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
        >
          {product.title}
        </div>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <svg
                  className={`h-4 w-4 ${index < roundedPrice ? "text-yellow-400" : "text-gray-400"}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  key={index}
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg>
              );
            })}
          </div>

          <p className="text-sm font-medium text-gray-900">
            {product?.rating?.rate}
          </p>
          <p className="text-sm font-medium text-gray-500">
            ({product?.rating?.count})
          </p>
        </div>
        <div className="mt-auto">
          <div className="mt-4">
            <div className="flex">
              <p className="text-2xl font-extrabold leading-tight text-gray-900 flex items-center">
                <FaRupeeSign size={22} />
                {product.discountedPrice ? product.discountedPrice : product.price}
              </p>
              {product.discountedPrice && (
                <p className="text-sm ml-[5px] line-through text-gray-400 flex items-center">
                  <FaRupeeSign size={14} />
                  {product.price}
                </p>
              )}
            </div>

            <button
              type="button"
              className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              <svg
                className="me-2 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
