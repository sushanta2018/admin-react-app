import { useCallback, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { getProducts } from "../../services/product";
import { Product } from "../../types/product";
import debounce from "lodash.debounce";
import { ShimmerPostList } from "react-shimmer-effects";

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        getProductList();
    }, []);

    const getProductList = useCallback(async () => {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const handleSearchProduct = useCallback(
        debounce((searchValue: string, products: Product[]) => {
            setLoading(true);
            if (searchValue === "") {
                getProductList();
                return;
            }
            // Simulate a delay for the search
            setTimeout(() => {
                const filteredProducts = products.filter((product) =>
                    product.category.toLowerCase().includes(searchValue.toLowerCase())
                );
                setProducts(filteredProducts);
                setLoading(false);
            }, 200);
            
        }, 300),
        []
    );

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearchProduct(e.target.value, products);
    };

    const handleSort = (sortValue: string) => {
        setSortOrder(sortValue);
        setDropdownOpen(false);
        let sortedProducts = [...products];
        if (sortValue === "lowToHigh") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortValue === "highToLow") {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (sortValue === "noOfReviews") {
            sortedProducts.sort((a, b) => b.rating.count - a.rating.count);
        } else if (sortValue === "discount") {
            sortedProducts.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        }
        setProducts(sortedProducts);
    };
    const handleSortClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const sortValue = (e.target as HTMLAnchorElement).getAttribute("data-sort");
        if (sortValue) {
            handleSort(sortValue);
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto px-[15px] pb-[30px]">
            <div className="flex flex-wrap mx-[-8px] mt-[30px]">
                <div className="w-[50%] px-[8px]">
                    <input type="text" className="w-[300px] py-[6px] px-[12px] border text-sm border-gray-200 rounded-lg focus:ring-0 focus:outline-0" placeholder="Search category" onChange={(e) => onSearchChange(e)} />
                </div>
                <div className="w-[50%] px-[8px] flex justify-end">
                    <div className="relative">
                        <button type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto" onClick={toggleDropdown}>
                            <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4" />
                            </svg>
                            Sort
                            <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`z-50 w-[200px] divide-y divide-gray-100 rounded-lg bg-white shadow-[0_35px_35px_rgba(0,0,0,0.25)] border border-gray-200 absolute right-0 top-full ${dropdownOpen ? 'block' : 'hidden'}`}>
                            <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="sortDropdownButton">
                                <li>
                                    <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900" data-sort="lowToHigh" onClick={handleSortClick}> Price: low to high </a>
                                </li>
                                <li>
                                    <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900" data-sort="highToLow" onClick={handleSortClick}> Price: high to low </a>
                                </li>
                                <li>
                                    <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900" data-sort="reviews" onClick={handleSortClick}> No. reviews </a>
                                </li>
                                <li>
                                    <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900" data-sort="discount" onClick={handleSortClick}> Discount % </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            {loading ? (
                <div className="mt-[30px]"><ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} /></div>
            ) :
                (
                    <div className="flex flex-wrap mx-[-8px]">
                        {
                            products.map((product: Product) => <div className="w-1/4 px-[8px] mt-[15px]" key={product?.id}>
                                <ProductItem product={product} />
                            </div>)
                        }
                    </div>
                )
            }
        </div>
    )
}

export default ProductList;
