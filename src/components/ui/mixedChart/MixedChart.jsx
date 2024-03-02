import "./mixedchart.scss";
import ReactApexCharts from 'react-apexcharts';

function MixedChart({ data }) {

    return (
        <div className="mixedchart">
            <div id="chart">
                <ReactApexCharts options={data.options} series={data.series} type="line" height={data.height} />
            </div>
        </div>
    )
};

export default MixedChart;
