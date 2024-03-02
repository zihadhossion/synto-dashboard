import { useContext } from "react";
import "./ecommerce.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Lists from "../../components/lists/Lists";
import Products from "../../components/products/Products";
import Topbar from "../../components/ui/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import Item from "./item/Item";
import Reviews from "./reviews/Reviews";
import TaskList from "../../components/taskList/TaskList";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import Dashboard from "../../components/dashboard/Dashboard";
import ListTable from "../../components/ui/listtable/ListTable";
import DateValue from "../../utils/dateValue/DateValue";
import { svgIcon } from "../../data/dashSource";
import { ecommerceTHdata1, ecommerceTHdata2, ecommerceRows1, ecommerceRows2 } from "../../data/tableSource";
import ActionBtn from "../../utils/actionBtn/ActionBtn";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreIcon from "../../utils/moreIcon/MoreIcon";
import Button from "../../utils/button/Button";
import BtnDrop from "../../utils/btnDrop/BtnDrop";
import MixedChart from "../../components/ui/mixedChart/MixedChart";
import { eMixedData } from "../../data/chartData";
import Product from "../../components/ui/product/Product";
import item1 from "../../assets/item-1.jpg";
import item2 from "../../assets/item-2.jpg";
import item3 from "../../assets/item-3.jpg";


function Ecommerce() {

    return (
        <main className="main ecommerce">
            <Sidebar />
            <Navbar />
            <div className="main-container ecommerce-Container">
                <div className="sub_container">
                    <TitleBar text={"Ecommerce Dashboard"} />
                    <Dashboard>
                        <Item title="Total Orders" amount="$26,35,262" MySvg={svgIcon.one} badge="+12%" desc={"Increased by"} />
                        <Item title="Total Sales" amount="$56,35,262" MySvg={svgIcon.two} badge="-1.8%" desc={"Decreased by"} />
                        <Item title="Total Products" amount="$4,262" MySvg={svgIcon.three} badge="20%" desc={"Increased by"} />
                        <Item title="Total visitor" amount="$35,262" MySvg={svgIcon.four} badge="14%" desc={"Increased by"} />
                        <Item title="Total Products" amount="$4,262" MySvg={svgIcon.three} badge="20%" desc={"Increased by"} />
                        <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} badge="14%" desc={"Increased by"} />
                    </Dashboard>
                    <div className="center">
                        <Products title={"Recent Orders"} IconBox={<MoreIcon Icon={<MoreVertIcon />} />} >
                            <Product image={item1} title={"Smart Phone"} desc={"Mobiles"} price={"$199.99"} date={"1 Apr 2023"} />
                            <Product image={item2} title={"Nikon Camera"} desc={"Electronics"} price={"$899.00"} date={"1 Apr 2023"} />
                            <Product image={item3} title={"Stop Watch"} desc={"Electronics"} price={"$39.99"} date={"1 Apr 2023"} />
                            <Product image={item1} title={"Smart Phone"} desc={"Mobiles"} price={"$199.99"} date={"1 Apr 2023"} />
                            <Product image={item2} title={"Nikon Camera"} desc={"Electronics"} price={"$899.00"} date={"1 Apr 2023"} />
                            <Product image={item3} title={"Stop Watch"} desc={"Electronics"} price={"$39.99"} date={"1 Apr 2023"} />
                        </Products>
                        <section className="statistics">
                            <Topbar title={"Order vs Sales"} IconBox={<DateValue />} />
                            <div className="statisticsContainer">
                                <MixedChart data={eMixedData} />
                            </div>
                        </section>
                        <Reviews IconBox={<Button title={"view all"} />} />
                    </div>
                    <div className="bottom">
                        <TaskList IconBox={<MoreIcon Icon={<MoreVertIcon />} />} />
                        <Lists title={"Top Selling Products"} theadData={ecommerceTHdata1} rows={ecommerceRows1} IconBox={<MoreIcon Icon={<MoreVertIcon />} />} />
                    </div>
                    <section className="orderDetail">
                        <Topbar title={"Products overview"} IconBox={<MoreIcon Icon={<BtnDrop title={"sort by"} />} />} />
                        <ListTable>
                            <table className="table">
                                <thead>
                                    <tr>
                                        {ecommerceTHdata2.map((item, i) =>
                                            <th key={i} className="table_head">{item}</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {ecommerceRows2.map((item) => {
                                        return <tr key={item.id} className="table_row">
                                            <td className="table_Cell">{item.date}</td>
                                            <td className="table_Cell">
                                                <div className="cellWrapper">
                                                    <div className="imgBox">
                                                        <img src={item?.itemImg} alt="" className="image" />
                                                    </div>
                                                    <div className="text">
                                                        <p className="title">{item.itemTitle}</p>
                                                        <p className="desc">#215{item?.slNo}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="table_Cell">
                                                #{item.id}
                                            </td>
                                            <td className="table_Cell">
                                                #2024{item.id}{item.slNo}
                                            </td>
                                            <td className="table_Cell">{item.price}</td>
                                            <td className="table_Cell">{item.paymentMethod}</td>
                                            <td className="table_Cell">{item.status}</td>
                                            <td className="table_Cell">{item.id}</td>
                                            <td className="table_Cell">{item.id}{item.slNo}</td>
                                            <td className="table_Cell">
                                                <ActionBtn />
                                            </td>
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

export default Ecommerce;
