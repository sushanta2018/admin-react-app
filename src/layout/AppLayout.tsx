import { useRoutes } from "react-router-dom";
import { Header, Footer } from "../pages";
import routes from "../route";

const AppLayout = () => {
    const children = useRoutes(routes);
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    );
}
export default AppLayout;