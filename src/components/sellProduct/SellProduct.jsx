import BasicTable from "../ui/table/BasicTable";
import Topbar from "../ui/topbar/Topbar";
import "./sellproduct.scss";

function SellProduct() {
    return (
        <section className="sellproduct">
            <Topbar title={"Top Selling Products"} />
            <div className="spContaier">
                <BasicTable />
            </div>
        </section>
    )
};

export default SellProduct;
