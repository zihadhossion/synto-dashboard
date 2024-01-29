import "./sidebar.scss";
import logo from "../../assets/desktop-logo.png";
import darkLogo from "../../assets/desktop-dark.png";
import DashboardIcon from '@mui/icons-material/Dashboard';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo-image">
                {/* <img src={logo} alt="" /> */}
                <img src={darkLogo} alt="" />
            </div>
            <div className="content">
                <div className="top">
                    <p>Dashboards</p>
                </div>
                <ul className="links-list">
                    <li>Sales</li>
                    <li>Ecommerce</li>
                    <li>Crypto</li>
                    <li>Jobs</li>
                    <li>NFT</li>
                    <li>Analytics</li>
                    <li>Projects</li>
                    <li>HRM</li>
                    <li>CRM</li>
                    <li>Personal</li>
                    <li>Stocks</li>
                    <li>Course</li>
                </ul>
            </div>
        </aside>
    )
};

export default Sidebar;
