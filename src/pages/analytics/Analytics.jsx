import "./analytics.scss";
import Lists from "../../components/lists/Lists";
import Topbar from "../../components/ui/topbar/Topbar";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Item from "../../components/ui/item/Item";
import { analyticsTHData1, analyticsRows1, analyticsTHData2, analyticsRows2 } from "../../data/tableSource";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import ListTable from "../../components/ui/listtable/ListTable";
import Dashboard from "../../components/dashboard/Dashboard";
import SessionView from "./sessionView/SessionView";
import AudienceView from "./audienceView/AudienceView";
import DeviceView from "./deviceView/DeviceView";
import Countries from "./countries/Countries";
import GenderView from "./genderView/GenderView";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Main from "../../utils/main/Main";

function Analytics() {
    return (
        <Main containerName="analytics">
            <TitleBar text="Analytics Dashboard" />
            <Dashboard>
                <Item title="Total sessions" amount="1,262" MySvg={<RemoveRedEyeOutlinedIcon />} BadgeIcon={TrendingUpIcon} badge="12.2%" desc={"since last 2 months"} />
                <Item title="Total sessions" amount="1,262" MySvg={<RemoveRedEyeOutlinedIcon />} BadgeIcon={TrendingUpIcon} badge="12.2%" desc={"since last 2 months"} />
                <Item title="Total sessions" amount="1,262" MySvg={<RemoveRedEyeOutlinedIcon />} BadgeIcon={TrendingUpIcon} badge="12.2%" desc={"since last 2 months"} />
                <Item title="Total sessions" amount="1,262" MySvg={<RemoveRedEyeOutlinedIcon />} BadgeIcon={TrendingUpIcon} badge="12.2%" desc={"since last 2 months"} />
            </Dashboard>
            <div className="center">
                <SessionView />
                <Countries />
                <DeviceView />
            </div>
            <div className="bottom">
                <GenderView />
                <Lists title={"Registers By Country"} theadData={analyticsTHData1} rows={analyticsRows1} />
                <AudienceView />
            </div>
            <section className="orderDetail">
                <Topbar title={"Visitors by channel"} />
                <ListTable>
                    <table className="table">
                        <thead>
                            <tr>
                                {analyticsTHData2.map((item, i) =>
                                    <th key={i} className="table_head">{item}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {analyticsRows2.map((item) => {
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
        </Main>
    )
};

export default Analytics;
