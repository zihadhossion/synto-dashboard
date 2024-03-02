import { useContext } from "react";
import "./personal.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Products from "../../components/products/Products";
import Lists from "../../components/lists/Lists";
import Table from "../../components/ui/table/Table";
import Topbar from "../../components/ui/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Item from "../../components/ui/item/Item";
import { applicantData } from "../../data/dashSource";
import { countryTHData, recruitersTHData, rows, personalTHData1, personalRows1 } from "../../data/tableSource";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
// import Applicant from "../../components/jobs/applicant/Applicant";
// import AppRatio from "../../components/jobs/appRatio/AppRatio";
import ListTable from "../../components/ui/listtable/ListTable";
import Dashboard from "../../components/dashboard/Dashboard";
import { svgIcon } from "../../data/dashSource";
import ColumnChart from "../../components/ui/columnChart/ColumnChart";
import Contact from "./contact/Contact";
import DateValue from "../../utils/dateValue/DateValue";
import MoreIcon from "../../utils/moreIcon/MoreIcon";
import { personalData } from "../../data/chartData";
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Personal() {
    return (
        <main className="main personal">
            <Sidebar />
            <Navbar />
            <div className="main-container personal-Container">
                <div className="sub_container">
                    <TitleBar text="Personal Dashboard" />
                    <Dashboard>
                        <Item title="Total balance" amount="$26,35,262" MySvg={svgIcon.one} BadgeIcon={TrendingUpIcon} badge="2.2%" desc={"in the last week"} />
                        <Item title="Total income" amount="$56,35,262" MySvg={svgIcon.two} BadgeIcon={TrendingUpIcon} badge="1.8%" />
                        <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} BadgeIcon={TrendingUpIcon} badge="1.4%" />
                        <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} BadgeIcon={TrendingUpIcon} badge="1.4%" />
                    </Dashboard>
                    <div className="center">
                        <section className="statistics">
                            <Topbar title={"statistics"} IconBox={<DateValue />} />
                            <div className="statisBox">
                                <ColumnChart data={personalData} />
                            </div>
                        </section>
                        <section className="contacts">
                            <Topbar title={"contacts"} IconBox={<MoreIcon Icon={<MoreVertIcon />} />} />
                            <div className="contactBox">
                                <Contact />
                                <Contact />
                                <Contact />
                                <Contact />
                                <Contact />
                            </div>
                        </section>
                        {/* <Applicant />
                        <AppRatio /> */}
                    </div>
                    <div className="bottom">
                        <Lists title={"Registers By Country"} theadData={countryTHData} rows={rows} />
                        <Lists title={"Top Recruiters"} theadData={recruitersTHData} rows={rows} />
                    </div>
                    <section className="orderDetail">
                        <Topbar title={"Recent Order Details"} />
                        <ListTable>
                            <table className="table">
                                <thead>
                                    <tr>
                                        {personalTHData1.map((item, i) =>
                                            <th key={i} className="table_head">{item}</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {personalRows1.map((item) => {
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

export default Personal;
