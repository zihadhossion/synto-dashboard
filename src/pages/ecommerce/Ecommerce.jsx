import { useContext } from "react";
import "./ecommerce.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ListTable from "../../components/listtable/ListTable";
import Products from "../../components/products/Products";
import Visitor from "../../components/visitor/Visitor";
import SellProduct from "../../components/sellProduct/SellProduct";
import Topbar from "../../components/ui/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Item from "../../components/ui/item/Item";
import Reviews from "../../components/reviews/Reviews";
import TaskList from "../../components/taskList/TaskList";
import MixedChart from "../../components/ui/mixedChart/MixedChart";
import { svgIcon } from "../../data/dashSource";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import Statistics from "../../components/statistics/Statistics";
import { thData, rows } from "../../data/tableSource";

function Ecommerce() {

    return (
        <main className="main ecommerce">
            <Sidebar />
            <Navbar />
            <div className="main-container ecommerce-Container">
                <div className="sub_container">
                    <TitleBar text={"Ecommerce Dashboard"} />
                    <div className="dashboard">
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
                            <div className="box down">
                                <Item title="Total Products" amount="$4,262" MySvg={svgIcon.three} BadgeIcon={TrendingDownIcon} badge="2.0%" />
                            </div>
                            <div className="box">
                                <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} BadgeIcon={TrendingUpIcon} badge="1.4%" />
                            </div>
                        </div>
                    </div>
                    <div className="center">
                        <Products title={"Recent Orders"} />
                        <Statistics title={"Order vs Sales"} />
                        <Reviews />
                    </div>
                    <div className="bottom">
                        <TaskList />
                        <SellProduct title={"Top Selling Products"} theadData={thData} rows={rows} />
                    </div>
                    <section className="orderDetail">
                        <Topbar title={"Recent Order Details"} />
                        <ListTable />
                    </section>
                </div>
                <Footer />
            </div>
        </main>
    )
};

export default Ecommerce;
