import { useContext } from "react";
import "./crypto.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Products from "../../components/products/Products";
import SellProduct from "../../components/productList/ProductList";
import Table from "../../components/ui/table/Table";
import Topbar from "../../components/ui/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
// import Item from "../../components/ui/item/Item";
import Reviews from "../../components/reviews/Reviews";
import TaskList from "../../components/taskList/TaskList";
import MixedChart from "../../components/ui/mixedChart/MixedChart";
import CandleChart from "../../components/ui/candleChart/CandleChart";
import { svgIcon } from "../../data/dashSource";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import ListTable from "../../components/ui/listtable/ListTable";
import { cryptoTHData1, cryptoTHData2, cryptoRows, rows } from "../../data/tableSource";
import Dashboard from "../../components/dashboard/Dashboard";
import Item from "../../components/crypto/item/Item";
import DateValue from "../../utils/dateValue/DateValue";
import MoreIcon from "../../utils/moreIcon/MoreIcon";
import Button from "../../utils/button/Button";
function Crypto() {

    return (
        <main className="main crypto">
            <Sidebar />
            <Navbar />
            <div className="main-container crypto-Container">
                <div className="sub_container">
                    <TitleBar text={"Crypto Dashboard"} />
                    <Dashboard>
                        <Item title="Bitcoin" amount="$26,35,262" MySvg={svgIcon.one} badge="+22%" desc={"btc/usd"} />
                        <Item title="Bitcoin" amount="$56,35,262" MySvg={svgIcon.two} badge="18%" desc={"btc/usd"} />
                        <Item title="Bitcoin" amount="$4,262" MySvg={svgIcon.three} badge="20%" desc={"btc/usd"} />
                        <Item title="Bitcoin" amount="$35,262" MySvg={svgIcon.four} badge="14%" desc={"btc/usd"} />
                    </Dashboard>
                    <div className="center">
                        <CandleChart title={"Sales Overview"} IconBox={<DateValue />} />
                        <Products title={"Recent Transctions"} IconBox={<MoreIcon />} />
                    </div>
                    <div className="bottom">
                        <TaskList />
                        <SellProduct title={"Your Assets"} theadData={cryptoTHData1} rows={rows} IconBox={<Button title={"Add new"} />} />
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
                                                #2024{item.id}{item.slNo}
                                            </td>
                                            <td className="table_Cell">{item.price}</td>
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
                </div>
                <Footer />
            </div>
        </main>
    )
};

export default Crypto;
