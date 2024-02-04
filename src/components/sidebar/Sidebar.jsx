import { useContext } from "react";
import {
    Link,
    NavLink,
} from "react-router-dom";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
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
import logo from "../../assets/desktop-logo.png";
import darkLogo from "../../assets/desktop-dark.png";
import toggleLogo from "../../assets/toggle-logo.png";

function Sidebar() {
    const { sidebarActive } = useContext(SidebarContext);

    return (
        <aside className={sidebarActive ? "sidebar" : "sidebar active"} >
            <div className="logo-image">
                <Link to={"/"}>
                    {sidebarActive ? <img src={darkLogo} alt="" /> : <img src={toggleLogo} alt="" />}
                    {/* <img src={logo} alt="" /> */}
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

export default Sidebar;


