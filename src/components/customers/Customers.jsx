import "./customers.scss";
import profile from "../../assets/profile.jpg";
import User from "../ui/user/User";
import Topbar from "../ui/topbar/Topbar";

function Customers() {
    return (
        <section className="customers">
            <Topbar title={"Top Customers"} />
            <div className="customer-list">
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </section>
    )
};

export default Customers;
