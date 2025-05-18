import { useEffect, useState } from "react";
import { getProduct } from "../../services/product";
import { Product } from "../../types/product";
import { FaRupeeSign } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const productId = window.location.pathname.split("/")[2];
  const [productItem, setProductItem] = useState({} as Product);

  const location = useLocation();
  const { discount, discountedPrice } = location.state || {};

  useEffect(() => {
    const product = async () => {
      const data = await getProduct(parseInt(productId));
      setProductItem({...data, discount, discountedPrice});
    };
    product();
  }, []);

  return (
    <section className="py-8 bg-white md:py-16  antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 relative">
        {productItem.discount > 0 && (
            <span className="rounded bg-blue-200 px-2.5 py-0.5 text-xs font-medium text-primary-800 absolute">
              {" "}
              Up to {productItem.discount}% off{" "}
            </span>
          )}
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full h-[400px]"
              src={productItem.image}
              alt=""
            />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
             {productItem.title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <div className="flex">
                <p className="text-3xl font-extrabold leading-tight text-gray-900 flex items-center">
                  <FaRupeeSign size={25} />
                  {productItem.discountedPrice ? productItem.discountedPrice : productItem.price}
                </p>
                {productItem.discountedPrice && (
                  <p className="text-xl ml-[5px] line-through text-gray-400 flex items-center">
                    <FaRupeeSign size={20} />
                    {productItem.price}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  { Array.from({ length: 5 }).map((_, index) => (
                    <svg
                    className={`w-4 h-4 ${index < Math.floor(productItem?.rating?.rate) ? "text-yellow-400" : "text-gray-400"}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    key={index}
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  ))}
                </div>
                <p className="text-sm font-medium leading-none text-gray-500 ">
                  {productItem?.rating?.rate}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline "
                >
                  {productItem?.rating?.count} Reviews
                </a>
              </div>
            </div>

            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a
                href="#"
                title=""
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                role="button"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
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
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
                Add to favorites
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                role="button"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
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
              </a>

              <div className="flex items-center">
                <p className="text-sm font-medium leading-none text-gray-500 mr-[10px]">
                  Quantity
                </p>
                <select className="flex w-[50px] items-center justify-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 px-[6px] py-[8px]">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 " />

            <p className="mb-6 text-gray-500 ">
              {productItem.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
