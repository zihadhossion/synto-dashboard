import "./statistics.scss";
import MixedChart from "../ui/mixedChart/MixedChart";
import Topbar from "../ui/topbar/Topbar";

function Statistics({ title, IconBox }) {
    return (
        <section className="statistics">
            <Topbar title={title} IconBox={IconBox} />
            <div className="statisticsContainer">
                <MixedChart />
            </div>
        </section>
    )
};

export default Statistics;
