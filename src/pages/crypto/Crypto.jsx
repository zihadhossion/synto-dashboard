import "./crypto.scss";
import Products from "../../components/products/Products";
import Lists from "../../components/lists/Lists";
import Topbar from "../../components/ui/topbar/Topbar";
import CandleChart from "../../components/ui/candleChart/CandleChart";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import ListTable from "../../components/ui/listtable/ListTable";
import Dashboard from "../../components/dashboard/Dashboard";
import Item from "./item/Item";
import { cryptoTHData1, cryptoTHData2, cryptoRows, rows } from "../../data/tableSource";
import DateValue from "../../utils/dateValue/DateValue";
import Button from "../../utils/button/Button";
import MoreIcon from "../../utils/moreIcon/MoreIcon";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Product from "../../components/ui/product/Product";
import item1 from "../../assets/item-1.jpg";
import item2 from "../../assets/item-2.jpg";
import item3 from "../../assets/item-3.jpg";
import Main from "../../utils/main/Main";

function Crypto() {

    return (
        <Main containerName="crypto">
            <TitleBar text={"Crypto Dashboard"} />
            <Dashboard>
                <Item title="Bitcoin" amount="$2,35,262" MySvg={<CurrencyBitcoinIcon />} badge="-0.52%" BadgeIcon={<ArrowDownwardIcon />} desc={"btc/usd"} cls={"down"} />
                <Item title="Bitcoin" amount="$5,35,262" MySvg={<CurrencyBitcoinIcon />} badge="+1.2%" BadgeIcon={<ArrowUpwardIcon />} desc={"btc/usd"} />
                <Item title="Bitcoin" amount="$45,262" MySvg={<CurrencyBitcoinIcon />} badge="+1.2%" BadgeIcon={<ArrowUpwardIcon />} desc={"btc/usd"} />
                <Item title="Bitcoin" amount="$35,262" MySvg={<CurrencyBitcoinIcon />} badge="+1.2%" BadgeIcon={<ArrowUpwardIcon />} desc={"btc/usd"} />
            </Dashboard>
            <div className="center">
                <CandleChart title={"Sales Overview"} IconBox={<DateValue />} />
                <Products title={"Recent Transctions"} IconBox={<MoreIcon Icon={<MoreVertIcon />} />} >
                    <Product image={item1} title={"Smart Phone"} desc={"Mobiles"} price={"$199.99"} date={"1 Apr 2023"} />
                    <Product image={item2} title={"Nikon Camera"} desc={"Electronics"} price={"$899.00"} date={"1 Apr 2023"} />
                    <Product image={item3} title={"Stop Watch"} desc={"Electronics"} price={"$39.99"} date={"1 Apr 2023"} />
                    <Product image={item1} title={"Smart Phone"} desc={"Mobiles"} price={"$199.99"} date={"1 Apr 2023"} />
                    <Product image={item2} title={"Nikon Camera"} desc={"Electronics"} price={"$899.00"} date={"1 Apr 2023"} />
                    <Product image={item3} title={"Stop Watch"} desc={"Electronics"} price={"$39.99"} date={"1 Apr 2023"} />
                </Products>
            </div>
            <div className="bottom">
                <Lists title={"Your Assets"} theadData={cryptoTHData1} rows={rows} IconBox={<Button title={"Add new"} />} />
                <Products title={"Recent Transctions"} IconBox={<MoreIcon Icon={<MoreVertIcon />} />} >
                    <Product image={item1} title={"Smart Phone"} desc={"Mobiles"} price={"$199.99"} date={"1 Apr 2023"} />
                    <Product image={item2} title={"Nikon Camera"} desc={"Electronics"} price={"$899.00"} date={"1 Apr 2023"} />
                    <Product image={item3} title={"Stop Watch"} desc={"Electronics"} price={"$39.99"} date={"1 Apr 2023"} />
                    <Product image={item1} title={"Smart Phone"} desc={"Mobiles"} price={"$199.99"} date={"1 Apr 2023"} />
                    <Product image={item2} title={"Nikon Camera"} desc={"Electronics"} price={"$899.00"} date={"1 Apr 2023"} />
                    <Product image={item3} title={"Stop Watch"} desc={"Electronics"} price={"$39.99"} date={"1 Apr 2023"} />
                </Products>
            </div>
            <section className="orderDetail">
                <Topbar title={"Crypto currency market details"} IconBox={<DateValue />} />
                <ListTable>
                    <table className="table">
                        <thead>
                            <tr>
                                {cryptoTHData2.map((item, i) =>
                                    <th key={i} className="table_head">{item}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {cryptoRows.map((item) => {
                                return <tr key={item.id} className="table_row">
                                    <td className="table_Cell">{item.slNo}</td>
                                    <td className="table_Cell">
                                        {item.name}
                                    </td>
                                    <td className="table_Cell">
                                        <div className="cellWrapper">
                                            <img className="imgBox" src={item.symbol} alt="" />
                                            <span>{item.name}</span>
                                        </div>
                                    </td>
                                    <td className="table_Cell">{item.price}</td>
                                    <td className="table_Cell">
                                        ${Math.floor(Math.random() * 1)}24{item.id}{Math.ceil(Math.random() * 1)}
                                    </td>
                                    <td className="table_Cell">
                                        {item.graph}
                                    </td>
                                    <td className="table_Cell">
                                        .{item.slNo}%
                                    </td>
                                    <td className="table_Cell">
                                        20{item.id}24{item.slNo}
                                    </td>

                                    {/* <td className="table_Cell">
                                                <ActionBtn />
                                            </td> */}
                                </tr>
                            })}
                        </tbody>
                    </table>
                </ListTable>
            </section>
        </Main>
    )
};

export default Crypto;
