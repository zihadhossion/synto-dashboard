import { useContext } from "react";
import "./ecommerce.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ProductList from "../../components/productList/ProductList";
import Products from "../../components/products/Products";
import Topbar from "../../components/ui/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import Item from "../../components/ecommerce/item/Item";
import Reviews from "../../components/reviews/Reviews";
import TaskList from "../../components/taskList/TaskList";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import Statistics from "../../components/statistics/Statistics";
import Dashboard from "../../components/dashboard/Dashboard";
import ListTable from "../../components/ui/listtable/ListTable";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MoreIcon from "../../utils/moreIcon/MoreIcon";
import DateValue from "../../utils/dateValue/DateValue";
import { svgIcon } from "../../data/dashSource";
import { ecommerceTHdata1, ecommerceTHdata2, ecommerceRows1, ecommerceRows2 } from "../../data/tableSource";
import ActionBtn from "../../utils/actionBtn/ActionBtn";

function Ecommerce() {

    return (
        <main className="main ecommerce">
            <Sidebar />
            <Navbar />
            <div className="main-container ecommerce-Container">
                <div className="sub_container">
                    <TitleBar text={"Ecommerce Dashboard"} />
                    <Dashboard>
                        <Item title="Total Revenue" amount="$26,35,262" MySvg={svgIcon.one} badge="+22%" desc={"Increase by"} />
                        <Item title="Total Sales" amount="$56,35,262" MySvg={svgIcon.two} badge="18%" desc={"Increase by"} />
                        <Item title="Total Products" amount="$4,262" MySvg={svgIcon.three} badge="20%" desc={"Increase by"} />
                        <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} badge="14%" desc={"Increase by"} />
                        <Item title="Total Products" amount="$4,262" MySvg={svgIcon.three} badge="20%" desc={"Increase by"} />
                        <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} badge="14%" desc={"Increase by"} />
                    </Dashboard>
                    <div className="center">
                        <Products title={"Recent Orders"} IconBox={<MoreIcon />} />
                        <Statistics title={"Order vs Sales"} IconBox={<DateValue />} />
                        <Reviews IconBox={<MoreIcon />} />
                    </div>
                    <div className="bottom">
                        <TaskList IconBox={<MoreIcon />} />
                        <ProductList title={"Top Selling Products"} theadData={ecommerceTHdata1} rows={ecommerceRows1} IconBox={<MoreIcon />} />
                    </div>
                    <section className="orderDetail">
                        <Topbar title={"Recent Order Details"} />
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
