import BasicTable from "../ui/table/BasicTable";
import Topbar from "../ui/topbar/Topbar";
import "./sellproduct.scss";

function SellProduct({ title }) {
    return (
        <section className="sellproduct">
            <Topbar title={title} />
            <div className="spContaier">
                <BasicTable />
            </div>
        </section>
    )
};

export default SellProduct;
