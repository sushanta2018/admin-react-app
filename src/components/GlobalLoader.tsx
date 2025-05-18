const GlobalLoader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-[50px] w-[50px] border-t-2 border-b-2 border-gray-900"></div>
            <div className=" text-gray-900 text-sm mt-3">Loading...</div>
        </div>
    )
}

export default GlobalLoader;