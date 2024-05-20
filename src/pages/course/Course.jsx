import "./course.scss";
import Lists from "../../components/lists/Lists";
import Topbar from "../../components/ui/topbar/Topbar";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { countryTHData, recruitersTHData, courseTH2, rows, courseRows, courseTH1 } from "../../data/tableSource";
import { courseIcon } from "../../data/dashSource";
import ListTable from "../../components/ui/listtable/ListTable";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import DateValue from "../../utils/dateValue/DateValue";
import Dashboard from "../../components/dashboard/Dashboard";
import { svgIcon } from "../../data/dashSource";
import Item from "../../components/ui/item/Item";
import ActionBtn from "../../utils/actionBtn/ActionBtn";
import Products from "../../components/products/Products";
import Button from "../../utils/button/Button";
import MoreIcon from "../../utils/moreIcon/MoreIcon";
import BtnDrop from "../../utils/btnDrop/BtnDrop";
import MixedChart from "../../components/ui/mixedChart/MixedChart";
import { courseMixedData } from "../../data/chartData";
import Card from "./card/Card";
import Product from "../../components/ui/product/Product";
import CodeIcon from '@mui/icons-material/Code';
import Main from "../../utils/main/Main";


function Course() {
    return (
        <Main containerName="course">
            <TitleBar text="Course Dashboard" />
            <Dashboard>
                <Item title="Total Revenue" amount="$26,35,262" MySvg={svgIcon.one} BadgeIcon={TrendingUpIcon} badge="2.2%" />
                <Item title="Total Sales" amount="$56,35,262" MySvg={svgIcon.two} BadgeIcon={TrendingUpIcon} badge="1.8%" />
                <Item title="Total Products" amount="$4,262" MySvg={svgIcon.three} BadgeIcon={TrendingDownIcon} badge="2.0%" />
                <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} BadgeIcon={TrendingUpIcon} badge="1.4%" />
            </Dashboard>
            <div className="center">
                <section className="statistics">
                    <Topbar title={"Earning Report"} IconBox={<DateValue />} />
                    <div className="statisticsContainer">
                        <MixedChart data={courseMixedData} />
                    </div>
                </section>
                <Lists title={"New students"} theadData={countryTHData} rows={rows} IconBox={<Button title={"View all"} />} />
            </div>
            <div className="bottom">
                <Products title={"top instructors"} IconBox={<Button title={"View all"} />} >
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                </Products>
                <section className="courseList">
                    <Topbar title={"popular courses"} IconBox={<Button title={"View all"} />} />
                    <div className="clBox">
                        <Card />
                    </div>
                </section>
                <Products title={"top categories"} IconBox={<Button title={"View all"} />} >
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                    <Product image={"https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg"} title={"Mortal Yun"} desc={"Phd"} price={"25 Courses"} date={"Stocks & Trading"} />
                </Products>
            </div>
            <section className="mainList">
                <Topbar title={"Course List"} IconBox={<MoreIcon Icon={<BtnDrop title={"view all"} />} />} />
                <div className="mainList_Box">
                    <ListTable>
                        <table className="table">
                            <thead>
                                <tr>
                                    {courseTH2.map((item, i) =>
                                        <th key={i} className="table_head">{item}</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {courseRows.map((item) => {
                                    return <tr key={item.id} className="table_row">
                                        <td className="table_Cell">{item.slNo}</td>
                                        <td className="table_Cell">
                                            <div className="cellWrapper">
                                                <div className="imgBox">
                                                    <img src={item?.itemImg} alt="" className="image" />
                                                </div>
                                                <p className="title">{item.itemTitle}</p>
                                            </div>
                                        </td>
                                        <td className="table_Cell">
                                            {item?.category}
                                        </td>
                                        <td className="table_Cell">
                                            {item?.numClass}
                                        </td>
                                        <td className="table_Cell">
                                            {item?.date}
                                        </td>
                                        <td className="table_Cell">
                                            {item?.userName}
                                        </td>
                                        <td className="table_Cell">{item.id}</td>
                                        <td className="table_Cell">
                                            <ActionBtn />
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </ListTable>
                </div>
            </section>
        </Main>
    )
};

export default Course;
