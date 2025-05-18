import { useFormik } from "formik";
import * as Yup from "yup";
import { API_BASE_URL } from "../../types/constant";
import { RegisterUser } from "../../types/types";

const Registration = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            address: {
                street: "",
                number: "",
                city: "",
                zipcode: "",
                geolocation: {
                    lat: "",
                    long: "",
                },
            },
            phone: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            username: Yup.string().required("Required"),
            password: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
            address: Yup.object({
                street: Yup.string(),
                number: Yup.number(),
                city: Yup.string(),
                zipcode: Yup.string(),
                geolocation: Yup.object({
                    lat: Yup.string(),
                    long: Yup.string(),
                }),
            }),
            phone: Yup.string().required("Required"),
        }),
        onSubmit: async(values: RegisterUser) => {
            try {
                const response = await fetch(`${API_BASE_URL}/users`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                });
                const data = await response.json();

                if (response.ok) {
                    console.log("Registration successful:", data);
                } else {
                    throw new Error(data.message || "Login failed");
                }
                
            } catch (error) {
                console.log('Error: ', error);
            } finally {
                console.log("Registration successful:");
            }
        },
    });
    return (
        <>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="">
                <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create an account</h2>
            </div>
        </div>
        
        <div className="mt-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden bg-white px-[30px] py-[30px] w-[640px]">
            <form className="space-y-6" onSubmit={formik.handleSubmit} >
                <div className="grid gap-x-6 gap-y-6">
                    <div className="sm:col-span-6">
                        <label htmlFor="firstName" className="block text-xs/4 text-gray-400">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                id="firstName"
                                type="text"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                {...formik.getFieldProps("firstName")}
                            />
                        </div>
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
                            ) : null}
                    </div>

                    <div className="sm:col-span-6">
                        <label htmlFor="lastName" className="block text-xs/4 text-gray-400">
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                id="lastName"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                {...formik.getFieldProps("lastName")}
                            />
                        </div>
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
                            ) : null}
                    </div>

                    <div className="sm:col-span-12">
                        <label htmlFor="email" className="block text-xs/4 text-gray-400">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                {...formik.getFieldProps("email")}
                            />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="sm:col-span-12">
                        <label htmlFor="username" className="block text-xs/4 text-gray-400">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                type="text"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                {...formik.getFieldProps("username")}
                            />
                        </div>
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-red-500 text-sm">{formik.errors.username}</div>
                        ) : null}
                    </div>
                    <div className="sm:col-span-12">
                        <label htmlFor="password" className="block text-xs/4 text-gray-400">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                type="password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                {...formik.getFieldProps("password")}
                            />
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500 text-sm">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="sm:col-span-12">
                        <label htmlFor="phone" className="block text-xs/4 text-gray-400">
                            Phone
                        </label>
                        <div className="mt-2">
                            <input
                                id="phone"
                                type="number"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                {...formik.getFieldProps("phone")}
                            />
                        </div>
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
                        ) : null}
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-x-6">
                    <button type="button" onClick={() => window.history.back()} className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-500">
                        Back to Sign in
                    </button>
                    <div className="justify-end flex">
                        <button type="button" className="rounded-md border border-indigo-600 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-500  hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-[10px] min-w-[100px]" onClick={formik.handleReset}>
                            Reset
                        </button>
                        <button
                            type="button"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 min-w-[100px]"
                            onClick={(e) => {
                                e.preventDefault();
                                formik.handleSubmit();
                            }}
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