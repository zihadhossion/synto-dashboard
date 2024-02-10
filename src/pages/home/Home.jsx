import { useContext } from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Customers from "../../components/customers/Customers";
import SaleChart from "../../components/saleChart/SaleChart";
import SaleValue from "../../components/saleValue/SaleValue";
import Products from "../../components/products/Products";
import Visitor from "../../components/visitor/Visitor";
import SellProduct from "../../components/sellProduct/SellProduct";
import Table from "../../components/ui/table/Table";
import Topbar from "../../components/ui/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import Item from "../../components/ui/item/Item";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { svgIcon } from "../../data/dashSource";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import ListTable from "../../components/listtable/ListTable";
import { thData, rows } from "../../data/tableSource";
function Home() {

    return (
        <main className="main home">
            <Sidebar />
            <Navbar />
            <div className="main-container home-Container">
                <div className="sub_container">
                    <TitleBar />
                    <div className="dashboard">
                        <div className="dashboardContainer">
                            <div className="box">
                                <Item title="Total Revenue" amount="$26,35,262" MySvg={svgIcon.one} BadgeIcon={TrendingUpIcon} badge="2.2%" />
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
                        <SaleChart />
                        <Customers />
                        <SaleValue />
                    </div>
                    <div className="bottom">
                        <Products title={"Upcoming Products"} />
                        <Visitor />
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

export default Home;
