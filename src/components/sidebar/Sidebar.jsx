import { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink, } from "react-router-dom";
import "./sidebar.scss";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SettingsAccessibilityOutlinedIcon from '@mui/icons-material/SettingsAccessibilityOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { SidebarContext } from "../../context/SidebarContext";
import darkLogo from "../../assets/desktop-dark.png";
import toggleLogo from "../../assets/toggle-logo.png";
import useClickOutside from "../../hooks/useClickOutside";

function Sidebar() {
    const { sidebarActive, setSidebarActive } = useContext(SidebarContext);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const sidebarRef = useRef(null);

    useEffect(() => {
        // Add event listener to detect clicks outside the sidebar
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarActive(false)
            }
        };

        // Add the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        // Attach event listener to window resize
        window.addEventListener('resize', handleResize);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {windowWidth > 768 ? <DeskSidebar sidebarActive={sidebarActive} /> : <MobSidebar sidebarActive={sidebarActive} sideRef={sidebarRef} />}
        </>
    )
};

export default Sidebar;

function DeskSidebar() {
    const { sidebarActive, setSidebarActive } = useContext(SidebarContext);
    const [isHover, setIsHover] = useState(false);

    return (
        <aside className={sidebarActive ? "deskSidebar" : "deskSidebar active"} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <div className="logo-image">
                <Link to={"/"}>
                    {sidebarActive || isHover ? <img src={darkLogo} alt="" /> : <img src={toggleLogo} alt="" />}
                </Link>
            </div>
            <div className="content">
                <div className="top">
                    <p>Dashboards</p>
                </div>
                <ul className="links-list">
                    <NavLink to={"/"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><HomeOutlinedIcon /><span>Sales</span></li>
                    </NavLink>
                    <NavLink to={"/ecommerce"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><PaymentOutlinedIcon /><span>Ecommerce</span></li>
                    </NavLink>
                    <NavLink to={"/crypto"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><CurrencyBitcoinOutlinedIcon /><span>Crypto</span></li>
                    </NavLink>
                    <NavLink to={"/jobs"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><WorkOutlineOutlinedIcon /><span>Jobs</span></li>
                    </NavLink>
                    <NavLink to={"/nft"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><TokenOutlinedIcon /><span>NFT</span></li>
                    </NavLink>
                    <NavLink to={"/analytics"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><AnalyticsOutlinedIcon /><span>Analytics</span></li>
                    </NavLink>
                    <NavLink to={"/projects"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><FormatListBulletedOutlinedIcon /><span>Projects</span></li>
                    </NavLink>
                    <NavLink to={"/hrm"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><SensorOccupiedOutlinedIcon /><span>HRM</span></li>
                    </NavLink>
                    <NavLink to={"/crm"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><ManageAccountsOutlinedIcon /><span>CRM</span></li>
                    </NavLink>
                    <NavLink to={"/personal"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><SettingsAccessibilityOutlinedIcon /><span>Personal</span></li>
                    </NavLink>
                    <NavLink to={"/stocks"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><Inventory2OutlinedIcon /><span>Stocks</span></li>
                    </NavLink>
                    <NavLink to={"/course"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><LocalLibraryIcon /><span>Course</span></li>
                    </NavLink>
                </ul>
            </div>
        </aside >
    )
};

function MobSidebar({ sidebarActive, sideRef }) {
    return (
        <aside className={sidebarActive ? "mobSidebar sideActive" : "mobSidebar"} ref={sideRef}>
            <div className="content">
                <div className="top">
                    <p>Dashboards</p>
                </div>
                <ul className="links-list">
                    <NavLink to={"/"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><HomeOutlinedIcon /><span>Sales</span></li>
                    </NavLink>
                    <NavLink to={"/ecommerce"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><PaymentOutlinedIcon /><span>Ecommerce</span></li>
                    </NavLink>
                    <NavLink to={"/crypto"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><CurrencyBitcoinOutlinedIcon /><span>Crypto</span></li>
                    </NavLink>
                    <NavLink to={"/jobs"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><WorkOutlineOutlinedIcon /><span>Jobs</span></li>
                    </NavLink>
                    <NavLink to={"/nft"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><TokenOutlinedIcon /><span>NFT</span></li>
                    </NavLink>
                    <NavLink to={"/analytics"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><AnalyticsOutlinedIcon /><span>Analytics</span></li>
                    </NavLink>
                    <NavLink to={"/projects"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><FormatListBulletedOutlinedIcon /><span>Projects</span></li>
                    </NavLink>
                    <NavLink to={"/hrm"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><SensorOccupiedOutlinedIcon /><span>HRM</span></li>
                    </NavLink>
                    <NavLink to={"/crm"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><ManageAccountsOutlinedIcon /><span>CRM</span></li>
                    </NavLink>
                    <NavLink to={"/personal"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><SettingsAccessibilityOutlinedIcon /><span>Personal</span></li>
                    </NavLink>
                    <NavLink to={"/stocks"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><Inventory2OutlinedIcon /><span>Stocks</span></li>
                    </NavLink>
                    <NavLink to={"/course"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li><LocalLibraryIcon /><span>Course</span></li>
                    </NavLink>
                </ul>
            </div>
        </aside >
    )
};