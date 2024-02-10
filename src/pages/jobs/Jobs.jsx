import { useContext } from "react";
import "./jobs.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Products from "../../components/products/Products";
import SellProduct from "../../components/sellProduct/SellProduct";
import Table from "../../components/ui/table/Table";
import Topbar from "../../components/ui/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Item from "../../components/ui/item/Item";
import Reviews from "../../components/reviews/Reviews";
import TaskList from "../../components/taskList/TaskList";
import MixedChart from "../../components/ui/mixedChart/MixedChart";
import CandleChart from "../../components/ui/candleChart/CandleChart";
import { applicantData } from "../../data/dashSource";
import { countryTHData, recruitersTHData, rows } from "../../data/tableSource";
import ListTable from "../../components/listtable/ListTable";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import Statistics from "../../components/statistics/Statistics";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Applicant from "../../components/jobs/applicant/Applicant";
import AppRatio from "../../components/jobs/appRatio/AppRatio";

function Jobs() {

    return (
        <main className="main jobs">
            <Sidebar />
            <Navbar />
            <div className="main-container jobs-Container">
                <div className="sub_container">
                    <TitleBar text="Jobs Dashboard" />
                    <div className="dashboard">
                        <div className="dashboardContainer">
                            <div className="box">
                                <Item amount="$26,35,262" MySvg={<PeopleAltOutlinedIcon />} BadgeIcon={TrendingUpIcon} badge="2.2%" />
                            </div>
                            <div className="box">
                                <Item title="Total Sales" amount="$56,35,262" MySvg={<PeopleAltOutlinedIcon />} BadgeIcon={TrendingUpIcon} badge="1.8%" />
                            </div>
                            <div className="box down">
                                <Item title="Total Products" amount="$4,262" MySvg={<PeopleAltOutlinedIcon />} BadgeIcon={TrendingDownIcon} badge="2.0%" />
                            </div>
                            <div className="box">
                                <Item title="Total Expenses" amount="$35,262" MySvg={<PeopleAltOutlinedIcon />} BadgeIcon={TrendingUpIcon} badge="1.4%" />
                            </div>
                        </div>
                    </div>
                    <Statistics title={"Application Overview"} />
                    <div className="center">
                        <Applicant />
                        <AppRatio />
                    </div>
                    <div className="bottom">
                        <SellProduct title={"Registers By Country"} theadData={countryTHData} rows={rows} />
                        <SellProduct title={"Top Recruiters"} theadData={recruitersTHData} rows={rows} />
                    </div>
                    <section className="orderDetail">
                        <Topbar title={"Recent Order Details"} />
                        <ListTable />
                    </section>
                </div>
                <Footer />
            </div>
        </main>
    )
};

export default Jobs;
