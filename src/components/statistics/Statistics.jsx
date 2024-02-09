import "./statistics.scss";
import MixedChart from "../ui/mixedChart/MixedChart";
import Topbar from "../ui/topbar/Topbar";
function Statistics() {
    return (
        <section className="statistics">
            <Topbar title={"Order vs Sales"} />
            <div className="statisticsContainer">
                <MixedChart />
            </div>
        </section>
    )
};

export default Statistics;
