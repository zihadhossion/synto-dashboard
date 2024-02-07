import { useContext } from "react";
import "./crypto.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Products from "../../components/products/Products";
import SellProduct from "../../components/sellProduct/SellProduct";
import Table from "../../components/ui/table/Table";
import Topbar from "../../components/ui/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Item from "../../components/ui/item/Item";
import Reviews from "../../components/reviews/Reviews";
import TaskList from "../../components/taskList/TaskList";
import MixedChart from "../../components/ui/mixedChart/MixedChart";
import CandleChart from "../../components/ui/candleChart/CandleChart";
import { svgIcon } from "../../data/dashSource";

function Crypto() {

    return (
        <main className="main crypto">
            <Sidebar />
            <Navbar />
            <div className="main-container crypto-Container">
                <div className="dashboard">
                    <h1 className="dashboard-title">Crypto Dashboard</ h1>
                    <div className="dashboardContainer">
                        <div className="box">
                            <Item title="Total Order" amount="$26,35,262" MySvg={svgIcon.one} BadgeIcon={TrendingUpIcon} badge="2.2%" />
                        </div>
                        <div className="box">
                            <Item title="Total Sales" amount="$56,35,262" MySvg={svgIcon.two} BadgeIcon={TrendingUpIcon} badge="1.8%" />
                        </div>
                        <div className="box down">
                            <Item title="Total Products" amount="$4,262" MySvg={svgIcon.three} BadgeIcon={TrendingDownIcon} badge="2.0%" />
                        </div>
                        <div className="box">
                            <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} BadgeIcon={TrendingUpIcon} badge="1.4%" />
                        </div>
                    </div>
                </div>
                <div className="center">
                    <Products title={"Recent Transctions"} />
                    <CandleChart />
                </div>
                <div className="bottom">
                    <TaskList />
                    <SellProduct title={"Top Selling Products"} />
                </div>
                <section className="orderDetail">
                    <Topbar title={"Recent Order Details"} />
                    <div className="odContainer">
                        <Table />
                    </div>
                </section>
                <Footer />
            </div>
        </main>
    )
};

export default Crypto;
