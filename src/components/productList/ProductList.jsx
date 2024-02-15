import "./productList.scss";
import Table from "../ui/table/Table";
import Topbar from "../ui/topbar/Topbar";

function ProductList({ title, theadData, rows, IconBox }) {
    return (
        <section className="sellproduct">
            <Topbar title={title} IconBox={IconBox} />
            <div className="spContainer">
                <Table theadData={theadData} rows={rows} />
            </div>
        </section>
    )
};

export default ProductList;
