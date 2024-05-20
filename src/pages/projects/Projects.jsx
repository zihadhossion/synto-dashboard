import "./projects.scss";
import Products from "../../components/products/Products";
import Lists from "../../components/lists/Lists";
import Table from "../../components/ui/table/Table";
import Topbar from "../../components/ui/topbar/Topbar";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Item from "./item/Item";
import ListTable from "../../components/ui/listtable/ListTable";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import TrackingCard from "./trackingCard/TrackingCard";
import { projectTHData1, projectRows1, projectTHData2, projectRows2 } from "../../data/tableSource";
import Button from "../../utils/button/Button";
import MixedChart from "../../components/ui/mixedChart/MixedChart"
import ActionBtn from "../../utils/actionBtn/ActionBtn";
import { stocksMixedData } from "../../data/chartData";
import Main from "../../utils/main/Main";


function Projects() {
    return (
        <Main containerName="projects">
            <TitleBar text="Projects Dashboard" />
            <div className="top">
                <div className="projectDashboard">
                    <Item title="Total sessions" amount="1,262" MySvg={<ImportContactsIcon />} BadgeIcon={TrendingUpIcon} badge="12.2%" desc={"since last 2 months"} />
                    <Item title="Total sessions" amount="1,262" MySvg={<ImportContactsIcon />} BadgeIcon={TrendingUpIcon} badge="12.2%" desc={"since last 2 months"} />
                    <Item title="Total sessions" amount="1,262" MySvg={<ImportContactsIcon />} BadgeIcon={TrendingUpIcon} badge="12.2%" desc={"since last 2 months"} />
                </div>
                <section className="statistics">
                    <Topbar title={"Application Overview"} IconBox={""} />
                    <div className="statisticsContainer">
                        <MixedChart data={stocksMixedData} />
                    </div>
                </section>
                <TrackingCard />
            </div>
            <div className="center">
                <Lists theadData={projectTHData1} rows={projectRows1} title={"On going projects"} IconBox={<Button title={"view all"} />} />
                {/* <AppRatio /> */}
            </div>
            <section className="orderDetail">
                <Topbar title={"Project summary"} />
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

export default Projects;
