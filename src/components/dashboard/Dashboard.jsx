import "./dashboard.scss";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Item from "../box/Item";

function Dashboard() {
    return (
        <section className="dashboard">
            <h1 className="dashboard-title">Sales Dashboard</h1>
            <div className="dashboardContainer">
                <div className="box">
                    <Item title="Total Revenue" amount="$26,35,262" BadgeIcon={TrendingUpIcon} badge="2.2%" />
                </div>
                <div className="box">
                    <Item title="Total Sales" amount="$56,35,262" BadgeIcon={TrendingUpIcon} badge="1.8%" />
                </div>
                <div className="box down">
                    <Item title="Total Products" amount="$4,262" BadgeIcon={TrendingDownIcon} badge="2.0%" />
                </div>
                <div className="box">
                    <Item title="Total Expenses" amount="$35,262" BadgeIcon={TrendingUpIcon} badge="1.4%" />
                </div>
            </div>
        </section>
    )
};

export default Dashboard;

{/* <Item title="" amount="" /> */ }