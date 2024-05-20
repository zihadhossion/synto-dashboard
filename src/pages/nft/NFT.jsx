import "./nft.scss";
import Lists from "../../components/lists/Lists";
import Topbar from "../../components/ui/topbar/Topbar";
import { countryTHData, recruitersTHData, rows, nftTHData1, nftRows1 } from "../../data/tableSource";
import ListTable from "../../components/ui/listtable/ListTable";
import TitleBar from "../../components/ui/titleBar/TitleBar";
import { svgIcon } from "../../data/dashSource";
import NftItem from "./nftItem/NftItem";
import CandleChart from "../../components/ui/candleChart/CandleChart";
import DateValue from "../../utils/dateValue/DateValue";
import Slider from "../../components/slider/Slider";
import Main from "../../utils/main/Main";

function NFT() {
    return (
        <Main containerName="nft">
            <TitleBar text="NFT Dashboard" />
            <NftItem />
            <div className="center">
                <CandleChart title={"Sales Overview"} IconBox={<DateValue />} />
                {/* <Applicant /> */}
                <Slider />
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
                                {nftTHData1.map((item, i) =>
                                    <th key={i} className="table_head">{item}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {nftRows1.map((item) => {
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

export default NFT;
