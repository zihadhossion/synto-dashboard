import { useContext } from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Customers from "../../components/customers/Customers";
import SaleChart from "../../components/saleChart/SaleChart";
import SaleValue from "../../components/saleValue/SaleValue";
import Products from "../../components/products/Products";
import Visitor from "../../components/visitor/Visitor";
import ProductList from "../../components/productList/ProductList";
import Topbar from "../../components/ui/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import ListTable from "../../components/ui/listtable/ListTable";
import { thData, homeTHdata, rows, homeRows } from "../../data/tableSource";
import Dashboard from "../../components/dashboard/Dashboard";
import Item from "../../components/home/item/Item";
import { svgIcon } from "../../data/dashSource";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MoreIcon from "../../utils/moreIcon/MoreIcon";

const dashboardStyle = {
    gridColumn: "span 3/ span 3",
    height: "100 %"
}

function Home() {

    return (
        <main className="main home">
            <Sidebar />
            <Navbar />
            <div className="main-container home-Container">
                <div className="sub_container">
                    <TitleBar />
                    <Dashboard>
                        <Item title="Total Revenue" amount="$26,35,262" MySvg={svgIcon.one} BadgeIcon={TrendingUpIcon} badge="2.2%" boxStyle={dashboardStyle} desc={"in the last week"} />
                        <Item title="Total Sales" amount="$56,35,262" MySvg={svgIcon.two} BadgeIcon={TrendingUpIcon} badge="1.8%" boxStyle={dashboardStyle} />
                        <Item title="Total Products" amount="$4,262" MySvg={svgIcon.three} BadgeIcon={TrendingDownIcon} badge="2.0%" boxStyle={dashboardStyle} />
                        <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} BadgeIcon={TrendingUpIcon} badge="1.4%" boxStyle={dashboardStyle} />
                    </Dashboard>
                    <div className="center">
                        <SaleChart IconBox={<MoreIcon />} />
                        <Customers IconBox={<MoreIcon />} />
                        <SaleValue IconBox={<MoreIcon />} />
                    </div>
                    <div className="bottom">
                        <Products title={"Upcoming Products"} IconBox={<MoreIcon />} />
                        <Visitor IconBox={<MoreIcon />} />
                        <ProductList title={"Top Selling Products"} theadData={thData} rows={rows} IconBox={<MoreIcon />} />
                    </div>
                    <section className="orderDetail">
                        <Topbar title={"Recent Order Details"} IconBox={<MoreIcon />} />
                        <ListTable theadData={homeTHdata} rows={homeRows} />
                    </section>
                </div>
                <Footer />
            </div>
        </main>
    )
};

export default Home;
