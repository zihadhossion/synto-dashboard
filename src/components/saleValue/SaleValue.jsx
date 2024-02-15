import "./salevalue.scss";
import Piechart from "../ui/pieChart/Piechart";
import Topbar from "../ui/topbar/Topbar";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function SaleValue({ IconBox }) {
    return (
        <section className="salevalue">
            <Topbar title={"Sale Value"} IconBox={IconBox} />
            <div className="svContainer">
                <div className="chartContainer">
                    <Piechart />
                </div>
                <div className="descBox">
                    <div className="desc">
                        <div className="left">
                            <p className="title">Sale Items</p>
                            <p className="price">567</p>
                            <p className="icon"><ArrowDropUpIcon /><span>0.23%</span></p>
                        </div>
                        <div className="right">
                            <p className="title">Sale Revenue</p>
                            <p className="price">$11197</p>
                            <p className="icon"><ArrowDropDownIcon /><span>0.15%</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SaleValue;
