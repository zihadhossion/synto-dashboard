import { useContext } from "react";
import "./course.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import SellProduct from "../../components/productList/ProductList";
import Topbar from "../../components/ui/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { countryTHData, recruitersTHData, courseTH2, rows, courseRows, courseTH1 } from "../../data/tableSource";
import { courseIcon } from "../../data/dashSource";
import ListTable from "../../components/course/listtable/ListTable";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import Statistics from "../../components/statistics/Statistics";
import DateValue from "../../utils/dateValue/DateValue";
import Card from "../../components/course/card/Card";
import Datatable from "../../components/course/datatable/Datatable";

function Course() {
    return (
        <main className="main course">
            <Sidebar />
            <Navbar />
            <div className="main-container course-Container">
                <div className="sub_container">
                    <TitleBar text="Course Dashboard" />
                    <div className="dashboard">
                        <div className="dashboardContainer">
                            <div className="box">
                                <Card amount="$26,35,262" title={"YTD Earning"} MySvg={courseIcon.one} BadgeIcon={TrendingUpIcon} badge="2.2%" />
                            </div>
                            <div className="box">
                                <Card amount="$26,35,262" title={"Total Students"} MySvg={courseIcon.two} BadgeIcon={TrendingDownIcon} badge="2.2%" />
                            </div>
                            <div className="box down">
                                <Card amount="$26,35,262" title={"Total Students"} MySvg={courseIcon.three} BadgeIcon={TrendingUpIcon} badge="2.2%" />
                            </div>
                            <div className="box">
                                <Card amount="$26,35,262" title={"YTD Earning"} MySvg={courseIcon.four} BadgeIcon={TrendingUpIcon} badge="2.2%" />
                            </div>
                        </div>
                    </div>
                    <div className="center">
                        <Statistics title={"Earning Report"} IconBox={DateValue} />
                        {/* <Datatable title={"New Students"} theadData={courseTH1} rows={rows} /> */}
                    </div>
                    <div className="bottom">
                        <SellProduct title={"Registers By Country"} theadData={countryTHData} rows={rows} />
                        <SellProduct title={"Top Recruiters"} theadData={recruitersTHData} rows={rows} />
                    </div>
                    <section className="orderDetail">
                        <Topbar title={"Course List"} />
                        <div className="odContainer">
                            {/* <ListTable theadData={courseTH2} rows={courseRows} /> */}
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </main>
    )
};

export default Course;
