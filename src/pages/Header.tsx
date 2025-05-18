const Header = () => {
    return (
        <header className="py-[10px] bg-white border-b border-gray-200">
            <div className="max-w-screen-xl mx-auto px-[15px]">
                <div className="flex flex-wrap items-center mx-[-15px]">
                    <div className="w-[40%] px-[15px]">
                        <div className="flex">
                            <a href="" className="flex items-center">
                                <img src="/images/logo/logo-icon.svg" className="mr-3" alt="Flowbite Logo" /> Fake Store
                            </a>
                        </div>
                    </div>
                    <div className="w-[60%] px-[15px] text-end">
                        <button type="button" className=""><img src="/images/icon/icon-sun.svg" alt="dark-mode" /></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header