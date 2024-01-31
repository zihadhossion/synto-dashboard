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
import BasicTable from "../../components/ui/table/BasicTable";
import Topbar from "../../components/ui/topbar/Topbar";
import Footer from "../../components/footer/Footer";

function Home() {
    return (
        <main className="home">
            <Sidebar />
            <Navbar />
            <div className="homeContainer">
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
                <section className="orderDetail">
                    <Topbar title={"Recent Order Details"} />
                    <div className="odContainer">
                        <BasicTable />
                    </div>
                </section>
                <Footer />
            </div>
        </main>
    )
};

export default Home;
