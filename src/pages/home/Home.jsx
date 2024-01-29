import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../../components/dashboard/dashboard";
import Customers from "../../components/customers/Customers";
import SaleChart from "../../components/saleChart/SaleChart";
import SaleValue from "../../components/saleValue/SaleValue";

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
            </div>
        </main>
    )
};

export default Home;
