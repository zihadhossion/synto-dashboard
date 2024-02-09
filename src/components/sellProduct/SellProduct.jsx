import Table from "../ui/table/Table";
import Topbar from "../ui/topbar/Topbar";
import "./sellproduct.scss";

function SellProduct({ title, theadData, rows }) {
    return (
        <section className="sellproduct">
            <Topbar title={title} />
            <div className="spContaier">
                <Table theadData={theadData} rows={rows} />
            </div>
        </section>
    )
};

export default SellProduct;
