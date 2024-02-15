import "./salechart.scss";
import Topbar from "../ui/topbar/Topbar";
import Barchart from "../ui/barChart/Barchart";

function SaleChart({ IconBox }) {
    return (
        <section className="salechart">
            <Topbar title={"Sales Over View"} IconBox={IconBox} />
            <div className="saleContainer">
                <ul>
                    <li><span className="bullet"></span>$7.65K<span className="desc">/ Income</span></li>
                    <li><span className="bullet expanse"></span>$3.75K<span className="desc">/ Expanses</span></li>
                </ul>
                <>
                    <Barchart />
                </>
            </div>
        </section>
    )
};

export default SaleChart;
