import "./barchart.scss";
import ReactApexCharts from 'react-apexcharts';

const data = {
    series: [{
        name: 'Income',
        data: [54, 27, 65, 56, 81, 58, 45, 81, 70, 56, 87, 75]
    }, {
        name: 'Expanses',
        data: [45, 36, 41, 86, 45, 68, 52, 53, 91, 55, 60, 48]
    }],
    options: {
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false
        },
        // stroke: {
        //     show: true,
        //     width: 2,
        //     colors: ['transparent']
        // },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val
                }
            }
        }
        ,
        colors: ['#8a96ff', '#d2d8f0'],
    }
}

function BarChart() {

    return (
        <div>
            <div id="chart">
                <ReactApexCharts options={data.options} series={data.series} type="bar" height={"250"} />
            </div>
            <div id="html-dist"></div>
        </div>
    )
};
export default BarChart;



