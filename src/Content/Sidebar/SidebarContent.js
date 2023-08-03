import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../features/currentPage/currentPage";
import { childrenContent } from "../InnerWrapper";
const SidebarContent = () => {
    const dispatch = useDispatch();

    const contents = childrenContent.map((child, index) => (
        <li key={index} className="nav-actived">
            <p></p>
            <a
                href={child.url}
                onClick={() => dispatch(setCurrentPage(child.pageID))}
            >
                <i className={child.icon} aria-hidden="true"></i>
                <span>{child.name}</span>
            </a>
        </li>
    ));

    return (
        <div className="nano">
            <div className="nano-content">
                <nav id="menu" className="nav-main" role="navigation">
                    <ul className="nav nav-main">{contents}</ul>
                </nav>
            </div>
        </div>
    );
};

export default SidebarContent;
