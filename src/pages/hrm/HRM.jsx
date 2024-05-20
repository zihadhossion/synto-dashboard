import { useContext } from "react";
import "./hrm.scss";
import Products from "../../components/products/Products";
import Lists from "../../components/lists/Lists";
import Table from "../../components/ui/table/Table";
import Topbar from "../../components/ui/topbar/Topbar";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Item from "../../components/ui/item/Item";
// import Reviews from "../../components/reviews/Reviews";
import TaskList from "../../components/taskList/TaskList";
import MixedChart from "../../components/ui/mixedChart/MixedChart";
import CandleChart from "../../components/ui/candleChart/CandleChart";
import { applicantData } from "../../data/dashSource";
import { countryTHData, recruitersTHData, rows } from "../../data/tableSource";
import ListTable from "../../components/ui/listtable/ListTable";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
// import Applicant from "../../components/jobs/applicant/Applicant";
import Dashboard from "../../components/dashboard/Dashboard";
import ActionBtn from "../../utils/actionBtn/ActionBtn";
import { svgIcon } from "../../data/dashSource";
import { projectTHData1, projectRows1, projectTHData2, projectRows2 } from "../../data/tableSource";
import StackChart from "./stackChart/StackChart";
import Main from "../../utils/main/Main";


function HRM() {
    return (
        <Main containerName="hrm">
            <TitleBar text="Projects Dashboard" />
            <Dashboard>
                <Item title="Total Revenue" amount="$26,35,262" MySvg={svgIcon.one} BadgeIcon={TrendingUpIcon} badge="2.2%" desc={"in the last week"} />
                <Item title="Total Sales" amount="$56,35,262" MySvg={svgIcon.two} BadgeIcon={TrendingUpIcon} badge="1.8%" />
                <Item title="Total Products" amount="$4,262" MySvg={svgIcon.three} BadgeIcon={TrendingDownIcon} badge="2.0%" />
                <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} BadgeIcon={TrendingUpIcon} badge="1.4%" />
            </Dashboard>
            <div className="center">
                <StackChart />
                {/* <Applicant /> */}
            </div>
            <div className="bottom">
                <Lists title={"attendance"} theadData={countryTHData} rows={rows} />
                <Lists title={"Top Recruiters"} theadData={recruitersTHData} rows={rows} />
            </div>
            <section className="orderDetail">
                <Topbar title={"Recent Order Details"} />
                <ListTable>
                    <table className="table">
                        <thead>
                            <tr>
                                {projectTHData2.map((item, i) =>
                                    <th key={i} className="table_head">{item}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {projectRows2.map((item) => {
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
        </Main>
    )
};

export default HRM;
