import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../../components/dashboard/dashboard";

function Home() {
    return (
        <main className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <Dashboard />
            </div>

        </main>
    )
};

export default Home;
