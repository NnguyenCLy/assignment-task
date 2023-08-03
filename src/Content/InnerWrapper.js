import Dashboard from "./ContentBody/Pages/Dashboard";
import SidebarLeft from "./Sidebar/SidebarLeft";
import User from "./ContentBody/Pages/User";
import { useSelector } from "react-redux";
import { selectPage } from "../features/currentPage/currentPage";

export const childrenContent = [
    { url: "#", icon: "fa fa-home", name: "Dashboard", pageID: 1 },
    { url: "#", icon: "fa fa-user", name: "User", pageID: 2 },
];

const pages = [
    { id: 1, content: Dashboard },
    { id: 2, content: User },
];

const InnerWrapper = () => {
    const pageID = useSelector(selectPage);
    let page = pages.find((x) => x.id === pageID);
    return (
        <div className="inner-wrapper">
            <SidebarLeft></SidebarLeft>
            {<page.content />}
        </div>
    );
};

export default InnerWrapper;
