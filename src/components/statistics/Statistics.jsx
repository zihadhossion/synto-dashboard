import "./statistics.scss";
import MixedChart from "../ui/mixedChart/MixedChart";
import Topbar from "../ui/topbar/Topbar";
function Statistics({ title }) {
    return (
        <section className="statistics">
            <Topbar title={title} />
            <div className="statisticsContainer">
                <MixedChart />
            </div>
        </section>
    )
};

export default Statistics;
