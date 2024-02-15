import { useContext } from "react";
import "./ecommerce.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ProductList from "../../components/productList/ProductList";
import Products from "../../components/products/Products";
import Topbar from "../../components/ui/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import Item from "../../components/ecommerce/item/Item";
import Reviews from "../../components/reviews/Reviews";
import TaskList from "../../components/taskList/TaskList";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import Statistics from "../../components/statistics/Statistics";
import Dashboard from "../../components/dashboard/Dashboard";
import ListTable from "../../components/ui/listtable/ListTable";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MoreIcon from "../../utils/moreIcon/MoreIcon";
import DateValue from "../../utils/dateValue/DateValue";
import { svgIcon } from "../../data/dashSource";
import { ecommerceTHdata1, ecommerceTHdata2, ecommerceRows1, ecommerceRows2 } from "../../data/tableSource";

const dashboardStyle = {
    gridColumn: "span 4/ span 4",
    height: "100%"
}

function Ecommerce() {

    return (
        <main className="main ecommerce">
            <Sidebar />
            <Navbar />
            <div className="main-container ecommerce-Container">
                <div className="sub_container">
                    <TitleBar text={"Ecommerce Dashboard"} />
                    <Dashboard>
                        <Item title="Total Revenue" amount="$26,35,262" MySvg={svgIcon.one} badge="+22%" boxStyle={dashboardStyle} desc={"Increase by"} />
                        <Item title="Total Sales" amount="$56,35,262" MySvg={svgIcon.two} badge="18%" boxStyle={dashboardStyle} desc={"Increase by"} />
                        <Item title="Total Products" amount="$4,262" MySvg={svgIcon.three} badge="20%" boxStyle={dashboardStyle} desc={"Increase by"} />
                        <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} badge="14%" boxStyle={dashboardStyle} desc={"Increase by"} />
                        <Item title="Total Products" amount="$4,262" MySvg={svgIcon.three} badge="20%" boxStyle={dashboardStyle} desc={"Increase by"} />
                        <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} badge="14%" boxStyle={dashboardStyle} desc={"Increase by"} />
                    </Dashboard>
                    <div className="center">
                        <Products title={"Recent Orders"} IconBox={<MoreIcon />} />
                        <Statistics title={"Order vs Sales"} IconBox={<DateValue />} />
                        <Reviews IconBox={<MoreIcon />} />
                    </div>
                    <div className="bottom">
                        <TaskList IconBox={<MoreIcon />} />
                        <ProductList title={"Top Selling Products"} theadData={ecommerceTHdata1} rows={ecommerceRows1} IconBox={<MoreIcon />} />
                    </div>
                    <section className="orderDetail">
                        <Topbar title={"Recent Order Details"} />
                        <ListTable theadData={ecommerceTHdata2} rows={ecommerceRows2} />
                    </section>
                </div>
                <Footer />
            </div>
        </main>
    )
};

export default Ecommerce;
