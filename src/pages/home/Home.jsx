import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
function Home() {
    return (
        <div className="main">
            <Sidebar />
            <Navbar />
        </div>
    )
};

export default Home;
