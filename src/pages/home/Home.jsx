import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../../components/dashboard/dashboard";
import Customers from "../../components/customers/Customers";
import SaleChart from "../../components/saleChart/SaleChart";
import SaleValue from "../../components/saleValue/SaleValue";
import ComingProduct from "../../components/comingProduct/ComingProduct";
import Visitor from "../../components/visitor/Visitor";
import SellProduct from "../../components/sellProduct/SellProduct";

function Home() {
    return (
        <main className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <Dashboard />
                <div className="center">
                    <SaleChart />
                    <Customers />
                    <SaleValue />
                </div>
                <div className="bottom">
                    <ComingProduct />
                    <Visitor />
                    <SellProduct />
                </div>
            </div>
        </main>
    )
};

export default Home;
