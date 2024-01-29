import "./salechart.scss";
import Topbar from "../ui/topbar/Topbar";
import Barchart from "../ui/barChart/Barchart";

function SaleChart() {
    return (
        <section className="salechart">
            <Topbar title={"Sales Over View"} />
            <div className="saleContainer">
                <ul>
                    <li>$7.65K <span>/Income</span></li>
                    <li>$3.75K <span>/Expanses</span></li>
                </ul>
                <div>
                    <Barchart />
                </div>

            </div>

        </section>
    )
};

export default SaleChart;
