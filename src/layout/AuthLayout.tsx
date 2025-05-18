import { useRoutes } from "react-router-dom";
import routes from "../route";

const AuthLayout = () => {
    const children = useRoutes(routes);
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow flex items-center flex-col py-[30px] justify-center">
                {children}
            </div>
        </div>
    );  
}

export default AuthLayout;