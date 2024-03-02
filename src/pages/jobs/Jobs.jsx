import { useContext } from "react";
import "./jobs.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Lists from "../../components/lists/Lists";
import Topbar from "../../components/ui/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Item from "../../components/ui/item/Item";
import { countryTHData, recruitersTHData, rows, jobsTHData1, jobsRows1 } from "../../data/tableSource";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import { svgIcon } from "../../data/dashSource";
import ListTable from "../../components/ui/listtable/ListTable";
import Applicant from "./applicant/Applicant";
import DateValue from "../../utils/dateValue/DateValue";
import Dashboard from "../../components/dashboard/Dashboard";
import BtnDrop from "../../utils/btnDrop/BtnDrop";
import MoreIcon from "../../utils/moreIcon/MoreIcon";
import MixedChart from "../../components/ui/mixedChart/MixedChart";
import { jobMixedData, jobPieData } from "../../data/chartData";
import Button from "../../utils/button/Button";
import AppRatio from "./appRatio/AppRatio";

function Jobs() {

    return (
        <main className="main jobs">
            <Sidebar />
            <Navbar />
            <div className="main-container jobs-Container">
                <div className="sub_container">
                    <TitleBar text="Jobs Dashboard" />
                    <Dashboard>
                        <Item title="Total Revenue" amount="$26,35,262" MySvg={svgIcon.one} BadgeIcon={TrendingUpIcon} badge="2.2%" />
                        <Item title="Total Sales" amount="$56,35,262" MySvg={svgIcon.two} BadgeIcon={TrendingUpIcon} badge="1.8%" />
                        <Item title="Total Products" amount="$4,262" MySvg={svgIcon.three} BadgeIcon={TrendingDownIcon} badge="2.0%" />
                        <Item title="Total Expenses" amount="$35,262" MySvg={svgIcon.four} BadgeIcon={TrendingUpIcon} badge="1.4%" />
                    </Dashboard>
                    <div className="top">
                        <section className="statistics">
                            <Topbar title={"Application Overview"} IconBox={<MoreIcon Icon={<BtnDrop title={"this week"} />} />} />
                            <div className="content">
                                <MixedChart data={jobMixedData} />
                            </div>
                        </section>
                        <Applicant title={"New Applicants"} icon={<Button title={"view all"} />} />
                    </div>
                    <div className="center">
                        <AppRatio IconBox={<MoreIcon Icon={<BtnDrop title={"this week"} />} />} chartData={jobPieData} />
                        <Lists title={"Recent Recruiter Registrations"} theadData={recruitersTHData} rows={rows} />
                    </div>
                    <div className="bottom">
                        <Lists title={"Registers By Country"} theadData={countryTHData} rows={rows} />
                        <Lists title={"Top Recruiters"} theadData={recruitersTHData} rows={rows} />
                    </div>
                    <section className="orderDetail">
                        <Topbar title={"Crypto currency market details"} IconBox={<DateValue />} />
                        <ListTable>
                            <table className="table">
                                <thead>
                                    <tr>
                                        {jobsTHData1.map((item, i) =>
                                            <th key={i} className="table_head">{item}</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobsRows1.map((item) => {
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

export default Jobs;
