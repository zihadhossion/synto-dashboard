import "./appratio.scss";
import Topbar from "../../../components/ui/topbar/Topbar";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Piechart from "../../../components/ui/pieChart/Piechart";

function AppRatio({ title, IconBox, chartData }) {
    return (
        <div className="appratio">
            <section>
                <Topbar title={"Acceptance Ratio"} IconBox={IconBox} />
                <div className="arContainer">
                    <Piechart data={chartData} />
                    <article className="descBox">
                        <div className="desc">
                            <div className="left arBox">
                                <div className="icon">
                                    <CheckCircleOutlineIcon />
                                </div>
                                <div className="textContent">
                                    <p className="title">Sale Items</p>
                                    <p className="number">567</p>
                                </div>
                            </div>
                            <div className="right arBox">
                                <div className="icon">
                                    <CancelOutlinedIcon />
                                </div>
                                <div className="textContent">
                                    <p className="title">Sale Items</p>
                                    <p className="number">567</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="upgrade">
                <div className="left">
                    <h2 className="title">upgrade to pro</h2>
                    <p className="desc">for premium benefits</p>
                </div>
                <div className="right">
                    <button>Upgrade</button>
                </div>
            </section>
        </div>

    )
};

export default AppRatio;
