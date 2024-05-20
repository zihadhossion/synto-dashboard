import "./home.scss";
import Customers from "../../components/customers/Customers";
import Products from "../../components/products/Products";
import Lists from "../../components/lists/Lists";
import Dashboard from "../../components/dashboard/Dashboard";
import Topbar from "../../components/ui/topbar/Topbar";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import ListTable from "../../components/ui/listtable/ListTable";
import BarChart from "../../components/ui/barChart/BarChart";
import Product from "../../components/ui/product/Product";
import ActionBtn from "../../utils/actionBtn/ActionBtn";
import MoreIcon from "../../utils/moreIcon/MoreIcon";
import BtnDrop from "../../utils/btnDrop/BtnDrop";
import SaleChart from "./saleChart/SaleChart";
import SaleValue from "./saleValue/SaleValue";
import Item from "./item/Item";
import { thData, homeTHdata, rows, homeRows } from "../../data/tableSource";
import { svgIcon } from "../../data/dashSource";
import { homeBarData, homePieData } from "../../data/chartData";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Main from "../../utils/main/Main";

function Home() {

    return (
        <Main containerName="home">
            <TitleBar />
            <Dashboard>
                <Item title="Total Revenue" amount="$26,35,262" MySvg={svgIcon.one} BadgeIcon={TrendingUpIcon} badge="2.2%" desc={"in the last week"} />
                <Item title="Total Sales" amount="$56,35,262" MySvg={svgIcon.two} BadgeIcon={TrendingUpIcon} badge="1.8%" />
                <Item title="Total Products" amount="$4,262" MySvg={svgIcon.three} BadgeIcon={TrendingDownIcon} badge="2.0%" />
                <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} BadgeIcon={TrendingUpIcon} badge="1.4%" />
            </Dashboard>
            <div className="center">
                <SaleChart IconBox={<MoreIcon Icon={<MoreVertIcon />} />} />
                <Customers IconBox={<MoreIcon Icon={<MoreVertIcon />} />} />
                <SaleValue IconBox={<MoreIcon Icon={<MoreVertIcon />} />} data={homePieData} />
            </div>
            <div className="bottom">
                <Products title={"Upcoming Products"} IconBox={<MoreIcon Icon={<MoreVertIcon />} />} >
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/ecommerce/jpg/4.jpg"} title={"Smart Phone"} desc={"Mobiles"} price={"$199.99"} date={"1 Apr 2023"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/ecommerce/jpg/4.jpg"} title={"Nikon Camera"} desc={"Electronics"} price={"$899.00"} date={"1 Apr 2023"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/ecommerce/jpg/4.jpg"} title={"Stop Watch"} desc={"Electronics"} price={"$39.99"} date={"1 Apr 2023"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/ecommerce/jpg/4.jpg"} title={"Smart Phone"} desc={"Mobiles"} price={"$199.99"} date={"1 Apr 2023"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/ecommerce/jpg/4.jpg"} title={"Nikon Camera"} desc={"Electronics"} price={"$899.00"} date={"1 Apr 2023"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/ecommerce/jpg/4.jpg"} title={"Stop Watch"} desc={"Electronics"} price={"$39.99"} date={"1 Apr 2023"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/ecommerce/jpg/4.jpg"} title={"Stop Watch"} desc={"Electronics"} price={"$39.99"} date={"1 Apr 2023"} />
                </Products>
                <section className="visitor">
                    <Topbar title={"Social Visitors"} IconBox={<MoreIcon Icon={<BtnDrop title={"This Week"} />} />} />
                    <div className="visitorContainer">
                        <BarChart data={homeBarData} />
                    </div>
                </section>
                <Lists title={"Top Selling Products"} theadData={thData} rows={rows} IconBox={<MoreIcon Icon={<MoreVertIcon />} />} />
            </div>
            <section className="orderDetail">
                <Topbar title={"Recent Order Details"} IconBox={<MoreIcon Icon={<BtnDrop title={"View all"} />} />} />
                <ListTable>
                    <table className="table">
                        <thead>
                            <tr>
                                {homeTHdata.map((item, i) =>
                                    <th key={i} className="table_head">{item}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {homeRows.map((item) => {
                                return <tr key={item.id} className="table_row">
                                    <td className="table_Cell">{item.slNo}</td>
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
                                        <div className="cellWrapper">
                                            <div className="imgBox">
                                                <img src={item.userImg} alt="" className="image" />
                                            </div>
                                            <div className="text">
                                                <p className="title">{item.userName}</p>
                                                <p className="desc">{item.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="table_Cell">
                                        {item.date}
                                    </td>
                                    <td className="table_Cell">{item.status}</td>
                                    <td className="table_Cell">{item.price}</td>
                                    <td className="table_Cell">
                                        <ActionBtn />
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </ListTable>
            </section>

        </Main>
    )
};

export default Home;


