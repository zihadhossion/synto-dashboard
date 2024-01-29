import Piechart from "../ui/pieChart/Piechart";
import Topbar from "../ui/topbar/Topbar";
import "./salevalue.scss";

function SaleValue() {
    return (
        <section className="salevalue">
            <Topbar title={"Sale Value"} />
            <Piechart />
        </section>
    )
};

export default SaleValue;
