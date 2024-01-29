import Piechart from "../ui/pieChart/Piechart";
import Topbar from "../ui/topbar/Topbar";
import "./salevalue.scss";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function SaleValue() {
    return (
        <section className="salevalue">
            <Topbar title={"Sale Value"} />
            <div className="svContainer">
                <Piechart />
                <div className="desc">
                    <div className="left">
                        <p>Sale Items</p>
                        <p>567</p>
                        <p className="icon"><ArrowDropUpIcon />0.23%</p>
                    </div>
                    <div className="right">
                        <p>Sale Revenue</p>
                        <p>$11197</p>
                        <p className="icon"><ArrowDropDownIcon />0.15%</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SaleValue;
