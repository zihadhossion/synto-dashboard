import Table from "../ui/table/Table";
import Topbar from "../ui/topbar/Topbar";
import "./sellproduct.scss";

function SellProduct({ title }) {
    return (
        <section className="sellproduct">
            <Topbar title={title} />
            <div className="spContaier">
                <Table />
            </div>
        </section>
    )
};

export default SellProduct;
