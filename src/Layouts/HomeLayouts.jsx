import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const HomeLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayouts;