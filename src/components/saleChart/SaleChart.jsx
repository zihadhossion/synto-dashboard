import "./salechart.scss";
import Topbar from "../ui/topbar/Topbar";
import Barchart from "../ui/barChart/Barchart";

function SaleChart() {
    return (
        <section className="salechart">
            <Topbar title={"Sales Over View"} />
            <Barchart />
        </section>
    )
};

export default SaleChart;
