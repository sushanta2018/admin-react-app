const Registration = () => {
    return (
        <>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="">
                <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create an account</h2>
            </div>
        </div>
        
        <div className="mt-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden bg-white px-[30px] py-[30px] w-[640px]">
            <form className="space-y-6" action="#" method="POST">
                <div className="grid gap-x-6 gap-y-6">
                    <div className="sm:col-span-6">
                        <label htmlFor="first-name" className="block text-xs/4 text-gray-400">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-6">
                        <label htmlFor="last-name" className="block text-xs/4 text-gray-400">
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-12">
                        <label htmlFor="email" className="block text-xs/4 text-gray-400">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-12">
                        <label htmlFor="password" className="block text-xs/4 text-gray-400">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-x-6">
                    <button type="button" onClick={() => window.history.back()} className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-500">
                        Back to Sign in
                    </button>
                    <div className="justify-end flex">
                        <button type="button" className="rounded-md border border-indigo-600 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-500  hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-[10px] min-w-[100px]">
                            Reset
                        </button>
                        <button
                            type="button"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 min-w-[100px]"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </>

    )
}
export default Registration;